// Utilidades de validación

/**
 * Valida un email
 * @param {string} email - Email a validar
 * @returns {boolean}
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Valida un teléfono
 * @param {string} phone - Teléfono a validar
 * @returns {boolean}
 */
export const isValidPhone = (phone) => {
  const phoneRegex = /^[\d\s\-+()]{10,}$/;
  return phoneRegex.test(phone);
};

/**
 * Valida que un campo no esté vacío
 * @param {string} value - Valor a validar
 * @returns {boolean}
 */
export const isNotEmpty = (value) => {
  return value && value.trim().length > 0;
};

/**
 * Valida longitud mínima
 * @param {string} value - Valor a validar
 * @param {number} minLength - Longitud mínima
 * @returns {boolean}
 */
export const hasMinLength = (value, minLength = 3) => {
  return value && value.length >= minLength;
};

/**
 * Valida longitud máxima
 * @param {string} value - Valor a validar
 * @param {number} maxLength - Longitud máxima
 * @returns {boolean}
 */
export const hasMaxLength = (value, maxLength = 255) => {
  return value && value.length <= maxLength;
};

/**
 * Valida un formulario completo
 * @param {Object} formData - Datos del formulario
 * @param {Object} rules - Reglas de validación
 * @returns {Object} Errores encontrados
 */
export const validateForm = (formData, rules) => {
  const errors = {};

  Object.keys(rules).forEach((field) => {
    const value = formData[field];
    const fieldRules = rules[field];

    if (fieldRules.required && !isNotEmpty(value)) {
      errors[field] = `${field} es requerido`;
    }

    if (fieldRules.email && value && !isValidEmail(value)) {
      errors[field] = "Email inválido";
    }

    if (fieldRules.phone && value && !isValidPhone(value)) {
      errors[field] = "Teléfono inválido";
    }

    if (fieldRules.minLength && value && !hasMinLength(value, fieldRules.minLength)) {
      errors[field] = `Mínimo ${fieldRules.minLength} caracteres`;
    }

    if (fieldRules.maxLength && value && !hasMaxLength(value, fieldRules.maxLength)) {
      errors[field] = `Máximo ${fieldRules.maxLength} caracteres`;
    }
  });

  return errors;
};
