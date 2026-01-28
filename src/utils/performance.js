// Utilidades de rendimiento y optimización

/**
 * Debounce para evitar múltiples llamadas en corto tiempo
 * @param {Function} func - Función a ejecutar
 * @param {number} delay - Tiempo de espera en ms
 * @returns {Function} Función debounceada
 */
export const debounce = (func, delay = 300) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

/**
 * Throttle para limitar la frecuencia de ejecución
 * @param {Function} func - Función a ejecutar
 * @param {number} limit - Tiempo mínimo entre ejecuciones en ms
 * @returns {Function} Función throttleada
 */
export const throttle = (func, limit = 300) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * Lazy load de imágenes con Intersection Observer
 * @param {HTMLImageElement} img - Elemento img
 */
export const lazyLoadImage = (img) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const image = entry.target;
        image.src = image.dataset.src;
        image.classList.remove("lazy");
        observer.unobserve(image);
      }
    });
  });

  observer.observe(img);
};

/**
 * Preload de imágenes críticas
 * @param {string[]} urls - Array de URLs de imágenes
 */
export const preloadImages = (urls) => {
  urls.forEach((url) => {
    const img = new Image();
    img.src = url;
  });
};
