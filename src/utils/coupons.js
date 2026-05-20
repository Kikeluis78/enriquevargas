// Array de cupones de descuento
// cupon: código que escribe el usuario
// clave: identificador interno
// precio: precio con descuento aplicado
// descuento: descripción del descuento
// total: cupones totales emitidos
// disponibles: cupones disponibles inicialmente

const COUPONS = [
  {
    cupon: "LEGV1499",
    clave: "LEGV1499",
    precio: 1499,
    descuento: "Precio especial $1,499",
    total: 32,
    disponibles: 12,
  },
  {
    cupon: "LEGVGRATIS",
    clave: "LEGVGRATIS",
    precio: 0,
    descuento: "Primer mes GRATIS",
    total: 21,
    disponibles: 11,
  },
  // Espacio para nuevos cupones:
  // { cupon: "", clave: "", precio: 0, descuento: "", total: 0, disponibles: 0 },
  // { cupon: "", clave: "", precio: 0, descuento: "", total: 0, disponibles: 0 },
];

export default COUPONS;
