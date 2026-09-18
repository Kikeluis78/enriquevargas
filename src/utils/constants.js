// Constantes de la aplicación

export const WHATSAPP_NUMBER = "525611001627";
export const WHATSAPP_MESSAGE = "Hola Enrique. Vi tus soluciones digitales y quiero saber cuál puede ayudarme con mi negocio.";

export const SOCIAL_LINKS = {
  tiktok: "https://www.tiktok.com/@enrique_vargas78?_r=1&_t=ZS-91HtncI6YV7",
  youtube: "https://youtube.com/@enriqueg_v078?si=1dnfkiUWwHFXuav4",
  facebook: "https://www.facebook.com/share/1FdHRWYSYf/",
  instagram: "https://www.instagram.com/enrique_vargas78",
  threads: "https://www.threads.net/@enrique_vargas78",
  x: "https://x.com/EnriqueVargas78",
  telegram: "https://t.me/EnriqueVargas78",
};

export const NEON_COLORS = {
  cyan: "#00D9FF",
  orange: "#FF6B35",
  yellow: "#FFE45E",
  purple: "#C084FC",
  pink: "#FF2CD1",
  green: "#22c55e",
};

export const MENU_ITEMS = [
  { name: "Inicio", path: "/", color: "#22E3FF" },
  { name: "Precios", path: "/precios", color: "#FFE45E" },
  { name: "Contacto", path: "/contacto", color: "#FF2CD1" },
];

export const TECHNOLOGIES = [
  "/img/Flutter.png",
  "/img/Vite.png",
  "/img/css.png",
  "/img/Android.png",
  "/img/Firebase.png",
  "/img/python.png",
];


export const HOME_PHRASES = [
  "Sistema de pedidos desde Telegram",
  "Tarjeta Digital",
  "Agenda Digital",
  "Menú Digital con pedidos detallados a tu WhatsApp",
];

// Resúmenes de la oferta aprobada, compartidos por Home, Precios y Contacto.
export const BASIC_SOLUTION_ORDER = ["tarjeta", "agenda", "menu_whatsapp", "telegram"];
export const SOLUTION_DETAILS = {
  tarjeta: {
    price: "$699", problem: "",
   summary: [
  "2 Paginas (Home,Productos o Servicios)",
  "Botón de WhatsApp",
   "Formulario de contacto",
      "Diseño adaptable a celular y computadora",
      "SEO Basico",
    "Soporte 24/7",
],
    image: "/img/tarjeta-digital.webp", demo: "https://web-oficios.vercel.app/",
    demoTask: "Explora la presentación de servicios y las opciones de contacto.",
    limit: "Configuración inicial con la información proporcionada por el cliente.",
  },
  agenda: {
    price: "Desde $1,499", problem: "",
    summary: [
   "3 páginas: Inicio + Servicios + Agenda",
      "Presentación de tus servicios",
      "Selección de día y horario",
      "Formulario para solicitar una cita",
      "Botón directo a WhatsApp",
      "Código QR para compartir tu agenda",
      "Diseño adaptable a celular y computadora",
  "Soporte 24/7",
],
    image: "/img/agenda-digital.webp", demo: "https://podologos-ten.vercel.app/",
    demoTask: "Explora los servicios y el flujo de selección de día y horario.",
    limit: "Automatizaciones e integraciones adicionales se revisan y cotizan por separado.",
  },
  menu_whatsapp: {
    price: "Desde $3,999", problem: "",
    summary: [
 "Página de inicio para tu negocio",
      "Menú o catálogo de productos",
      "Hasta 50 productos en la configuración inicial",
      "Carrito para preparar el pedido",
      "Pedido detallado enviado a tu WhatsApp",
      "Botón directo a WhatsApp",
      "Código QR para compartir tu menú",
      "Diseño adaptable a celular y computadora",
      "Sin comisión nuestra por pedido",

     "Soporte 24/7",
],
    image: "/img/menu-whatsapp-v3.webp", demo: "https://oliver-pizzas.vercel.app/",
    demoTask: "Explora el menú y prueba cómo se arma un pedido en el carrito.",
    limit: "Hasta 50 productos en la configuración inicial.",
  },
  telegram: {
    price: "Desde $999", problem: "",
    summary: [
      "Bot de Telegram para tu negocio",
      "Catálogo de productos o servicios",
      "Hasta 30 productos en la configuración inicial",
      "Consulta de productos desde Telegram",
      "Flujo de pedido dentro del bot",
      "Información básica de tu negocio",
      " QR (Acceso directo para compartir tu bot)",
      "Soporte 24/7",
    ],
    image: "/img/telegram-pedidos.webp", demo: "https://t.me/pizzas_test525_bot",
    demoTask: "Abre el bot en Telegram para explorar el catálogo y el flujo de pedido.",
    limit: "Hasta 30 productos en la configuración inicial. Más productos y funciones especiales se cotizan aparte.",
  },
  ecommerce: {
    price: "Desde $9,499", problem: "",
    summary: [
  "Página de inicio para tu tienda",
      "Catálogo organizado de productos",
      "Vista detallada de productos",
      "Carrito de compras",
      "Proceso para preparar la compra",
      "Información y medios de contacto del negocio",
      "Botón directo a WhatsApp",
      "Formulario de contacto",
      "Diseño adaptable a celular y computadora",
      "Configuración inicial de la tienda",
  "Soporte 24/7",
],
    limit: "Pasarelas de pago, envíos, inventario e integraciones se revisan y pueden modificar el precio final.",
  },
  web_corporativa: {
    price: "Desde $9,999", problem: "",
    summary: [
    "Hasta 5 secciones o páginas principales",
      "Página de inicio profesional",
      "Presentación de tu empresa",
      "Productos o servicios organizados",
      "Información y medios de contacto",
      "Botón directo a WhatsApp",
      "Formulario de contacto",
      "Diseño adaptable a celular y computadora",
      "Estructura preparada para presentar tu marca",
      "Soporte por WhatsApp",
  "Soporte 24/7",
],
    limit: "Hasta cinco secciones o páginas principales. Funciones adicionales se cotizan por separado.",
  },
  web_android: {
    price: "Desde $13,999", problem: "¿Tu proyecto necesita una experiencia web y Android?",
    summary: [
  "Solución web para tu negocio",
      "Experiencia complementaria para Android",
      "Página de inicio",
      "Presentación de productos o servicios",
      "Información y medios de contacto",
      "Botón directo a WhatsApp",
      "Formulario de contacto",
      "Diseño adaptable a diferentes pantallas",
      "Configuración inicial del proyecto",
  "Soporte 24/7",
],
    limit: "La experiencia Android depende de viabilidad y alcance; el desarrollo móvil especializado se cotiza por separado.",
  },
  android: {
    price: "Cotización personalizada", problem: "",
    summary: [
 "Aplicación Android según las necesidades del proyecto",
      "Interfaz adaptada al uso de la aplicación",
      "Pantallas y funciones definidas según el alcance",
      "Integración de las funciones acordadas",
      "Configuración inicial de la aplicación",
      "Pruebas del funcionamiento acordado",
  "Soporte 24/7",
],
    limit: "Funciones, integraciones y desarrollo se definen según el proyecto.",
  },
};
