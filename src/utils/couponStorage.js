import COUPONS from "./coupons";

const STORAGE_KEY = "coupon_counters";
const USED_KEY = "used_coupons";

// Obtiene los contadores actuales (inicializa desde coupons.js si no existen)
function getCounters() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) return JSON.parse(stored);
  const initial = {};
  COUPONS.forEach((c) => {
    initial[c.clave] = c.disponibles;
  });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
  return initial;
}

// Obtiene los cupones ya usados por este navegador
function getUsedCoupons() {
  const stored = localStorage.getItem(USED_KEY);
  return stored ? JSON.parse(stored) : [];
}

// Busca un cupón por código (case-insensitive)
export function findCoupon(code) {
  return COUPONS.find((c) => c.cupon.toUpperCase() === code.toUpperCase()) || null;
}

// Retorna los disponibles actuales de un cupón
export function getDisponibles(clave) {
  const counters = getCounters();
  return counters[clave] ?? 0;
}

// Valida si el cupón puede usarse: existe, tiene disponibles y no fue usado en este navegador
export function validateCoupon(code) {
  const coupon = findCoupon(code);
  if (!coupon) return { valid: false, message: "Cupón no válido." };

  const disponibles = getDisponibles(coupon.clave);
  if (disponibles <= 0) return { valid: false, message: "Este cupón ya no tiene disponibles." };

  const used = getUsedCoupons();
  if (used.includes(coupon.clave)) return { valid: false, message: "Ya usaste este cupón." };

  return { valid: true, coupon, disponibles };
}

// Descuenta 1 disponible y marca como usado en este navegador
export function redeemCoupon(clave) {
  const counters = getCounters();
  if (counters[clave] > 0) {
    counters[clave] -= 1;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(counters));
  }
  const used = getUsedCoupons();
  if (!used.includes(clave)) {
    used.push(clave);
    localStorage.setItem(USED_KEY, JSON.stringify(used));
  }
}
