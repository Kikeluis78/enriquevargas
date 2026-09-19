import { CONTACT_SOLUTIONS } from "../utils/contact";
import { SOLUTION_DETAILS } from "../utils/constants";

// Recorridos del paquete inicial, basados en los planes de Precios y SOLUTION_DETAILS.
// No incorporar aquí PROJECT_FEATURES: son ampliaciones sujetas a evaluación.
// Soporte: se conserva el canal WhatsApp; la disponibilidad 24/7 contradice el convenio.
  // Productos principales (soluciones personalizables)
export const BASIC_PLANS = [
    {
      solution: "telegram",
      name: CONTACT_SOLUTIONS.telegram,
      price: "Desde $999",
      description: "Convierte Telegram en un canal de pedidos para tu negocio. Tus clientes pueden entrar al bot, explorar tu catálogo, elegir productos y preparar su pedido desde una sola conversación.",
      journey: [
  {
    "icon": "access",
    "title": "Entra al bot",
    "description": "El cliente encuentra tu negocio desde Telegram.",
    "items": [
      "Mensaje de bienvenida con la identidad del negocio",
      "Acceso mediante enlace directo y código QR",
      "Información básica y formas de contacto"
    ]
  },
  {
    "icon": "catalog",
    "title": "Explora el catálogo",
    "description": "Los productos se presentan agrupados para facilitar la elección.",
    "items": [
      "Hasta 30 productos en la configuración inicial",
      "Categorías, nombre, descripción y precio",
      "Presentación personalizada con datos del negocio"
    ]
  },
  {
    "icon": "cart",
    "title": "Prepara el pedido",
    "description": "La selección se reúne en un carrito dentro de Telegram.",
    "items": [
      "Selección y consulta de productos agregados",
      "Carrito de los productos elegidos",
      "Ajustes al pedido antes de continuar"
    ]
  },
  {
    "icon": "check",
    "title": "Revisa y confirma",
    "description": "El cliente consulta el resumen antes de finalizar el pedido.",
    "items": [
      "Productos seleccionados y cantidades",
      "Importe del pedido",
      "Confirmación antes de finalizar"
    ]
  },
  {
    "icon": "settings",
    "title": "Listo para tu negocio",
    "description": "Se configura el bot con los materiales que proporcionas.",
    "items": [
      "Logo y datos del negocio",
      "Catálogo cargado y configuración inicial incluida",
      "Acceso pensado principalmente para celular"
    ]
  }
],
      plus:[],
      clarification: "El precio base incluye la configuración inicial de hasta 30 productos. Más productos, integraciones o funciones especiales se cotizan por separado.",
      bestFor: ["Taquerías", "Torterías", "Cocinas pequeñas", "Micro negocios", "Negocios de comida"],
      hasDemo: true,
      demoUrl: "https://t.me/dummytelegram_bot",
    },
    {
      solution: "tarjeta",
      name: CONTACT_SOLUTIONS.tarjeta,
      price: "$699",
      description: "Tu información profesional o de negocio en un solo lugar, lista para compartir con tus clientes.",
      journey: [
  {
    "icon": "store",
    "title": "Descubre tu negocio",
    "description": "Tu información se presenta con la identidad de tu negocio.",
    "items": [
      "Dos páginas: Inicio y Productos o Servicios",
      "Diseño personalizado y adaptable a celular y computadora",
      "Configuración inicial y SEO básico"
    ]
  },
  {
    "icon": "catalog",
    "title": "Consulta tus servicios",
    "description": "La persona conoce tu oferta y encuentra dónde estás.",
    "items": [
      "Información de productos o servicios",
      "Ubicación o mapa del negocio",
      "Enlaces a redes sociales"
    ]
  },
  {
    "icon": "contact",
    "title": "Da el siguiente paso",
    "description": "El visitante elige cómo comunicarse contigo o conservar tus datos.",
    "items": [
      "Botón de WhatsApp y formulario de contacto",
      "Teléfono y correo de contacto",
      "Código QR para compartir y opción para guardar el contacto"
    ]
  }
],
      plus: ["QR para compartir", "Guardar contacto"],
      clarification: "Incluye configuración inicial con la información proporcionada por el cliente.",
      bestFor: ["Plomeros", "Electricistas", "Carpinteros", "Albañiles", "Mecánicos"],
      hasDemo: true,
      demoUrl: "https://web-oficios.vercel.app/",
    },
    {
      solution: "agenda",
      name: CONTACT_SOLUTIONS.agenda,
      price: "Desde $1,499",
      description: "Una agenda digital para que tus clientes consulten tus servicios y soliciten o reserven una cita de forma sencilla.",
      journey: [
  {
    "icon": "store",
    "title": "Conoce tus servicios",
    "description": "El cliente encuentra tu presentación antes de elegir una cita.",
    "items": [
      "Tres páginas: Inicio, Servicios y Agenda",
      "Información de servicios y horarios de atención",
      "Diseño personalizado para celular y computadora"
    ]
  },
  {
    "icon": "calendar",
    "title": "Elige día y horario",
    "description": "La agenda permite explorar cuándo solicitar la atención.",
    "items": [
      "Selección de día y horario",
      "Acceso a la agenda mediante código QR"
    ]
  },
  {
    "icon": "contact",
    "title": "Solicita la cita",
    "description": "El formulario permite solicitar la cita; el horario se coordina según el servicio.",
    "items": [
      "Formulario de solicitud de cita",
      "Información de contacto y botón de WhatsApp",
      "Configuración inicial incluida"
    ]
  }
],
      plus: ["QR directo para reservar", "Configuración inicial incluida"],
      clarification: "Funciones avanzadas, automatizaciones o integraciones adicionales se cotizan por separado.",
      bestFor: ["Dentistas", "Podólogos", "Barberías", "Spa", "Tatuadores"],
      hasDemo: true,
      demoUrl: "https://podologos-ten.vercel.app/",
    },
    {
      solution: "menu_whatsapp",
      name: CONTACT_SOLUTIONS.menu_whatsapp,
      price: "Desde $3,999",
      featured: true,
      description: "Menú digital personalizado para que tus clientes consulten tus productos, armen su pedido y envíen el detalle directamente a tu WhatsApp.",
      journey: [
  {
    "icon": "store",
    "title": "Entra a tu menú",
    "description": "Tu cliente accede a una presentación personalizada del negocio.",
    "items": [
      "Página de inicio con logo, colores y datos",
      "Código QR para mesas, mostrador o material impreso",
      "Diseño adaptable a celular y computadora"
    ]
  },
  {
    "icon": "catalog",
    "title": "Explora los productos",
    "description": "El menú organiza lo que ofreces para preparar un pedido.",
    "items": [
      "Productos agrupados por categorías",
      "Hasta 50 productos en la configuración inicial"
    ]
  },
  {
    "icon": "cart",
    "title": "Prepara el pedido",
    "description": "El cliente reúne los productos que quiere pedir.",
    "items": [
      "Selección de productos",
      "Carrito para preparar el pedido"
    ]
  },
  {
    "icon": "whatsapp",
    "title": "Continúa por WhatsApp",
    "description": "El detalle del pedido pasa a WhatsApp para continuar la atención contigo.",
    "items": [
      "Pedido detallado enviado a tu WhatsApp",
      "Botón directo de contacto",
      "Sin comisión nuestra por pedido"
    ]
  }
],
      plus: ["QR listo para tu negocio", "Sin comisión nuestra por pedido"],
      clarification: "El precio base incluye la configuración inicial de hasta 50 productos. Catálogos mayores, integraciones o funciones especiales se cotizan por separado.",
      bestFor: ["Pizzerías", "Restaurantes", "Taquerías", "Negocios de comida"],
      hasDemo: true,
      demoUrl: "https://oliver-pizzas.vercel.app/",
    },
  ];

  // Proyectos especiales (desarrollo de mayor alcance)
