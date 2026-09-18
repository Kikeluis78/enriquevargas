import { useEffect } from 'react';

/**
 * Inyecta Schema.org JSON-LD en el head.
 * Se ejecuta una sola vez al montar el componente.
 */
export function useSchemaOrg(schema) {
  useEffect(() => {
    if (!schema) return;

    // Buscar script existente con el mismo tipo
    const existingScript = document.querySelector(
      `script[type="application/ld+json"][data-schema="${schema['@type']}"]`
    );

    if (existingScript) {
      // Actualizar contenido si existe
      existingScript.textContent = JSON.stringify(schema);
    } else {
      // Crear nuevo script
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-schema', schema['@type']);
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    }
  }, [schema]);
}
