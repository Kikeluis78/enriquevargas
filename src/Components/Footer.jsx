import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { SOCIAL_LINKS } from "../utils/constants";

export default function Footer() {
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-2 mb-2">
          {/* 🧩 Columna 1 */}
          <div className="space-y-2">
            <img
              src="/logo1.png"
              alt="Mi logo"
              className="w-30 h-auto mx-auto"
            />

            <p className="text-[#d1d5db] text-lg font-medium">
              {/* Espacio para  mas texto */}
            </p>

            <p className="text-[#94a3b8] text-sm max-w-xs leading-relaxed">
              {/* Espacio para  mas texto */}
            </p>
          </div>
          {/* 🌐 Columna 2 */}
          <div>
            <h4 className="font-semibold mb-6 text-[#f1f5f9]">
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

          {/* Columna 3  */}
          <div>
            <h4 className="font-semibold mb-4 text-[#f1f5f9]">Legal</h4>
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

          {/* 🚀 Columna 4 */}
          <div>
            <h4 className="font-semibold mb-4 text-[#f1f5f9]">
              Otros Servicios
            </h4>
            <div className="space-y-2">
              {[
                ["Criptomonedas", "*"],
                ["Consultoría Digital", "*"],
                ["Branding", "*"],
                ["Marketing Digital", "*"],
                ["SEO", "*"],
              ].map(([name, link]) => (
                <a
                  key={name}
                  href={link}
                  className="block text-gray-400 hover:text-[#00D9FF] transition-colors"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* 🔹 Línea inferior */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm sm:text-base">
          <p>&copy; 2025 Enrique Vargas. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
