// Desplegar una nueva versión de la aplicación web; este archivo local no actualiza Google.
// Se escribe en una pestaña dedicada sin modificar las filas del formulario antiguo.
var CONTACT_PROTOCOL = "consulta-v1";
var CONTACT_SHEET_ID = "1Xan4FwV1zJpsbBap0CU-kmGnTSWivCyT2YbuTF2g_iU";
var CONTACT_SHEET_NAME = "ConsultasWeb";

function contactJson(value) {
  value.protocol = CONTACT_PROTOCOL;
  return ContentService.createTextOutput(JSON.stringify(value)).setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  // Solo informa del protocolo: no lee datos personales ni envía correos.
  return contactJson({ service: "contacto" });
}

function contactCell(value) {
  // Impide interpretar entradas del visitante como fórmulas en Sheets.
  return /^[=+@\-\t\r\n]/.test(value) ? "'" + value : value;
}

function doPost(e) {
  var params = (e && e.parameter) || {};
  var requestId = String(params.requestId || "");
  if (params.protocol !== CONTACT_PROTOCOL || !/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(requestId)) {
    return contactJson({ saved: false, code: "invalid_request" });
  }
  var data = {};
  ["nombre", "telefono", "correo", "negocio", "solucion", "necesidad", "cupon"].forEach(function(key) {
    data[key] = String(params[key] || "").trim();
  });
  if (!data.nombre || data.nombre.length > 120 || !/^\d{10}$/.test(data.telefono) ||
      (data.correo && (data.correo.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.correo))) ||
      data.negocio.length > 160 || !data.necesidad || data.necesidad.length > 2000 || data.cupon.length > 80 ||
      ["general", "pizzeria", "agenda"].indexOf(data.solucion) === -1) {
    return contactJson({ saved: false, code: "invalid_data", requestId: requestId });
  }

  var lock = LockService.getScriptLock();
  var locked = false;
  var saved = false;
  try {
    locked = lock.tryLock(5000);
    if (!locked) return contactJson({ saved: false, code: "busy", requestId: requestId });
    var book = SpreadsheetApp.openById(CONTACT_SHEET_ID);
    var sheet = book.getSheetByName(CONTACT_SHEET_NAME);
    if (!sheet) {
      sheet = book.insertSheet(CONTACT_SHEET_NAME);
      sheet.appendRow(["Referencia", "Fecha", "Nombre", "Telefono", "Correo", "Negocio", "Solucion", "Necesidad", "Cupon para revision", "Notificacion", "Huella"]);
    }
    var fingerprint = Utilities.base64EncodeWebSafe(Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, JSON.stringify(data)));
    var count = sheet.getLastRow();
    if (count > 1) {
      var rows = sheet.getRange(2, 1, count - 1, 11).getValues();
      for (var i = 0; i < rows.length; i++) {
        if (rows[i][0] === requestId) {
          if (rows[i][10] !== fingerprint) return contactJson({ saved: false, code: "id_conflict", requestId: requestId });
          return contactJson({ saved: true, requestId: requestId, notification: rows[i][9], duplicate: true });
        }
      }
    }
    sheet.appendRow([requestId, new Date().toISOString(), contactCell(data.nombre), contactCell(data.telefono), contactCell(data.correo), contactCell(data.negocio), data.solucion, contactCell(data.necesidad), contactCell(data.cupon), "pending", fingerprint]);
    SpreadsheetApp.flush();
    saved = true;
    var row = sheet.getLastRow();
    var notification = "sent";
    try {
      // Se notifica solo al responsable; no se envía correo automático a direcciones introducidas por visitantes.
      MailApp.sendEmail("enriquegv078@gmail.com", "Nueva consulta web — " + requestId,
        "Referencia: " + requestId + "\nNombre: " + data.nombre + "\nTelefono: " + data.telefono +
        "\nCorreo: " + data.correo + "\nNegocio: " + data.negocio + "\nSolucion: " + data.solucion +
        "\nNecesidad: " + data.necesidad + "\nCodigo para revision (no aplicado): " + data.cupon);
    } catch (_error) {
      notification = "failed";
    }
    // Un fallo al actualizar la notificación no invalida el registro ya guardado.
    try {
      sheet.getRange(row, 10).setValue(notification);
      SpreadsheetApp.flush();
    } catch (_error) {
      notification = "unknown";
    }
    return contactJson({ saved: true, requestId: requestId, notification: notification });
  } catch (_error) {
    return contactJson({ saved: saved, requestId: requestId, notification: "unknown", code: saved ? "saved" : "storage_error" });
  } finally {
    if (locked) lock.releaseLock();
  }
}