export const PREMIUM_PLANS = [
    {
      solution: "ecommerce",
      name: CONTACT_SOLUTIONS.ecommerce,
      price: "Desde $9,499",
      description: "Tienda en línea personalizada para presentar tus productos y comenzar a vender por internet.",
      journey: [
  {
    "icon": "store",
    "title": "Entra a tu tienda",
    "description": "Una página de inicio presenta tu negocio y su catálogo.",
    "items": [
      "Diseño personalizado adaptable a celular y computadora",
      "Información y medios de contacto",
      "Configuración inicial de la tienda"
    ]
  },
  {
    "icon": "catalog",
    "title": "Consulta los productos",
    "description": "El cliente explora categorías y el detalle de cada producto.",
    "items": [
      "Catálogo organizado por categorías",
      "Vista detallada de productos",
      "Hasta 30 productos iniciales"
    ]
  },
  {
    "icon": "cart",
    "title": "Prepara la compra",
    "description": "El carrito reúne lo elegido para continuar el proceso de compra definido.",
    "items": [
      "Carrito de compras",
      "Proceso para preparar la compra",
      "Botón de WhatsApp y formulario de contacto"
    ]
  },
  {
    "icon": "globe",
    "title": "Publica tu tienda",
    "description": "La oferta incluye el periodo inicial de dominio y alojamiento.",
    "items": [
      "Dominio por un año",
      "Hosting por un año"
    ]
  }
],
      plus: ["Dominio + hosting por 1 año incluidos"],
      clarification: "El precio base contempla hasta 30 productos en la configuración inicial. Catálogos mayores, pasarelas de pago, envíos, inventario, automatizaciones o integraciones especiales pueden modificar el precio final.",
      bestFor: ["Tiendas físicas", "Emprendedores", "Marcas locales"],
      hasDemo: false,
    },
    {
      solution: "web_corporativa",
      name: CONTACT_SOLUTIONS.web_corporativa,
      price: "Desde $9,999",
      featured: true,
      description: "Sitio web profesional para presentar tu empresa, servicios e información de contacto con una imagen sólida en internet.",
      journey: [
  {
    "icon": "store",
    "title": "Presenta tu empresa",
    "description": "Tu marca tiene una entrada profesional con diseño personalizado.",
    "items": [
      "Página de inicio y presentación de la empresa",
      "Hasta cinco secciones o páginas principales",
      "Diseño adaptable a celular y computadora"
    ]
  },
  {
    "icon": "catalog",
    "title": "Explica lo que ofreces",
    "description": "El visitante conoce tus productos o servicios de forma organizada.",
    "items": [
      "Presentación de productos o servicios",
      "Estructura preparada para tu marca",
      "Enlaces a redes sociales"
    ]
  },
  {
    "icon": "contact",
    "title": "Recibe consultas",
    "description": "La persona encuentra los medios para hablar con tu empresa.",
    "items": [
      "Información y medios de contacto",
      "Formulario de contacto",
      "Botón directo a WhatsApp"
    ]
  },
  {
    "icon": "globe",
    "title": "Ponla en línea",
    "description": "Se realiza la configuración inicial del sitio.",
    "items": [
      "Configuración inicial incluida",
      "Dominio y hosting por un año"
    ]
  }
],
      plus: ["Dominio + hosting por 1 año incluidos"],
      clarification: "Secciones, funcionalidades e integraciones adicionales se cotizan según las necesidades del proyecto.",
      bestFor: ["Empresas", "Agencias", "Consultorías", "Startups"],
      hasDemo: false,
    },
    {
      solution: "web_android",
      name: CONTACT_SOLUTIONS.web_android,
      price: "Desde $13,999",
      description: "Solución web con experiencia adaptada para Android, pensada para proyectos que necesitan presencia web y acceso desde dispositivos móviles.",
      journey: [
  {
    "icon": "settings",
    "title": "Define la experiencia",
    "description": "Se prepara el proyecto conforme al alcance definido.",
    "items": [
      "Desarrollo web personalizado",
      "Configuración inicial del proyecto",
      "Preparación según las funciones acordadas"
    ]
  },
  {
    "icon": "store",
    "title": "Presenta tu negocio en la web",
    "description": "La web muestra tu oferta y tus formas de contacto.",
    "items": [
      "Inicio y presentación de productos o servicios",
      "Información de contacto, WhatsApp y formulario",
      "Diseño adaptable a diferentes pantallas"
    ]
  },
  {
    "icon": "mobile",
    "title": "Complementa con Android",
    "description": "La experiencia Android se adapta cuando es técnicamente viable.",
    "items": [
      "Experiencia complementaria para dispositivos Android",
      "Integración entre la experiencia web y móvil según alcance"
    ]
  },
  {
    "icon": "globe",
    "title": "Publica el proyecto",
    "description": "El paquete contempla un periodo inicial de presencia en línea.",
    "items": [
      "Dominio por un año",
      "Hosting por un año"
    ]
  }
],
      plus: ["Web + experiencia Android", "Dominio y hosting por 1 año"],
      clarification: "El alcance de la aplicación depende de las funcionalidades requeridas. Integraciones o desarrollo móvil especializado se cotizan por separado.",
      bestFor: ["Negocios en crecimiento", "Profesionales", "Tiendas digitales"],
      hasDemo: false,
    },
  ];


