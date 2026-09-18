// Fuente comercial: tarjetas y PLUS de Precios.jsx. Mantener IDs semánticos estables.
// Si un extra pasa al plan base, añadir su id a SERVICE_BASE_FEATURES[servicio].
export const SERVICE_BASE_FEATURES = {
  "general": [],
  "tarjeta": [
    "personalized_design",
    "whatsapp_contact",
    "phone_email",
    "social_links",
    "business_map",
    "qr_access",
    "save_contact",
    "responsive_design",
    "initial_setup",
    "whatsapp_support"
  ],
  "telegram": [
    "telegram_access",
    "catalog",
    "categories",
    "cart",
    "initial_30_products",
    "personalized_design",
    "initial_setup",
    "bot_link",
    "qr_access",
    "responsive_design",
    "whatsapp_support"
  ],
  "agenda": [
    "personalized_design",
    "service_information",
    "business_hours",
    "appointment_booking",
    "contact_information",
    "qr_access",
    "initial_setup",
    "responsive_design",
    "whatsapp_support"
  ],
  "menu_whatsapp": [
    "catalog",
    "categories",
    "cart",
    "whatsapp_order",
    "initial_50_products",
    "personalized_design",
    "qr_access",
    "initial_setup",
    "responsive_design",
    "no_order_commission",
    "whatsapp_support"
  ],
  "ecommerce": [
    "personalized_design",
    "catalog",
    "categories",
    "cart",
    "checkout",
    "initial_30_products",
    "responsive_design",
    "initial_setup",
    "contact_information",
    "domain_year",
    "hosting_year",
    "whatsapp_support"
  ],
  "web_corporativa": [
    "personalized_design",
    "initial_5_pages",
    "company_services",
    "contact_information",
    "social_links",
    "contact_form",
    "responsive_design",
    "initial_setup",
    "domain_year",
    "hosting_year",
    "whatsapp_support"
  ],
  "web_android": [
    "custom_web",
    "responsive_design",
    "android_experience",
    "initial_setup",
    "web_mobile_integration",
    "domain_year",
    "hosting_year",
    "whatsapp_support",
    "agreed_scope"
  ],
  "android": []
};

