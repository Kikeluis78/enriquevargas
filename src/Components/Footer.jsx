import { createElement, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { SiTiktok, SiYoutube, SiFacebook, SiInstagram, SiThreads, SiX, SiTelegram } from "react-icons/si";

import { SOCIAL_LINKS } from "../utils/constants";


export default function Footer() {
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Detectar preferencia de movimiento reducido
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    const current = footerRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (current) observer.observe(current);
    return () => current && observer.unobserve(current);
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`bg-gradient-to-b from-[#0d1117] to-[#111827] border-t border-gray-800 py-12 px-6 w-full text-white ${
        prefersReducedMotion ? "" : "transition-all duration-1000 ease-out"
      } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <div className="container mx-auto max-w-9xl">
        {/* 🧩 GRID PRINCIPAL */}
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          {/* 🧩 Columna 1 - Información */}
          <div className="space-y-4">
            <p className="text-gray-300 text-sm max-w-xs mx-auto text-center sm:mx-0 sm:text-left leading-relaxed">
              Soluciones digitales para pequeños negocios. Atención directa con Enrique.
            </p>
          </div>
          
          {/* 🌐 Columna 2 - Redes Sociales */}
          <div>
            <h4 className="font-semibold mb-6 text-[#00D9FF]">
              Redes Sociales
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                ["TikTok", SOCIAL_LINKS.tiktok, SiTiktok],
                ["YouTube", SOCIAL_LINKS.youtube, SiYoutube],
                ["Facebook", SOCIAL_LINKS.facebook, SiFacebook],
                ["Instagram", SOCIAL_LINKS.instagram, SiInstagram],
                ["Threads", SOCIAL_LINKS.threads, SiThreads],
                ["X", SOCIAL_LINKS.x, SiX],
                ["Telegram", SOCIAL_LINKS.telegram, SiTelegram],
              ].map(([name, link, Icon]) => (
                <a
                  key={name}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  title={`${name} (nueva pestaña)`}
                  className="inline-flex items-center justify-center w-11 h-11 rounded-lg text-gray-300 hover:text-[#00D9FF] hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00D9FF] transition-colors"
                >
                  {createElement(Icon, { size: 24, "aria-hidden": true, focusable: "false" })}
                </a>
              ))}
            </div>
          </div>

          {/* Columna 3 - Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-[#FFE45E]">Legal</h4>
            <div className="space-y-2">
              {[
                ["Política de Privacidad", "/politica"],
                ["Términos de Servicio", "/terminosServicio"],
                ["Cookies", "/cookies"],
              ].map(([name, link]) => (
                <Link
                  key={name}
                  to={link}
                  className="block text-gray-400 hover:text-[#00D9FF] transition-colors"
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* 🔹 Línea inferior */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm sm:text-base">
          <p>&copy; 2026 <span className="text-[#00D9FF] font-semibold">Enrique</span> <span className="text-[#FF6B35] font-semibold">Vargas</span>. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
