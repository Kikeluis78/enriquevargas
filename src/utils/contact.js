export const CONTACT_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbxKrjhQK54JxoUZfMsudtnH1dp_Y3XXQ5_AuqgMgw_-E2X6TCuymHb2WxLXCnN8KZUG/exec";

export const CONTACT_PROTOCOL = "consulta-v2";

export const CONTACT_SOLUTIONS = {
  general: "Aún no estoy seguro",
  tarjeta: "Tarjeta Digital",
  telegram: "Sistema de pedidos desde Telegram",
  agenda: "Agenda Digital",
  menu_whatsapp: "Menú Digital con Pedidos a WhatsApp",
  ecommerce: "E-Commerce PRO",
  web_corporativa: "Web Corporativa",
  web_android: "Web + App Android",
  android: "Aplicaciones Android",
};

export const CONTACT_HOURS = {
  manana: "Por la mañana", tarde: "Por la tarde",
  sin_preferencia: "Sin preferencia", otro: "Otro horario",
};

// Arrays reales dentro de React; JSON explícito al cruzar el formulario HTTP.
export function buildContactPayload(fields, solution, configuration = {}) {
  const orientation = solution === "general";
  const ids = orientation ? [] : (configuration.features || []).map((feature) => feature.id);
  const names = orientation ? [] : (configuration.features || []).map((feature) => feature.nombre);
  const payload = {
    nombre: String(fields.nombre || "").trim(),
    telefono: normalizePhone(fields.telefono),
    correo: String(fields.correo || "").trim(),
    negocio: orientation ? "" : String(fields.negocio || "").trim(),
    solucion: solution,
    tipoSolicitud: orientation ? "orientacion" : "producto",
    necesitaAdicionales: orientation ? "" : (ids.length ? "si" : configuration.answer || ""),
    funcionesSeleccionadas: names,
    funcionesIds: ids,
    comentario: orientation ? "" : String(configuration.comment || "").trim(),
    horarioPreferido: orientation ? fields.horarioPreferido || "" : "",
    horarioOtro: orientation && fields.horarioPreferido === "otro" ? String(fields.horarioOtro || "").trim() : "",
    cupon: orientation ? "" : String(fields.cupon || "").trim(),
  };
  payload.necesidad = orientation
    ? `Solicitud de orientación. Horario: ${CONTACT_HOURS[payload.horarioPreferido] || "por elegir"}${payload.horarioOtro ? `: ${payload.horarioOtro}` : ""}.`
    : `Interés en ${CONTACT_SOLUTIONS[solution] || "una solución"}. ${ids.length} funciones adicionales para revisar.${payload.comentario ? ` Comentario: ${payload.comentario}` : ""}`;
  return payload;
}

export function validateContact(data) {
  if (!String(data.nombre || "").trim() || data.nombre.length > 120) return "Escribe tu nombre (máximo 120 caracteres).";
  if (!/^\d{10}$/.test(data.telefono)) return "Escribe un teléfono de México de 10 dígitos; también puedes pegarlo con +52.";
  if (!Object.prototype.hasOwnProperty.call(CONTACT_SOLUTIONS, data.solucion)) return "Selecciona una solución de la lista.";
  if (data.tipoSolicitud !== (data.solucion === "general" ? "orientacion" : "producto")) return "Revisa el tipo de solicitud.";
  const limits = { correo: 254, negocio: 160, comentario: 1500, necesidad: 2000, cupon: 80, horarioOtro: 120 };
  for (const [key, limit] of Object.entries(limits)) {
    if (typeof data[key] !== "string" || data[key].length > limit) return `Revisa el campo ${key} (máximo ${limit} caracteres).`;
  }
  if (data.correo && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.correo)) return "Escribe un correo válido o deja ese campo vacío.";
  if (!["", "si", "no"].includes(data.necesitaAdicionales)) return "Revisa la opción de funciones adicionales.";
  if (!Array.isArray(data.funcionesIds) || !Array.isArray(data.funcionesSeleccionadas) ||
      data.funcionesIds.length > 90 || data.funcionesIds.length !== data.funcionesSeleccionadas.length ||
      new Set(data.funcionesIds).size !== data.funcionesIds.length ||
      data.funcionesIds.some((id) => typeof id !== "string" || !/^[a-z][a-z0-9_]{0,79}$/.test(id)) ||
      data.funcionesSeleccionadas.some((name) => typeof name !== "string" || !name.trim() || name.length > 160)) return "Revisa las funciones seleccionadas.";
  if (data.funcionesIds.length && data.necesitaAdicionales !== "si") return "Revisa la opción de funciones adicionales.";
  if (data.tipoSolicitud === "orientacion") {
    if (!Object.prototype.hasOwnProperty.call(CONTACT_HOURS, data.horarioPreferido)) return "Elige tu horario preferido, o selecciona Sin preferencia.";
    if (data.horarioPreferido === "otro" && !data.horarioOtro.trim()) return "Indica una referencia breve para el otro horario.";
    if (data.funcionesIds.length || data.necesitaAdicionales || data.comentario || data.negocio || data.cupon) return "La orientación solo necesita tus datos de contacto y horario.";
  } else if (data.horarioPreferido || data.horarioOtro) return "Revisa el horario de tu solicitud.";
  if (data.horarioPreferido !== "otro" && data.horarioOtro) return "Revisa el detalle del horario.";
  return null;
}

export function contactWhatsAppMessage(solution, names = []) {
  if (!solution || solution === "general" || !Object.prototype.hasOwnProperty.call(CONTACT_SOLUTIONS, solution)) {
    return "Hola Enrique. Vi tus soluciones digitales y necesito orientación para saber cuál puede servirme.";
  }
  return `Hola Enrique. Estuve viendo ${CONTACT_SOLUTIONS[solution]} y me interesa conocer más.${names.length ? ` También quiero revisar: ${names.slice(0, 3).join(", ")}${names.length > 3 ? " y otras funciones" : ""}.` : ""}`;
}

export function normalizePhone(value) {
  const digits = String(value || "").replace(/[\s()+-]/g, "");

  return /^52\d{10}$/.test(digits)
    ? digits.slice(2)
    : digits;
}

// No reintenta automáticamente:
// un timeout no demuestra que el servidor no guardó.
export async function submitContact(
  data,
  requestId,
  {
    fetchImpl = fetch,
    timeoutMs = 20000,
  } = {}
) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    await fetchImpl(CONTACT_ENDPOINT, {
      method: "POST",
      mode: "no-cors",
      credentials: "omit",
      redirect: "follow",
      signal: controller.signal,
      body: new URLSearchParams({
        ...data,
        funcionesIds: JSON.stringify(data.funcionesIds),
        funcionesSeleccionadas: JSON.stringify(data.funcionesSeleccionadas),
        requestId,
        protocol: CONTACT_PROTOCOL,
      }),
    });

    // Una respuesta opaca no confirma guardado ni notificación.
    return { requestId, confirmation: "unavailable" };
  } finally {
    clearTimeout(timer);
  }
}
