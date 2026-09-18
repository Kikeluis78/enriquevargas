// Desplegar una nueva versión de la aplicación web; este archivo local no actualiza Google.
// Conserva las filas de la prueba básica y amplía sus encabezados.
var CONTACT_PROTOCOL = "consulta-v2";
var CONTACT_SHEET_ID = "1OahUh2ThlOoyLKatYeHVHT7YBeMs-7GUE1M71w8Les8";
var CONTACT_SHEET_NAME = "Contactos";
var CONTACT_SOLUTIONS = {
  general: "Aún no estoy seguro",
  tarjeta: "Tarjeta Digital",
  telegram: "Sistema de pedidos desde Telegram",
  agenda: "Agenda Digital",
  menu_whatsapp: "Menú Digital con Pedidos a WhatsApp",
  ecommerce: "E-Commerce PRO",
  web_corporativa: "Web Corporativa",
  web_android: "Web + App Android",
  android: "Aplicaciones Android"
};
var CONTACT_BASE_HEADERS = ["Fecha", "Nombre", "Telefono"];
var CONTACT_EXTRA_HEADERS = ["Referencia", "Correo", "Negocio", "Solucion", "Necesidad", "Cupon para revision", "Notificacion", "Huella", "TipoSolicitud", "NecesitaAdicionales", "FuncionesIds", "Funciones", "Comentario", "HorarioPreferido", "HorarioOtro", "NotificacionEnrique", "ConfirmacionCliente"];
var CONTACT_HOURS = { manana: "Por la mañana", tarde: "Por la tarde", sin_preferencia: "Sin preferencia", otro: "Otro horario" };

function contactJson(value, protocol) {
  value.protocol = protocol || CONTACT_PROTOCOL;
  return ContentService.createTextOutput(JSON.stringify(value)).setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  // Lectura de versión exclusivamente: sin datos personales, escritura ni correo.
  return contactJson({ service: "contacto", supportedProtocols: [CONTACT_PROTOCOL] });
}

function contactCell(value) {
  value = String(value || "");
  return /^[=+@\-\t\r\n]/.test(value) ? "'" + value : value;
}

function contactReadData(params) {
  var data = {};
  ["nombre", "telefono", "correo", "negocio", "solucion", "necesidad", "cupon"].forEach(function(key) {
    data[key] = String(params[key] || "").trim();
  });
  if (!data.nombre || data.nombre.length > 120 || !/^\d{10}$/.test(data.telefono) ||
      data.correo.length > 254 || (data.correo && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.correo)) ||
      data.negocio.length > 160 || data.necesidad.length > 2000 || data.cupon.length > 80 ||
      !Object.prototype.hasOwnProperty.call(CONTACT_SOLUTIONS, data.solucion)) return null;

  ["tipoSolicitud", "necesitaAdicionales", "comentario", "horarioPreferido", "horarioOtro"].forEach(function(key) {
    data[key] = String(params[key] || "").trim();
  });
  if (String(params.funcionesIds || "").length > 8000 || String(params.funcionesSeleccionadas || "").length > 16000) return null;
  try {
    data.funcionesIds = JSON.parse(params.funcionesIds || "[]");
    data.funcionesSeleccionadas = JSON.parse(params.funcionesSeleccionadas || "[]");
  } catch (_error) { return null; }
  if (!Array.isArray(data.funcionesIds) || !Array.isArray(data.funcionesSeleccionadas) ||
      data.funcionesIds.length > 90 || data.funcionesIds.length !== data.funcionesSeleccionadas.length ||
      data.funcionesIds.some(function(id, index, ids) { return typeof id !== "string" || !/^[a-z][a-z0-9_]{0,79}$/.test(id) || ids.indexOf(id) !== index; }) ||
      data.funcionesSeleccionadas.some(function(name) { return typeof name !== "string" || !name.trim() || name.length > 160; }) ||
      data.comentario.length > 1500 || data.horarioOtro.length > 120 ||
      ["", "si", "no"].indexOf(data.necesitaAdicionales) === -1 ||
      (data.funcionesIds.length && data.necesitaAdicionales !== "si")) return null;
  var orientation = data.solucion === "general";
  if (data.tipoSolicitud !== (orientation ? "orientacion" : "producto")) return null;
  if (orientation) {
    if (!Object.prototype.hasOwnProperty.call(CONTACT_HOURS, data.horarioPreferido) ||
        (data.horarioPreferido === "otro" && !data.horarioOtro) || data.funcionesIds.length ||
        data.necesitaAdicionales || data.comentario || data.negocio || data.cupon) return null;
  } else if (data.horarioPreferido || data.horarioOtro) return null;
  if (data.horarioPreferido !== "otro" && data.horarioOtro) return null;
  // Resumen compatible acotado; las funciones completas están en columnas propias.
  data.necesidad = orientation
    ? "Solicitud de orientación. Horario: " + CONTACT_HOURS[data.horarioPreferido] + (data.horarioOtro ? ": " + data.horarioOtro : "") + "."
    : "Interés en " + CONTACT_SOLUTIONS[data.solucion] + ". " + data.funcionesIds.length + " funciones adicionales para revisar." + (data.comentario ? " Comentario: " + data.comentario : "");
  return data;
}

