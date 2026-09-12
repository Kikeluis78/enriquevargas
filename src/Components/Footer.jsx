import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { SOCIAL_LINKS } from "../utils/constants";


export default function Footer() {
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false)

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
      className={`bg-gradient-to-b from-[#0d1117] to-[#111827] border-t border-gray-800 py-12 px-6 w-full text-white transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="container mx-auto max-w-9xl">
        {/* 🧩 GRID PRINCIPAL */}
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          {/* 🧩 Columna 1 - Logo e información */}
          <div className="space-y-4">
            <div className="flex items-center justify-center sm:justify-start w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00D9FF] to-[#0066FF] shadow-lg shadow-[#00D9FF]/30">
              <span className="text-white font-extrabold text-2xl tracking-tight">EV</span>
            </div>
            <p className="text-gray-300 text-sm max-w-xs leading-relaxed">
              Desarrollo soluciones digitales para pequeños negocios. Atención directa, sin intermediarios.
            </p>
          </div>
          
          {/* 🌐 Columna 2 - Redes Sociales */}
          <div>
            <h4 className="font-semibold mb-6 text-[#00D9FF]">
              Redes Sociales
            </h4>
            <div className="space-y-2">
              {[
                ["TikTok", SOCIAL_LINKS.tiktok],
                ["YouTube", SOCIAL_LINKS.youtube],
                ["Facebook", SOCIAL_LINKS.facebook],
                ["Instagram", SOCIAL_LINKS.instagram],
                ["Threads", SOCIAL_LINKS.threads],
                ["X", SOCIAL_LINKS.x],
                ["Telegram", SOCIAL_LINKS.telegram],
              ].map(([name, link]) => (
                <a
                  key={name}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-400 hover:text-[#00D9FF] transition-colors"
                >
                  {name}
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