// Capacidades de interés: ninguna selección confirma inclusión o compatibilidad.
export const PROJECT_FEATURES = [
  {
    "id": "swipe_navigation",
    "nombre": "Deslizar entre pantallas",
    "nombreTecnico": "Swipe Navigation",
    "descripcion": "Cambia de pantalla con deslizamientos y gestos acordados.",
    "categoria": "Experiencia y navegación avanzada",
    "aplicaA": [
      "web_android",
      "android"
    ],
    "complejidad": "alta"
  },
  {
    "id": "bottom_navigation",
    "nombre": "Navegación inferior tipo app",
    "nombreTecnico": "Bottom Navigation",
    "descripcion": "Organiza accesos persistentes a las pantallas principales.",
    "categoria": "Experiencia y navegación avanzada",
    "aplicaA": [
      "web_android",
      "android"
    ],
    "complejidad": "alta"
  },
  {
    "id": "context_navigation",
    "nombre": "Menú lateral contextual",
    "nombreTecnico": "Contextual Navigation Drawer",
    "descripcion": "Adapta opciones del menú a la sección y situación del usuario.",
    "categoria": "Experiencia y navegación avanzada",
    "aplicaA": [
      "web_android",
      "android"
    ],
    "complejidad": "alta"
  },
  {
    "id": "advanced_search",
    "nombre": "Búsqueda y filtros avanzados",
    "nombreTecnico": "Faceted Search",
    "descripcion": "Combina atributos, rangos y ordenamiento para encontrar resultados específicos.",
    "categoria": "Experiencia y navegación avanzada",
    "aplicaA": [
      "ecommerce",
      "web_corporativa",
      "web_android",
      "android"
    ],
    "complejidad": "alta"
  },
  {
    "id": "dark_mode",
    "nombre": "Modo oscuro configurable",
    "nombreTecnico": "Theme Switching",
    "descripcion": "Permite alternar temas y conservar la preferencia del usuario.",
    "categoria": "Experiencia y navegación avanzada",
    "aplicaA": [
      "ecommerce",
      "web_corporativa",
      "web_android",
      "android"
    ],
    "complejidad": "media"
  },
  {
    "id": "advanced_accessibility",
    "nombre": "Accesibilidad avanzada",
    "nombreTecnico": "Accessibility Customization",
    "descripcion": "Evalúa adaptaciones especializadas y auditorías de accesibilidad según el proyecto. La navegación básica por teclado, las etiquetas y la legibilidad forman parte de la experiencia base.",
    "categoria": "Experiencia y navegación avanzada",
    "aplicaA": [
      "ecommerce",
      "web_corporativa",
      "web_android",
      "android"
    ],
    "complejidad": "alta"
  },
  {
    "id": "user_accounts",
    "nombre": "Cuentas y perfiles de usuarios",
    "nombreTecnico": "User Account Lifecycle",
    "descripcion": "Incluye registro, acceso, recuperación y edición de perfiles como un flujo completo.",
    "categoria": "Usuarios, cuentas y seguridad",
    "aplicaA": [
      "ecommerce",
      "web_corporativa",
      "web_android",
      "android"
    ],
    "complejidad": "alta"
  },
  {
    "id": "client_portal",
    "nombre": "Portal privado de clientes",
    "nombreTecnico": "Client Portal",
    "descripcion": "Permite consultar documentos, solicitudes y estados personales en un área privada.",
    "categoria": "Usuarios, cuentas y seguridad",
    "aplicaA": [
      "agenda",
      "ecommerce",
      "web_corporativa",
      "web_android",
      "android"
    ],
    "complejidad": "alta"
  },
  {
    "id": "business_accounts",
    "nombre": "Cuentas empresariales con empleados",
    "nombreTecnico": "Organization Accounts",
    "descripcion": "Agrupa empleados dentro de una cuenta empresarial con responsables propios.",
    "categoria": "Usuarios, cuentas y seguridad",
    "aplicaA": [
      "ecommerce",
      "web_corporativa",
      "web_android",
      "android"
    ],
    "complejidad": "alta"
  },
  {
    "id": "social_login",
    "nombre": "Acceso con cuentas de terceros",
    "nombreTecnico": "Federated Sign-In",
    "descripcion": "Evalúa inicio con Google o Apple según plataforma y requisitos del proveedor.",
    "categoria": "Usuarios, cuentas y seguridad",
    "aplicaA": [
      "ecommerce",
      "web_corporativa",
      "web_android",
      "android"
    ],
    "complejidad": "alta",
    "requiereServicioExterno": true,
    "notaComercial": "Puede requerir servicios externos, cuentas de terceros o costos adicionales. La compatibilidad se revisa antes de cotizar."
  },
  {
    "id": "complex_variants",
    "nombre": "Variantes y personalización de productos",
    "nombreTecnico": "Product Configurator",
    "descripcion": "Configura combinaciones de talla, atributos y opciones personalizables.",
    "categoria": "Ventas y comercio avanzado",
    "aplicaA": [
      "telegram",
      "menu_whatsapp",
      "ecommerce",
      "web_android",
      "android"
    ],
    "complejidad": "alta"
  },
  {
    "id": "digital_products",
    "nombre": "Venta de productos digitales",
    "nombreTecnico": "Digital Fulfillment",
    "descripcion": "Gestiona acceso o descarga de productos digitales después de validar la compra.",
    "categoria": "Ventas y comercio avanzado",
    "aplicaA": [
      "ecommerce",
      "web_android",
      "android"
    ],
    "complejidad": "alta"
  },
  {
    "id": "wishlist",
    "nombre": "Lista de favoritos",
    "nombreTecnico": "Wishlist",
    "descripcion": "Guarda productos de interés para consultarlos posteriormente.",
    "categoria": "Ventas y comercio avanzado",
    "aplicaA": [
      "telegram",
      "menu_whatsapp",
      "ecommerce",
      "web_android",
      "android"
    ],
    "complejidad": "media"
  },
  {
    "id": "reviews",
    "nombre": "Reseñas y calificaciones de productos",
    "nombreTecnico": "Product Reviews",
    "descripcion": "Recibe valoraciones vinculadas a compras y permite moderarlas.",
    "categoria": "Ventas y comercio avanzado",
    "aplicaA": [
      "ecommerce",
      "web_android",
      "android"
    ],
    "complejidad": "alta"
  },
  {
    "id": "bundles_upsell",
    "nombre": "Paquetes y ofertas complementarias",
    "nombreTecnico": "Bundles and Cross-Selling",
    "descripcion": "Relaciona productos en paquetes y sugiere complementos según reglas comerciales.",
    "categoria": "Ventas y comercio avanzado",
    "aplicaA": [
      "telegram",
      "menu_whatsapp",
      "ecommerce",
      "web_android",
      "android"
    ],
    "complejidad": "alta"
  },
  {
    "id": "b2b_pricing",
    "nombre": "Precios por cliente y cotizaciones B2B",
    "nombreTecnico": "B2B Pricing and Quotes",
    "descripcion": "Evalúa listas mayoristas, precios por cliente y aprobación de cotizaciones.",
    "categoria": "Ventas y comercio avanzado",
    "aplicaA": [
      "telegram",
      "menu_whatsapp",
      "ecommerce",
      "web_android",
      "android"
    ],
    "complejidad": "alta"
  },
  {
    "id": "cart_recovery",
    "nombre": "Recuperación de pedidos abandonados",
    "nombreTecnico": "Abandoned Checkout Recovery",
    "descripcion": "Da seguimiento autorizado a pedidos incompletos sin añadir otro carrito.",
    "categoria": "Ventas y comercio avanzado",
    "aplicaA": [
      "telegram",
      "menu_whatsapp",
      "ecommerce",
      "web_android",
      "android"
    ],
    "complejidad": "alta",
    "requiereServicioExterno": true,
    "notaComercial": "Puede requerir servicios externos, cuentas de terceros o costos adicionales. La compatibilidad se revisa antes de cotizar."
  },
  {
    "id": "preorders",
    "nombre": "Preventas y productos bajo pedido",
    "nombreTecnico": "Preorder Management",
    "descripcion": "Gestiona fechas, disponibilidad y compromisos para productos no disponibles de inmediato.",
    "categoria": "Ventas y comercio avanzado",
    "aplicaA": [
      "telegram",
      "menu_whatsapp",
      "ecommerce",
      "web_android",
      "android"
    ],
    "complejidad": "alta"
  },
  {
    "id": "loyalty_promotions",
    "nombre": "Puntos y promociones por reglas",
    "nombreTecnico": "Loyalty Engine",
    "descripcion": "Administra puntos, cupones y promociones según condiciones acordadas.",
    "categoria": "Ventas y comercio avanzado",
    "aplicaA": [
      "telegram",
      "menu_whatsapp",
      "ecommerce",
      "web_android",
      "android"
    ],
    "complejidad": "alta"
  },
  {
    "id": "payment_gateway",
    "nombre": "Integración con pasarela de pago",
    "nombreTecnico": "Payment Gateway Integration",
    "descripcion": "Evalúa Stripe, Mercado Pago o PayPal; la compatibilidad se revisa para el proyecto.",
    "categoria": "Pagos y facturación",
    "aplicaA": [
      "telegram",
      "menu_whatsapp",
      "agenda",
      "ecommerce",
      "web_android",
      "android"
    ],
    "complejidad": "alta",
    "requiereServicioExterno": true,
    "notaComercial": "Puede requerir servicios externos, cuentas de terceros o costos adicionales. La compatibilidad se revisa antes de cotizar."
  },
  {
    "id": "payment_reconciliation",
    "nombre": "Conciliación de transferencias y SPEI",
    "nombreTecnico": "Payment Reconciliation",
    "descripcion": "Relaciona pagos recibidos con pedidos mediante un proveedor y flujo de validación.",
    "categoria": "Pagos y facturación",
    "aplicaA": [
      "telegram",
      "menu_whatsapp",
      "agenda",
      "ecommerce",
      "web_android",
      "android"
    ],
    "complejidad": "alta",
    "requiereServicioExterno": true,
    "notaComercial": "Puede requerir servicios externos, cuentas de terceros o costos adicionales. La compatibilidad se revisa antes de cotizar."
  },
  {
    "id": "deposits",
    "nombre": "Anticipos y pagos por etapas",
    "nombreTecnico": "Deposit and Milestone Payments",
    "descripcion": "Define anticipos, saldos y etapas de cobro para servicios o pedidos.",
    "categoria": "Pagos y facturación",
    "aplicaA": [
      "telegram",
      "menu_whatsapp",
      "agenda",
      "ecommerce",
      "web_android",
      "android"
    ],
    "complejidad": "alta"
  },
  {
    "id": "refunds",
    "nombre": "Gestión controlada de reembolsos",
    "nombreTecnico": "Refund Workflow",
    "descripcion": "Administra solicitudes, aprobaciones y seguimiento de devoluciones de pago.",
    "categoria": "Pagos y facturación",
    "aplicaA": [
      "telegram",
      "menu_whatsapp",
      "agenda",
      "ecommerce",
      "web_android",
      "android"
    ],
    "complejidad": "alta"
  },
  {
    "id": "fiscal_integration",
    "nombre": "Integración de facturación e impuestos",
    "nombreTecnico": "Tax and Invoice Integration",
    "descripcion": "Evalúa conexión con un proveedor fiscal y reglas de impuestos definidas por el negocio.",
    "categoria": "Pagos y facturación",
    "aplicaA": [
      "ecommerce",
      "web_android",
      "android"
    ],
    "complejidad": "alta",
    "requiereServicioExterno": true,
    "notaComercial": "Puede requerir servicios externos, cuentas de terceros o costos adicionales. La compatibilidad se revisa antes de cotizar."
  },
  {
    "id": "recurring_memberships",
    "nombre": "Membresías con cobro recurrente",
    "nombreTecnico": "Recurring Billing",
    "descripcion": "Gestiona planes, renovaciones y estados de cobro mediante un proveedor compatible.",
    "categoria": "Suscripciones y membresías",
    "aplicaA": [
      "ecommerce",
      "web_android",
      "android"
    ],
    "complejidad": "alta",
    "requiereServicioExterno": true,
    "notaComercial": "Puede requerir servicios externos, cuentas de terceros o costos adicionales. La compatibilidad se revisa antes de cotizar."
  },
  {
    "id": "live_inventory",
    "nombre": "Inventario sincronizado y alertas",
    "nombreTecnico": "Inventory Synchronization",
    "descripcion": "Actualiza existencias, reserva stock para pedidos y avisa sobre niveles bajos.",
    "categoria": "Inventario y operaciones",
    "aplicaA": [
      "telegram",
      "menu_whatsapp",
      "ecommerce",
      "web_android",
      "android"
    ],
    "complejidad": "alta"
  },
  {
    "id": "inventory_movements",
    "nombre": "Entradas, salidas y ajustes de stock",
    "nombreTecnico": "Stock Movement Ledger",
    "descripcion": "Registra movimientos, ajustes y mermas con su motivo y responsable.",
    "categoria": "Inventario y operaciones",
    "aplicaA": [
      "telegram",
      "menu_whatsapp",
      "ecommerce",
      "web_android",
      "android"
    ],
    "complejidad": "alta"
  },
  {
    "id": "warehouse_inventory",
    "nombre": "Inventario por almacén",
    "nombreTecnico": "Multi-Warehouse Inventory",
    "descripcion": "Separa existencias y transferencias entre almacenes.",
    "categoria": "Inventario y operaciones",
    "aplicaA": [
      "ecommerce",
      "web_android",
      "android"
    ],
    "complejidad": "alta"
  },
  {
    "id": "purchase_orders",
    "nombre": "Proveedores y órdenes de compra",
    "nombreTecnico": "Procurement Management",
    "descripcion": "Da seguimiento a compras, proveedores y recepción de mercancía.",
    "categoria": "Inventario y operaciones",
    "aplicaA": [
      "ecommerce",
      "web_android",
      "android"
    ],
    "complejidad": "alta"
  },
  {
    "id": "batch_serial_tracking",
    "nombre": "Lotes, caducidad y números de serie",
    "nombreTecnico": "Batch and Serial Tracking",
    "descripcion": "Rastrea unidades, lotes y fechas de caducidad según el tipo de producto.",
    "categoria": "Inventario y operaciones",
    "aplicaA": [
      "ecommerce",
      "web_android",
      "android"
    ],
    "complejidad": "alta"
  },
  {
    "id": "real_time_tracking",
    "nombre": "Seguimiento en tiempo real",
    "nombreTecnico": "Real-Time Location Tracking",
    "descripcion": "Visualiza en un mapa la ubicación actual de vehículos, repartidores o técnicos con autorización.",
    "categoria": "Logística, reparto y ubicación",
    "aplicaA": [
      "web_android",
      "android"
    ],
    "complejidad": "alta",
    "requiereServicioExterno": true,
    "notaComercial": "Puede requerir servicios externos, cuentas de terceros o costos adicionales. La compatibilidad se revisa antes de cotizar."
  },
  {
    "id": "service_dispatch",
    "nombre": "Asignación y reasignación de servicios",
    "nombreTecnico": "Service Dispatch",
    "descripcion": "Asigna solicitudes manualmente o mediante reglas y permite reasignar responsables.",
    "categoria": "Logística, reparto y ubicación",
    "aplicaA": [
      "web_android",
      "android"
    ],
    "complejidad": "alta"
  },
  {
    "id": "driver_availability",
    "nombre": "Disponibilidad y aceptación de solicitudes",
    "nombreTecnico": "Driver Availability",
    "descripcion": "Gestiona turnos, disponibilidad y aceptación o rechazo por el prestador.",
    "categoria": "Logística, reparto y ubicación",
    "aplicaA": [
      "web_android",
      "android"
    ],
    "complejidad": "alta"
  },
  {
    "id": "live_service_status",
    "nombre": "Tablero de servicios en tiempo real",
    "nombreTecnico": "Live Operations Board",
    "descripcion": "Muestra servicios activos y cambios de estado para coordinar la operación.",
    "categoria": "Logística, reparto y ubicación",
    "aplicaA": [
      "web_android",
      "android"
    ],
    "complejidad": "alta"
  },
  {
    "id": "coverage_geofencing",
    "nombre": "Zonas de cobertura y geofencing",
    "nombreTecnico": "Service Area Geofencing",
    "descripcion": "Evalúa zonas autorizadas y eventos al entrar o salir de áreas definidas.",
    "categoria": "Logística, reparto y ubicación",
    "aplicaA": [
      "web_android",
      "android"
    ],
    "complejidad": "alta",
    "requiereServicioExterno": true,
    "notaComercial": "Puede requerir servicios externos, cuentas de terceros o costos adicionales. La compatibilidad se revisa antes de cotizar."
  },
  {
    "id": "distance_pricing",
    "nombre": "Tarifas por zona y distancia",
    "nombreTecnico": "Distance-Based Pricing",
    "descripcion": "Calcula importes mediante reglas de zona y distancia definidas por el negocio.",
    "categoria": "Logística, reparto y ubicación",
    "aplicaA": [
      "web_android",
      "android"
    ],
    "complejidad": "alta",
    "requiereServicioExterno": true,
    "notaComercial": "Puede requerir servicios externos, cuentas de terceros o costos adicionales. La compatibilidad se revisa antes de cotizar."
  },
  {
    "id": "route_optimization",
    "nombre": "Rutas con múltiples paradas",
    "nombreTecnico": "Multi-Stop Route Optimization",
    "descripcion": "Evalúa recorridos y optimización de paradas según restricciones operativas.",
    "categoria": "Logística, reparto y ubicación",
    "aplicaA": [
      "web_android",
      "android"
    ],
    "complejidad": "avanzada",
    "requiereServicioExterno": true,
    "notaComercial": "Puede requerir servicios externos, cuentas de terceros o costos adicionales. La compatibilidad se revisa antes de cotizar."
  },
  {
    "id": "trip_history",
    "nombre": "Historial de recorridos",
    "nombreTecnico": "Trip History",
    "descripcion": "Consulta recorridos y eventos conservados durante el periodo acordado.",
    "categoria": "Logística, reparto y ubicación",
    "aplicaA": [
      "web_android",
      "android"
    ],
    "complejidad": "alta"
  },
  {
    "id": "delivery_proof",
    "nombre": "Prueba de entrega",
    "nombreTecnico": "Proof of Delivery",
    "descripcion": "Registra firma, fotografía o PIN de entrega según el proceso elegido.",
    "categoria": "Logística, reparto y ubicación",
    "aplicaA": [
      "web_android",
      "android"
    ],
    "complejidad": "alta"
  },
  {
    "id": "service_ratings",
    "nombre": "Calificaciones de servicios y participantes",
    "nombreTecnico": "Service Ratings",
    "descripcion": "Recibe valoraciones de clientes y prestadores con reglas de revisión.",
    "categoria": "Logística, reparto y ubicación",
    "aplicaA": [
      "web_android",
      "android"
    ],
    "complejidad": "alta"
  },
  {
    "id": "delivery_eta",
    "nombre": "Estimación de llegada y alertas de retraso",
    "nombreTecnico": "Estimated Time of Arrival",
    "descripcion": "Evalúa distancia y tiempo de llegada para avisar sobre cambios o retrasos.",
    "categoria": "Logística, reparto y ubicación",
    "aplicaA": [
      "menu_whatsapp",
      "ecommerce",
      "web_android",
      "android"
    ],
    "complejidad": "alta",
    "requiereServicioExterno": true,
    "notaComercial": "Puede requerir servicios externos, cuentas de terceros o costos adicionales. La compatibilidad se revisa antes de cotizar."
  },
  {
    "id": "shipping_provider",
    "nombre": "Integración con proveedor de envíos",
    "nombreTecnico": "Shipping Provider Integration",
    "descripcion": "Consulta tarifas y seguimiento mediante un proveedor compatible.",
    "categoria": "Logística, reparto y ubicación",
    "aplicaA": [
      "menu_whatsapp",
      "ecommerce",
      "web_android",
      "android"
    ],
    "complejidad": "alta",
    "requiereServicioExterno": true,
    "notaComercial": "Puede requerir servicios externos, cuentas de terceros o costos adicionales. La compatibilidad se revisa antes de cotizar."
  },
  {
    "id": "staff_calendars",
    "nombre": "Agenda por profesional y recurso",
    "nombreTecnico": "Staff and Resource Scheduling",
    "descripcion": "Coordina disponibilidad de profesionales, salas y recursos; incluye duraciones y márgenes entre citas.",
    "categoria": "Reservas y agenda avanzada",
    "aplicaA": [
      "agenda",
      "web_corporativa",
      "web_android",
      "android"
    ],
    "complejidad": "alta"
  },
  {
    "id": "waitlist_rescheduling",
    "nombre": "Lista de espera y reprogramación",
    "nombreTecnico": "Waitlist and Rescheduling",
    "descripcion": "Gestiona vacantes, cambios de horario y cancelaciones mediante reglas acordadas.",
    "categoria": "Reservas y agenda avanzada",
    "aplicaA": [
      "agenda",
      "web_corporativa",
      "web_android",
      "android"
    ],
    "complejidad": "alta"
  },
  {
    "id": "recurring_sessions",
    "nombre": "Citas recurrentes y paquetes de sesiones",
    "nombreTecnico": "Recurring Appointment Packages",
    "descripcion": "Administra series de citas y consumo de sesiones o bonos.",
    "categoria": "Reservas y agenda avanzada",
    "aplicaA": [
      "agenda",
      "web_corporativa",
      "web_android",
      "android"
    ],
    "complejidad": "alta"
  },
  {
    "id": "appointment_reminders",
    "nombre": "Confirmaciones y recordatorios automáticos",
    "nombreTecnico": "Appointment Notifications",
    "descripcion": "Envía confirmaciones y avisos por canales autorizados según eventos de la cita.",
    "categoria": "Reservas y agenda avanzada",
    "aplicaA": [
      "agenda",
      "web_corporativa",
      "web_android",
      "android"
    ],
    "complejidad": "alta",
    "requiereServicioExterno": true,
    "notaComercial": "Puede requerir servicios externos, cuentas de terceros o costos adicionales. La compatibilidad se revisa antes de cotizar."
  },
  {
    "id": "calendar_sync",
    "nombre": "Sincronización con calendarios externos",
    "nombreTecnico": "External Calendar Synchronization",
    "descripcion": "Evalúa integración con Google Calendar u Outlook para coordinar disponibilidad.",
    "categoria": "Reservas y agenda avanzada",
    "aplicaA": [
      "agenda",
      "web_corporativa",
      "web_android",
      "android"
    ],
    "complejidad": "alta",
    "requiereServicioExterno": true,
    "notaComercial": "Puede requerir servicios externos, cuentas de terceros o costos adicionales. La compatibilidad se revisa antes de cotizar."
  },
  {
    "id": "session_records",
    "nombre": "Historial y notas de sesiones",
    "nombreTecnico": "Session Records",
    "descripcion": "Organiza antecedentes y notas privadas por cliente con acceso autorizado.",
    "categoria": "Reservas y agenda avanzada",
    "aplicaA": [
      "agenda",
      "web_corporativa",
      "web_android",
      "android"
    ],
    "complejidad": "alta"
  },
  {
    "id": "whatsapp_business_api",
    "nombre": "Mensajería con WhatsApp Business API",
    "nombreTecnico": "WhatsApp Business API Integration",
    "descripcion": "Evalúa mensajes y plantillas autorizadas mediante la API empresarial; no es un botón de contacto.",
    "categoria": "Comunicación y soporte",
    "aplicaA": [
      "agenda",
      "ecommerce",
      "web_corporativa",
      "web_android",
      "android",
      "telegram",
      "menu_whatsapp"
    ],
    "complejidad": "alta",
    "requiereServicioExterno": true,
    "notaComercial": "Puede requerir servicios externos, cuentas de terceros o costos adicionales. La compatibilidad se revisa antes de cotizar."
  },
  {
    "id": "transactional_messages",
    "nombre": "Correos y SMS por eventos",
    "nombreTecnico": "Transactional Messaging",
    "descripcion": "Envía avisos transaccionales según estados y condiciones del proyecto.",
    "categoria": "Comunicación y soporte",
    "aplicaA": [
      "agenda",
      "ecommerce",
      "web_corporativa",
      "web_android",
      "android",
      "telegram",
      "menu_whatsapp"
    ],
    "complejidad": "alta",
    "requiereServicioExterno": true,
    "notaComercial": "Puede requerir servicios externos, cuentas de terceros o costos adicionales. La compatibilidad se revisa antes de cotizar."
  },
  {
    "id": "unified_inbox",
    "nombre": "Bandeja de soporte unificada",
    "nombreTecnico": "Unified Support Inbox",
    "descripcion": "Organiza conversaciones y responsables desde canales compatibles.",
    "categoria": "Comunicación y soporte",
    "aplicaA": [
      "ecommerce",
      "web_corporativa",
      "web_android",
      "android"
    ],
    "complejidad": "alta",
    "requiereServicioExterno": true,
    "notaComercial": "Puede requerir servicios externos, cuentas de terceros o costos adicionales. La compatibilidad se revisa antes de cotizar."
  },
  {
    "id": "client_chat",
    "nombre": "Chat cliente-negocio",
    "nombreTecnico": "In-App Client Messaging",
    "descripcion": "Permite conversar dentro del proyecto y consultar el historial de atención.",
    "categoria": "Comunicación y soporte",
    "aplicaA": [
      "ecommerce",
      "web_corporativa",
      "web_android",
      "android"
    ],
    "complejidad": "alta"
  },
  {
    "id": "crm_client_record",
    "nombre": "Ficha e historial completo del cliente",
    "nombreTecnico": "Customer 360 Record",
    "descripcion": "Centraliza interacciones, compras o citas, notas y archivos por cliente.",
    "categoria": "CRM y gestión de clientes",
    "aplicaA": [
      "agenda",
      "ecommerce",
      "web_corporativa",
      "web_android",
      "android",
      "telegram",
      "menu_whatsapp"
    ],
    "complejidad": "alta"
  },
  {
    "id": "crm_segmentation",
    "nombre": "Etiquetas y segmentos de clientes",
    "nombreTecnico": "Customer Segmentation",
    "descripcion": "Agrupa clientes mediante etiquetas y criterios comerciales definidos.",
    "categoria": "CRM y gestión de clientes",
    "aplicaA": [
      "agenda",
      "ecommerce",
      "web_corporativa",
      "web_android",
      "android"
    ],
    "complejidad": "alta"
  },
  {
    "id": "crm_pipeline",
    "nombre": "Prospectos y oportunidades de venta",
    "nombreTecnico": "Sales Pipeline",
    "descripcion": "Organiza oportunidades por etapa con responsable y próxima actividad.",
    "categoria": "CRM y gestión de clientes",
    "aplicaA": [
      "agenda",
      "ecommerce",
      "web_corporativa",
      "web_android",
      "android"
    ],
    "complejidad": "alta"
  },
  {
    "id": "crm_followup_tasks",
    "nombre": "Tareas de seguimiento comercial",
    "nombreTecnico": "Sales Follow-Up Tasks",
    "descripcion": "Asigna tareas y fechas de seguimiento a vendedores y responsables.",
    "categoria": "CRM y gestión de clientes",
    "aplicaA": [
      "agenda",
      "ecommerce",
      "web_corporativa",
      "web_android",
      "android"
    ],
    "complejidad": "alta"
  },
  {
    "id": "crm_post_sale",
    "nombre": "Seguimiento postventa",
    "nombreTecnico": "After-Sales Workflow",
    "descripcion": "Gestiona actividades posteriores a la venta y atención de clientes frecuentes.",
    "categoria": "CRM y gestión de clientes",
    "aplicaA": [
      "agenda",
      "ecommerce",
      "web_corporativa",
      "web_android",
      "android"
    ],
    "complejidad": "alta"
  },
  {
    "id": "crm_contact_import",
    "nombre": "Importación de contactos al CRM",
    "nombreTecnico": "CRM Contact Import",
    "descripcion": "Importa contactos con mapeo de campos y revisión de duplicados.",
    "categoria": "CRM y gestión de clientes",
    "aplicaA": [
      "agenda",
      "ecommerce",
      "web_corporativa",
      "web_android",
      "android"
    ],
    "complejidad": "alta"
  },
  {
    "id": "advanced_backoffice",
    "nombre": "Panel de operación avanzado",
    "nombreTecnico": "Advanced Backoffice",
    "descripcion": "Gestiona estados, incidencias y acciones masivas fuera de la configuración inicial del catálogo.",
    "categoria": "Administración y backoffice",
    "aplicaA": [
      "ecommerce",
      "web_corporativa",
      "web_android",
      "android",
      "telegram",
      "menu_whatsapp"
    ],
    "complejidad": "alta"
  },
  {
    "id": "approval_workflow",
    "nombre": "Aprobación y moderación de cambios",
    "nombreTecnico": "Approval Workflow",
    "descripcion": "Requiere revisión por responsables antes de publicar o aplicar cambios.",
    "categoria": "Administración y backoffice",
    "aplicaA": [
      "ecommerce",
      "web_corporativa",
      "web_android",
      "android"
    ],
    "complejidad": "alta"
  },
  {
    "id": "custom_reports",
    "nombre": "Tableros y reportes personalizados",
    "nombreTecnico": "Custom Reporting",
    "descripcion": "Consulta métricas acordadas y exporta reportes filtrados en formatos definidos.",
    "categoria": "Analítica y reportes",
    "aplicaA": [
      "agenda",
      "ecommerce",
      "web_corporativa",
      "web_android",
      "android",
      "telegram",
      "menu_whatsapp",
      "tarjeta"
    ],
    "complejidad": "alta"
  },
  {
    "id": "conversion_funnels",
    "nombre": "Embudo y eventos de conversión",
    "nombreTecnico": "Conversion Analytics",
    "descripcion": "Mide pasos, abandonos y eventos comerciales definidos para evaluar resultados.",
    "categoria": "Analítica y reportes",
    "aplicaA": [
      "ecommerce",
      "web_corporativa",
      "web_android",
      "android",
      "tarjeta"
    ],
    "complejidad": "alta"
  },
  {
    "id": "event_workflows",
    "nombre": "Flujos automáticos por eventos",
    "nombreTecnico": "Event-Driven Workflows",
    "descripcion": "Ejecuta tareas, avisos y cambios de estado mediante condiciones acordadas.",
    "categoria": "Automatizaciones",
    "aplicaA": [
      "tarjeta",
      "telegram",
      "agenda",
      "menu_whatsapp",
      "ecommerce",
      "web_corporativa",
      "web_android",
      "android"
    ],
    "complejidad": "alta"
  },
  {
    "id": "scheduled_processes",
    "nombre": "Procesos y documentos programados",
    "nombreTecnico": "Scheduled Jobs",
    "descripcion": "Ejecuta procesos periódicos y genera documentos según plantillas y datos del sistema.",
    "categoria": "Automatizaciones",
    "aplicaA": [
      "agenda",
      "ecommerce",
      "web_corporativa",
      "web_android",
      "android",
      "telegram",
      "menu_whatsapp"
    ],
    "complejidad": "alta"
  },
  {
    "id": "external_system_sync",
    "nombre": "Conexión con CRM, ERP u otros sistemas",
    "nombreTecnico": "External System Integration",
    "descripcion": "Evalúa intercambio de datos con un sistema externo y su API disponible.",
    "categoria": "Integraciones y APIs",
    "aplicaA": [
      "ecommerce",
      "web_corporativa",
      "web_android",
      "android",
      "telegram",
      "menu_whatsapp",
      "agenda",
      "tarjeta"
    ],
    "complejidad": "alta",
    "requiereServicioExterno": true,
    "notaComercial": "Puede requerir servicios externos, cuentas de terceros o costos adicionales. La compatibilidad se revisa antes de cotizar."
  },
  {
    "id": "custom_api_webhooks",
    "nombre": "API propia y webhooks",
    "nombreTecnico": "Custom API and Webhooks",
    "descripcion": "Expone operaciones autorizadas y eventos para conectar sistemas definidos.",
    "categoria": "Integraciones y APIs",
    "aplicaA": [
      "ecommerce",
      "web_corporativa",
      "web_android",
      "android"
    ],
    "complejidad": "avanzada"
  },
  {
    "id": "document_services",
    "nombre": "Almacenamiento y firma de documentos",
    "nombreTecnico": "Document Service Integration",
    "descripcion": "Evalúa almacenamiento externo y servicios de firma para un flujo documental.",
    "categoria": "Integraciones y APIs",
    "aplicaA": [
      "web_corporativa",
      "web_android",
      "android"
    ],
    "complejidad": "alta",
    "requiereServicioExterno": true,
    "notaComercial": "Puede requerir servicios externos, cuentas de terceros o costos adicionales. La compatibilidad se revisa antes de cotizar."
  },
  {
    "id": "ai_business_assistant",
    "nombre": "Asistente con información del negocio",
    "nombreTecnico": "Business Knowledge Assistant",
    "descripcion": "Responde consultas a partir de información aprobada del negocio.",
    "categoria": "Inteligencia Artificial",
    "aplicaA": [
      "ecommerce",
      "web_corporativa",
      "web_android",
      "android"
    ],
    "complejidad": "avanzada",
    "requiereServicioExterno": true,
    "notaComercial": "Puede requerir consumo de servicios externos o APIs. El alcance y costos se revisan por separado."
  },
  {
    "id": "ai_semantic_search",
    "nombre": "Búsqueda por significado",
    "nombreTecnico": "Semantic Search",
    "descripcion": "Encuentra contenido por intención o significado, además de palabras exactas.",
    "categoria": "Inteligencia Artificial",
    "aplicaA": [
      "ecommerce",
      "web_corporativa",
      "web_android",
      "android"
    ],
    "complejidad": "avanzada",
    "requiereServicioExterno": true,
    "notaComercial": "Puede requerir consumo de servicios externos o APIs. El alcance y costos se revisan por separado."
  },
  {
    "id": "ai_recommendations",
    "nombre": "Recomendación de productos o servicios",
    "nombreTecnico": "Recommendation System",
    "descripcion": "Sugiere opciones relevantes a partir de preferencias y criterios acordados.",
    "categoria": "Inteligencia Artificial",
    "aplicaA": [
      "ecommerce",
      "web_android",
      "android"
    ],
    "complejidad": "avanzada",
    "requiereServicioExterno": true,
    "notaComercial": "Puede requerir consumo de servicios externos o APIs. El alcance y costos se revisan por separado."
  },
  {
    "id": "ai_message_classification",
    "nombre": "Clasificación de mensajes y prospectos",
    "nombreTecnico": "Message and Lead Classification",
    "descripcion": "Detecta intención y clasifica consultas para orientar su atención.",
    "categoria": "Inteligencia Artificial",
    "aplicaA": [
      "ecommerce",
      "web_corporativa",
      "web_android",
      "android"
    ],
    "complejidad": "avanzada",
    "requiereServicioExterno": true,
    "notaComercial": "Puede requerir consumo de servicios externos o APIs. El alcance y costos se revisan por separado."
  },
  {
    "id": "ai_summaries",
    "nombre": "Resúmenes y respuestas sugeridas",
    "nombreTecnico": "Conversation Summarization",
    "descripcion": "Resume conversaciones y propone respuestas para revisión por el equipo.",
    "categoria": "Inteligencia Artificial",
    "aplicaA": [
      "ecommerce",
      "web_corporativa",
      "web_android",
      "android"
    ],
    "complejidad": "avanzada",
    "requiereServicioExterno": true,
    "notaComercial": "Puede requerir consumo de servicios externos o APIs. El alcance y costos se revisan por separado."
  },
  {
    "id": "ai_document_extraction",
    "nombre": "Extracción de datos de documentos",
    "nombreTecnico": "Document Intelligence and OCR",
    "descripcion": "Extrae información de imágenes y documentos para revisión y uso autorizado.",
    "categoria": "Inteligencia Artificial",
    "aplicaA": [
      "ecommerce",
      "web_corporativa",
      "web_android",
      "android"
    ],
    "complejidad": "avanzada",
    "requiereServicioExterno": true,
    "notaComercial": "Puede requerir consumo de servicios externos o APIs. El alcance y costos se revisan por separado."
  },
  {
    "id": "ai_internal_assistant",
    "nombre": "Asistente interno sobre documentos",
    "nombreTecnico": "Internal Knowledge Assistant",
    "descripcion": "Permite a empleados autorizados consultar información documental del negocio.",
    "categoria": "Inteligencia Artificial",
    "aplicaA": [
      "ecommerce",
      "web_corporativa",
      "web_android",
      "android"
    ],
    "complejidad": "avanzada",
    "requiereServicioExterno": true,
    "notaComercial": "Puede requerir consumo de servicios externos o APIs. El alcance y costos se revisan por separado."
  },
  {
    "id": "ai_content_translation",
    "nombre": "Contenido y traducción asistidos",
    "nombreTecnico": "Assisted Content Generation",
    "descripcion": "Propone textos y traducciones para revisión antes de su publicación.",
    "categoria": "Inteligencia Artificial",
    "aplicaA": [
      "ecommerce",
      "web_corporativa",
      "web_android",
      "android"
    ],
    "complejidad": "avanzada",
    "requiereServicioExterno": true,
    "notaComercial": "Puede requerir consumo de servicios externos o APIs. El alcance y costos se revisan por separado."
  },
  {
    "id": "ai_anomaly_analysis",
    "nombre": "Análisis de métricas y anomalías",
    "nombreTecnico": "Anomaly Detection",
    "descripcion": "Identifica variaciones en métricas definidas y genera observaciones para revisión.",
    "categoria": "Inteligencia Artificial",
    "aplicaA": [
      "ecommerce",
      "web_corporativa",
      "web_android",
      "android"
    ],
    "complejidad": "avanzada",
    "requiereServicioExterno": true,
    "notaComercial": "Puede requerir consumo de servicios externos o APIs. El alcance y costos se revisan por separado."
  },
  {
    "id": "multilingual_content",
    "nombre": "Contenido en varios idiomas",
    "nombreTecnico": "Multilingual Content Management",
    "descripcion": "Gestiona versiones de contenido por idioma con traducciones proporcionadas o revisadas.",
    "categoria": "Multimedia y contenido",
    "aplicaA": [
      "ecommerce",
      "web_corporativa",
      "web_android",
      "android",
      "tarjeta"
    ],
    "complejidad": "alta"
  },
  {
    "id": "restricted_media",
    "nombre": "Biblioteca multimedia con acceso privado",
    "nombreTecnico": "Restricted Media Library",
    "descripcion": "Organiza contenido audiovisual con reglas de acceso y publicación.",
    "categoria": "Multimedia y contenido",
    "aplicaA": [
      "ecommerce",
      "web_corporativa",
      "web_android",
      "android"
    ],
    "complejidad": "alta"
  },
  {
    "id": "push_notifications",
    "nombre": "Notificaciones push por eventos",
    "nombreTecnico": "Push Notifications",
    "descripcion": "Evalúa avisos en dispositivos compatibles con permiso del usuario.",
    "categoria": "Funciones móviles avanzadas",
    "aplicaA": [
      "web_android",
      "android"
    ],
    "complejidad": "alta",
    "requiereServicioExterno": true,
    "notaComercial": "Puede requerir servicios externos, cuentas de terceros o costos adicionales. La compatibilidad se revisa antes de cotizar."
  },
  {
    "id": "camera_scanning",
    "nombre": "Captura y escaneo con la cámara",
    "nombreTecnico": "Camera and Barcode Scanning",
    "descripcion": "Evalúa captura de imágenes y lectura de QR o códigos de barras; no añade el QR comercial base.",
    "categoria": "Funciones móviles avanzadas",
    "aplicaA": [
      "web_android",
      "android"
    ],
    "complejidad": "alta",
    "notaComercial": "La viabilidad depende de la plataforma, los permisos y los dispositivos; se revisa antes de cotizar."
  },
  {
    "id": "offline_sync",
    "nombre": "Trabajo offline con sincronización",
    "nombreTecnico": "Offline-First Synchronization",
    "descripcion": "Define operaciones disponibles sin internet y resuelve la sincronización posterior.",
    "categoria": "Funciones móviles avanzadas",
    "aplicaA": [
      "web_android",
      "android"
    ],
    "complejidad": "avanzada",
    "notaComercial": "La viabilidad depende de la plataforma, los permisos y los dispositivos; se revisa antes de cotizar."
  },
  {
    "id": "deep_links",
    "nombre": "Enlaces directos a pantallas de la app",
    "nombreTecnico": "App Deep Links",
    "descripcion": "Evalúa apertura de pantallas concretas desde enlaces y aplicaciones compatibles.",
    "categoria": "Funciones móviles avanzadas",
    "aplicaA": [
      "web_android",
      "android"
    ],
    "complejidad": "alta",
    "notaComercial": "La viabilidad depende de la plataforma, los permisos y los dispositivos; se revisa antes de cotizar."
  },
  {
    "id": "biometric_access",
    "nombre": "Acceso mediante biometría del dispositivo",
    "nombreTecnico": "Device Biometric Authentication",
    "descripcion": "Evalúa autenticación con capacidades biométricas disponibles en el dispositivo.",
    "categoria": "Funciones móviles avanzadas",
    "aplicaA": [
      "android"
    ],
    "complejidad": "alta",
    "notaComercial": "La viabilidad depende de la plataforma, los permisos y los dispositivos; se revisa antes de cotizar."
  },
  {
    "id": "granular_permissions",
    "nombre": "Roles y permisos granulares",
    "nombreTecnico": "Fine-Grained Authorization",
    "descripcion": "Define acceso a operaciones y datos por responsabilidad y nivel.",
    "categoria": "Seguridad y control de acceso",
    "aplicaA": [
      "ecommerce",
      "web_corporativa",
      "web_android",
      "android"
    ],
    "complejidad": "alta"
  },
  {
    "id": "mfa_device_control",
    "nombre": "Verificación adicional y control de sesiones",
    "nombreTecnico": "MFA and Session Controls",
    "descripcion": "Evalúa multifactor, sesiones y aprobación de dispositivos según el riesgo del proyecto.",
    "categoria": "Seguridad y control de acceso",
    "aplicaA": [
      "ecommerce",
      "web_corporativa",
      "web_android",
      "android"
    ],
    "complejidad": "alta",
    "requiereServicioExterno": true,
    "notaComercial": "Puede requerir servicios externos, cuentas de terceros o costos adicionales. La compatibilidad se revisa antes de cotizar."
  },
  {
    "id": "audit_trail",
    "nombre": "Registro de actividad y auditoría",
    "nombreTecnico": "Audit Trail",
    "descripcion": "Conserva eventos relevantes y responsables para revisar acciones del sistema.",
    "categoria": "Seguridad y control de acceso",
    "aplicaA": [
      "ecommerce",
      "web_corporativa",
      "web_android",
      "android"
    ],
    "complejidad": "alta"
  },
  {
    "id": "branch_operations",
    "nombre": "Operación por sucursal",
    "nombreTecnico": "Multi-Branch Operations",
    "descripcion": "Separa catálogo, precios, horarios, pedidos o agenda por sucursal según el servicio.",
    "categoria": "Multi-sucursal y escalabilidad",
    "aplicaA": [
      "telegram",
      "menu_whatsapp",
      "ecommerce",
      "web_android",
      "android",
      "agenda"
    ],
    "complejidad": "alta"
  },
  {
    "id": "central_branch_panel",
    "nombre": "Panel central y permisos por sucursal",
    "nombreTecnico": "Branch Administration",
    "descripcion": "Centraliza reportes y administración con acceso limitado por sucursal.",
    "categoria": "Multi-sucursal y escalabilidad",
    "aplicaA": [
      "ecommerce",
      "agenda",
      "web_android",
      "android"
    ],
    "complejidad": "alta"
  },
  {
    "id": "team_kanban",
    "nombre": "Tareas internas y tablero Kanban",
    "nombreTecnico": "Team Task Management",
    "descripcion": "Organiza responsables, fechas límite y comentarios en un tablero de trabajo.",
    "categoria": "Productividad empresarial",
    "aplicaA": [
      "web_corporativa",
      "web_android",
      "android"
    ],
    "complejidad": "alta"
  },
  {
    "id": "incident_tickets",
    "nombre": "Tickets e incidencias internas",
    "nombreTecnico": "Incident Ticketing",
    "descripcion": "Gestiona incidencias con prioridad, responsable y seguimiento de resolución.",
    "categoria": "Productividad empresarial",
    "aplicaA": [
      "web_corporativa",
      "web_android",
      "android"
    ],
    "complejidad": "alta"
  }
];

export function getAdditionalFeatures(solution) {
  const baseIds = new Set(SERVICE_BASE_FEATURES[solution] || []);
  return PROJECT_FEATURES.filter((feature) =>
    feature.aplicaA.includes(solution) && !baseIds.has(feature.id)
  );
}