function contactHeaders(sheet) {
  var headers = sheet.getLastRow() ? sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0] : [];
  if (headers.length) {
    // Rechazar una hoja desconocida; nunca reemplazar ni reordenar datos existentes.
    if (CONTACT_BASE_HEADERS.some(function(name, index) { return headers[index] !== name; }) ||
        headers.some(function(name, index) { return !name || headers.indexOf(name) !== index; })) throw new Error("schema_error");
  } else headers = CONTACT_BASE_HEADERS.slice();
  var oldLength = sheet.getLastRow() ? headers.length : 0;
  CONTACT_EXTRA_HEADERS.forEach(function(name) { if (headers.indexOf(name) === -1) headers.push(name); });
  var capacity = sheet.getMaxColumns();
  if (capacity < headers.length) sheet.insertColumnsAfter(capacity, headers.length - capacity);
  if (headers.length > oldLength) {
    sheet.getRange(1, oldLength + 1, 1, headers.length - oldLength).setValues([headers.slice(oldLength)]);
  }
  return headers;
}

function contactMail(data, requestId, fecha) {
  var lines = [
    "Referencia: " + requestId, "Fecha: " + fecha,
    "Tipo: " + (data.tipoSolicitud === "orientacion" ? "Solicitud de llamada / orientación" : "Interés en producto"),
    "Solución: " + CONTACT_SOLUTIONS[data.solucion],
    "Nombre: " + data.nombre, "Teléfono / WhatsApp: " + data.telefono
  ];
  if (data.negocio) lines.push("Negocio: " + data.negocio);
  if (data.correo) lines.push("Correo: " + data.correo);
  if (data.horarioPreferido) lines.push("Horario preferido: " + CONTACT_HOURS[data.horarioPreferido] + (data.horarioOtro ? ": " + data.horarioOtro : ""), "La llamada aún no está confirmada.");
  if (data.necesitaAdicionales) lines.push("Adicionales: " + data.necesitaAdicionales);
  if (data.funcionesIds && data.funcionesIds.length) lines.push("Funciones de interés (por evaluar):\n" + data.funcionesSeleccionadas.map(function(name) { return "- " + name; }).join("\n"));
  if (data.comentario) lines.push("Comentario: " + data.comentario);
  if (data.cupon) lines.push("Cupón para revisión, no aplicado: " + data.cupon);
  return lines.join("\n");
}

function contactClientMail(data, requestId) {
  var lines = [
    "Hola, " + data.nombre + ":", "",
    "Gracias por ponerte en contacto con Enrique Vargas — Soluciones Digitales.", "",
    "Hemos recibido correctamente tu solicitud relacionada con:",
    data.tipoSolicitud === "orientacion" ? "Solicitud de orientación" : CONTACT_SOLUTIONS[data.solucion], "",
    "Revisaré la información que compartiste y me pondré en contacto contigo para continuar con la atención de tu solicitud.", ""
  ];
  if (data.horarioPreferido) {
    lines.push("Horario de contacto preferido: " + CONTACT_HOURS[data.horarioPreferido] + (data.horarioOtro ? ": " + data.horarioOtro : ""),
      "Este horario es una preferencia; la llamada aún no está confirmada.", "");
  }
  lines.push("Referencia de tu solicitud:", requestId, "",
    "Conserva esta referencia por si necesitas comunicarte conmigo sobre tu solicitud.", "",
    "Saludos,", "Enrique Vargas", "Soluciones Digitales");
  return lines.join("\n");
}

