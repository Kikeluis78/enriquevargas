function doPost(e) {
  var sheet = SpreadsheetApp.openById("1Xan4FwV1zJpsbBap0CU-kmGnTSWivCyT2YbuTF2g_iU").getActiveSheet();
  var nombre = e.parameter.nombre || "";
  var negocio = e.parameter.negocio || "";
  var giro = e.parameter.giro || "";
  var telefono = e.parameter.telefono || "";
  var correo = e.parameter.correo || "";
  var cupon = e.parameter.cupon || "";
  var fecha = new Date().toLocaleString("es-MX");
  sheet.appendRow([nombre, negocio, giro, telefono, correo, cupon, fecha]);
  MailApp.sendEmail("enriquegv078@gmail.com", "Nuevo cliente: " + nombre, "Negocio: " + negocio + "\nGiro: " + giro + "\nTel: " + telefono + "\nCorreo: " + correo + "\nCupon: " + cupon + "\nFecha: " + fecha);
  if (correo) {
    MailApp.sendEmail(correo, "Recibimos tu informacion - Enrique Vargas", "Hola " + nombre + ",\n\nRecibimos tus datos correctamente. En breve te contactamos.\n\nNegocio: " + negocio + "\nTelefono: " + telefono + "\n\nGracias por confiar en nosotros.\nEnrique Vargas\nenriquevargas.com.mx");
  }
  return ContentService.createTextOutput("ok");
}

function testEmail() {
  MailApp.sendEmail("enriquegv078@gmail.com", "Test", "Funciona el correo");
}

