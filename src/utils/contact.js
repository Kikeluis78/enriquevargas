export const CONTACT_ENDPOINT = "https://script.google.com/macros/s/AKfycbwBqTQxVsqPPrMnVzYK6aEtd1PwGwipyHTsK0M4ocCkFZUsYnXad_GA6wOYF5WKqrIy5Q/exec";
export const CONTACT_PROTOCOL = "consulta-v1";
export const CONTACT_SOLUTIONS = {
  general: "Otra solución / Aún no lo sé",
  pizzeria: "Pizzería con pedidos por WhatsApp",
  agenda: "Agenda digital",
};

export function validateContact(data) {
  if (!data.nombre || data.nombre.length > 120) return "Escribe tu nombre (máximo 120 caracteres).";
  if (!/^\d{10}$/.test(data.telefono)) return "Escribe un teléfono de México de 10 dígitos; también puedes pegarlo con +52.";
  if (data.correo && (data.correo.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.correo))) return "Revisa el correo electrónico o deja ese campo vacío.";
  if (!data.necesidad || data.necesidad.length > 2000) return "Describe qué necesitas (máximo 2000 caracteres).";
  if (!Object.hasOwn(CONTACT_SOLUTIONS, data.solucion)) return "Selecciona una solución de la lista.";
  if (data.negocio.length > 160 || data.cupon.length > 80) return "Revisa la longitud del nombre de negocio o del código promocional.";
  return null;
}

export function normalizePhone(value) {
  const digits = value.replace(/[\s()+-]/g, "");
  return /^52\d{10}$/.test(digits) ? digits.slice(2) : digits;
}

// No reintenta automáticamente: un timeout no demuestra que el servidor no guardó.
export async function submitContact(data, requestId, { fetchImpl = fetch, timeoutMs = 20000 } = {}) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    // Evita enviar datos a una versión antigua que no confirma ni deduplica.
    const health = await fetchImpl(CONTACT_ENDPOINT, { signal: controller.signal, mode: "cors", credentials: "omit", redirect: "follow", cache: "no-store" });
    if (!health.ok || (await health.json()).protocol !== CONTACT_PROTOCOL) throw new Error("unavailable");
    const response = await fetchImpl(CONTACT_ENDPOINT, {
      method: "POST",
      mode: "cors",
      credentials: "omit",
      redirect: "follow",
      signal: controller.signal,
      body: new URLSearchParams({ ...data, requestId, protocol: CONTACT_PROTOCOL }),
    });
    if (!response.ok || response.type === "opaque") throw new Error("unconfirmed");
    const result = await response.json();
    if (result.protocol !== CONTACT_PROTOCOL || result.saved !== true || result.requestId !== requestId) throw new Error("unconfirmed");
    return result;
  } finally {
    clearTimeout(timer);
  }
}
