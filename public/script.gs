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

  sheet.appendRow([nombre, negocio, giro, telefono, correo, cupon, fecha]);

  var asunto = "Nuevo cliente: " + nombre + " - " + negocio;
  var cuerpo = "Nuevo registro en el formulario de contacto:\n\n"
    + "Nombre: " + nombre + "\n"
    + "Negocio: " + negocio + "\n"
    + "Giro: " + giro + "\n"
    + "Telefono: " + telefono + "\n"
    + "Correo: " + correo + "\n"
    + "Cupon: " + cupon + "\n"
    + "Fecha: " + fecha;

  MailApp.sendEmail("enriquegv078@gmail.com", asunto, cuerpo);

  if (correo) {
    var asuntoCliente = "Recibimos tu informacion - Enrique Vargas";
    var cuerpoCliente = "Hola " + nombre + ",\n\n"
      + "Recibimos correctamente tu informacion. En breve nos pondremos en contacto contigo.\n\n"
      + "Datos registrados:\n"
      + "Negocio: " + negocio + "\n"
      + "Telefono: " + telefono + "\n"
      + (cupon && cupon !== "Sin cupon" ? "Cupon aplicado: " + cupon + "\n" : "")
      + "\nGracias por confiar en nosotros.\n\n"
      + "Enrique Vargas\nenriquevargas.com.mx";

    MailApp.sendEmail(correo, asuntoCliente, cuerpoCliente);
  }

  return ContentService.createTextOutput(JSON.stringify({result:"ok"})).setMimeType(ContentService.MimeType.JSON);
}

function testEmail() {
  MailApp.sendEmail("enriquegv078@gmail.com", "Test correo", "Funciona el correo desde Apps Script");
}

function doGet(e) {
  return ContentService.createTextOutput("OK");
}
