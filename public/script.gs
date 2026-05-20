function doPost(e) {
  var id = "1Xan4FwV1zJpsbBap0CU-kmGnTSWivCyT2YbuTF2g_iU";
  var sheet = SpreadsheetApp.openById(id).getActiveSheet();

  var nombre   = e.parameter.nombre   || "";
  var negocio  = e.parameter.negocio  || "";
  var giro     = e.parameter.giro     || "";
  var telefono = e.parameter.telefono || "";
  var correo   = e.parameter.correo   || "";
  var cupon    = e.parameter.cupon    || "";
  var fecha    = new Date().toLocaleString("es-MX");

  // Guardar en Sheet
  sheet.appendRow([nombre, negocio, giro, telefono, correo, cupon, fecha]);

  // Correo a Enrique
  var asunto = "Nuevo cliente: " + nombre + " - " + negocio;
  var cuerpo = "Nuevo registro en el formulario de contacto:\n\n"
    + "Nombre: " + nombre + "\n"
    + "Negocio: " + negocio + "\n"
    + "Giro: " + giro + "\n"
    + "Teléfono: " + telefono + "\n"
    + "Correo: " + correo + "\n"
    + "Cupón: " + cupon + "\n"
    + "Fecha: " + fecha;

  MailApp.sendEmail("enriquegv078@gmail.com", asunto, cuerpo);

  // Correo de confirmación al cliente
  if (correo) {
    var asuntoCliente = "Recibimos tu información - Enrique Vargas";
    var cuerpoCliente = "Hola " + nombre + ",\n\n"
      + "Recibimos correctamente tu información. En breve nos pondremos en contacto contigo.\n\n"
      + "Estos son tus datos registrados:\n"
      + "Negocio: " + negocio + "\n"
      + "Teléfono: " + telefono + "\n"
      + (cupon && cupon !== "Sin cupón" ? "Cupón aplicado: " + cupon + "\n" : "")
      + "\nGracias por confiar en nosotros.\n\n"
      + "Enrique Vargas\nenriquevargas.com.mx";

    MailApp.sendEmail(correo, asuntoCliente, cuerpoCliente);
  }

  return ContentService.createTextOutput(JSON.stringify({result:"ok"})).setMimeType(ContentService.MimeType.JSON);
}

function doGet(e) {
  return ContentService.createTextOutput("OK");
}