function doPost(e) {
  var params = (e && e.parameter) || {};
  var protocol = CONTACT_PROTOCOL;
  var requestId = String(params.requestId || "");
  if ((params.protocol !== CONTACT_PROTOCOL) || !/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(requestId)) {
    return contactJson({ saved: false, code: "invalid_request" }, protocol);
  }
  var data = contactReadData(params);
  if (!data) return contactJson({ saved: false, code: "invalid_data", requestId: requestId }, protocol);
  var lock = LockService.getScriptLock();
  var locked = false;
  var saved = false;
  try {
    locked = lock.tryLock(5000);
    if (!locked) return contactJson({ saved: false, code: "busy", requestId: requestId }, protocol);
    var book = SpreadsheetApp.openById(CONTACT_SHEET_ID);
    var sheet = book.getSheetByName(CONTACT_SHEET_NAME) || book.insertSheet(CONTACT_SHEET_NAME);
    var headers = contactHeaders(sheet);
    var fingerprint = Utilities.base64EncodeWebSafe(Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, JSON.stringify(data)));
    var count = sheet.getLastRow();
    if (count > 1) {
      var rows = sheet.getRange(2, 1, count - 1, headers.length).getValues();
      for (var i = 0; i < rows.length; i++) {
        if (rows[i][headers.indexOf("Referencia")] === requestId) {
          if (rows[i][headers.indexOf("Huella")] !== fingerprint) return contactJson({ saved: false, code: "id_conflict", requestId: requestId }, protocol);
          return contactJson({ saved: true, requestId: requestId, notification: rows[i][headers.indexOf("Notificacion")], notificationEnrique: rows[i][headers.indexOf("NotificacionEnrique")] || "", confirmationCliente: rows[i][headers.indexOf("ConfirmacionCliente")] || "", duplicate: true }, protocol);
        }
      }
    }
    var values = {
      Referencia: requestId, Fecha: new Date().toISOString(), Nombre: data.nombre, Telefono: data.telefono,
      Correo: data.correo, Negocio: data.negocio, Solucion: data.solucion, Necesidad: data.necesidad,
      "Cupon para revision": data.cupon, Notificacion: "pending", Huella: fingerprint,
      TipoSolicitud: data.tipoSolicitud,
      NecesitaAdicionales: data.necesitaAdicionales || "", FuncionesIds: JSON.stringify(data.funcionesIds),
      Funciones: JSON.stringify(data.funcionesSeleccionadas), Comentario: data.comentario || "",
      HorarioPreferido: data.horarioPreferido || "", HorarioOtro: data.horarioOtro || "",
      NotificacionEnrique: "", ConfirmacionCliente: data.correo ? "" : "not_applicable"
    };
    sheet.appendRow(headers.map(function(name) { return contactCell(values[name]); }));
    SpreadsheetApp.flush();
    saved = true;
    var row = sheet.getLastRow();
    var notificationEnrique = "sent";
    var confirmationCliente = data.correo ? "sent" : "not_applicable";
    try {
      MailApp.sendEmail("enriquegv078@gmail.com",
        (data.tipoSolicitud === "orientacion" ? "Nueva solicitud de orientación" : "Nueva consulta: " + CONTACT_SOLUTIONS[data.solucion]) + " — " + data.nombre,
        contactMail(data, requestId, values.Fecha));
    } catch (error) {
      notificationEnrique = "failed";
      console.error("Fallo de notificación a Enrique", error);
    }
    if (data.correo) {
      try {
        MailApp.sendEmail(data.correo,
          "Hemos recibido tu solicitud — Enrique Vargas | Soluciones Digitales",
          contactClientMail(data, requestId));
      } catch (error) {
        confirmationCliente = "failed";
        console.error("Fallo de confirmación al cliente", error);
      }
    }
    // Actualizar cada estado por separado; un fallo de escritura no anula el guardado.
    var notificationStatusSaved = true;
    var statuses = { Notificacion: notificationEnrique, NotificacionEnrique: notificationEnrique, ConfirmacionCliente: confirmationCliente };
    Object.keys(statuses).forEach(function(name) {
      try { sheet.getRange(row, headers.indexOf(name) + 1).setValue(statuses[name]); }
      catch (error) { notificationStatusSaved = false; console.error("Fallo al registrar " + name, error); }
    });
    try { SpreadsheetApp.flush(); }
    catch (error) { notificationStatusSaved = false; console.error("Fallo al persistir estados de correo", error); }
    return contactJson({ saved: true, requestId: requestId, notification: notificationEnrique,
      notificationEnrique: notificationEnrique, confirmationCliente: confirmationCliente,
      notificationStatusSaved: notificationStatusSaved }, protocol);
  } catch (error) {
    return contactJson({ saved: saved, requestId: requestId, notification: "unknown", code: saved ? "saved" : error.message === "schema_error" ? "schema_error" : "storage_error" }, protocol);
  } finally {
    if (locked) lock.releaseLock();
  }
}
