// Configuración de promociones por temporada
// Para desactivar una promoción, cambia 'active' a null o false

export const PROMOTIONS = [
  {
    id: 1,
    active: true, // Cambia a null o false para desactivar
    title: "🎉 OFERTA ESPECIAL 🎉",
    subtitle: "Web + Android",
    description: "¡Lleva tu negocio al siguiente nivel!",
    price: "$4,000 MXN",
    originalPrice: "$8,000 MXN",
    features: [
      "✅ Página Web Profesional",
      "✅ Aplicación Android Nativa",
      "✅ Diseño Responsivo",
      "✅ Hosting y Dominio por un año",
      "✅ Soporte Técnico 24/7"
    ],
    buttonText: "¡Contratar Ahora!",
    gradient: "from-purple-600 via-pink-600 to-orange-500",
    icon: "🚀"
  },
  {
    id: 2,
    active: null, // Cambia a true para activar esta promoción
    title: "🍕 PIZZERÍAS - OFERTA LIMITADA 🍕",
    subtitle: "¡Página Web GRATIS!",
    description: "Solo para los primeros 50 giros de pizzerías",
    price: "GRATIS",
    originalPrice: "$5,000 MXN",
    features: [
      "✅ Diseño Web Profesional GRATIS",
      "✅ Menú Digital Interactivo",
      "✅ Sistema de Pedidos Online",
      "✅ Integración con WhatsApp",
      "⚠️ Solo pagas Hosting y Mantenimiento"
    ],
    buttonText: "¡Quiero mi Web Gratis!",
    gradient: "from-red-600 via-yellow-500 to-orange-600",
    icon: "🍕",
    note: "* Aplican términos y condiciones. Oferta válida para los primeros 50 registros."
  },
  {
    id: 3,
    active: null, // Cambia a true para activar esta promoción
    title: "💼 PAQUETE EMPRESARIAL 💼",
    subtitle: "Todo lo que necesitas",
    description: "Solución completa para tu empresa",
    price: "$12,000 MXN",
    originalPrice: "$20,000 MXN",
    features: [
      "✅ Página Web Corporativa",
      "✅ App Android + iOS",
      "✅ Sistema de Gestión",
      "✅ Email Corporativo",
      "✅ Soporte Premium 6 meses"
    ],
    buttonText: "Solicitar Información",
    gradient: "from-blue-600 via-cyan-500 to-teal-600",
    icon: "💼"
  }
];

// Función para obtener la promoción activa
export const getActivePromotion = () => {
  return PROMOTIONS.find(promo => promo.active === true);
};
