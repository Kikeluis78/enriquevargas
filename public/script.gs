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
  return ContentService.createTextOutput(JSON.stringify({result:"ok"})).setMimeType(ContentService.MimeType.JSON);
}

function doGet(e) {
  return ContentService.createTextOutput("OK");
}