export const ANDROID_PLAN = {
  solution: "android",
  name: CONTACT_SOLUTIONS.android,
  price: SOLUTION_DETAILS.android.price,
  description: "Desarrollo de aplicaciones adaptadas a las necesidades de tu proyecto.",
  plus: [],
  bestFor: [],
  clarification: "Según funcionalidades e integraciones",
  hasDemo: false,
  journey: [
  {
    "icon": "settings",
    "title": "Define lo que necesitas",
    "description": "La aplicación se cotiza según las necesidades y complejidad del proyecto.",
    "items": [
      "Pantallas y funciones definidas según el alcance",
      "Integraciones acordadas antes de desarrollar"
    ]
  },
  {
    "icon": "mobile",
    "title": "Construye la experiencia",
    "description": "La interfaz se adapta al uso previsto para la aplicación.",
    "items": [
      "Aplicación Android según las necesidades del proyecto",
      "Interfaz adaptada a su uso",
      "Integración de las funciones acordadas"
    ]
  },
  {
    "icon": "check",
    "title": "Configura y comprueba",
    "description": "Se prepara la aplicación y se prueba el funcionamiento acordado.",
    "items": [
      "Configuración inicial de la aplicación",
      "Pruebas de las funciones incluidas en el alcance"
    ]
  }
],
};
