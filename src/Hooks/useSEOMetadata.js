import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Hook minimalista para actualizar metadata SEO dinámicamente por ruta.
 * Sin dependencias externas. Usa el DOM nativo.
 */
export function useSEOMetadata(metadata = {}) {
  const location = useLocation();

  useEffect(() => {
    // Title
    if (metadata.title) {
      document.title = metadata.title;
    }

    // Meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    if (metadata.description) {
      metaDescription.content = metadata.description;
    }

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    if (metadata.canonical) {
      canonical.href = metadata.canonical;
    }

    // Open Graph
    const ogTags = {
      'og:title': metadata.ogTitle || metadata.title,
      'og:description': metadata.ogDescription || metadata.description,
      'og:url': metadata.canonical,
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      if (!content) return;
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.content = content;
    });

    // Twitter Card
    const twitterTags = {
      'twitter:title': metadata.twitterTitle || metadata.title,
      'twitter:description': metadata.twitterDescription || metadata.description,
    };

    Object.entries(twitterTags).forEach(([name, content]) => {
      if (!content) return;
      let meta = document.querySelector(`meta[property="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', name);
        document.head.appendChild(meta);
      }
      meta.content = content;
    });
  }, [location.pathname, metadata]);
}
