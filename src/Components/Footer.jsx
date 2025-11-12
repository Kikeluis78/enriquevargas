import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

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
      <div className="container mx-auto max-w-7xl">
        {/* 🧩 GRID PRINCIPAL */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* 🧩 Columna 1 */}
          <div className="space-y-2">
            <h3 className="text-3xl font-extrabold mb-1 tracking-tight">
              <span className="bg-gradient-to-r from-[#00D9FF] to-[#38bdf8] bg-clip-text text-transparent">
                ENRIQUE
              </span>{" "}
              <span className="text-[#f1f5f9]">VARGAS</span>
            </h3>

            <p className="text-[#d1d5db] text-lg font-medium">
              Diseñador Web & Android
            </p>

            <p className="text-[#94a3b8] text-sm max-w-xs leading-relaxed">
              Creando experiencias digitales modernas, rápidas y funcionales.
            </p>
          </div>
          {/* 🌐 Columna 2 */}
          <div>
            <h4 className="font-semibold mb-4 text-[#f1f5f9]">
              Redes Sociales
            </h4>
            <div className="space-y-2">
              {[
                [
                  "TikTok",
                  "https://www.tiktok.com/@enrique_vargas78?_r=1&_t=ZS-91HtncI6YV7",
                ],
                [
                  "YouTube",
                  "https://youtube.com/@enriqueg_v078?si=1dnfkiUWwHFXuav4",
                ],
                ["Facebook", "https://facebook.com"],
                ["Instagram", "https://instagram.com"],
                ["Threads", "https://www.threads.net/@enrique_vargas78"],
                [
                  "X",
                  "https://x.com/EnriqueVargas78?t=25WkjbMn3Z0wROzI60eY3A&s=08",
                ],
                ["Telegram", "http://t.me/EnriqueVargas78"],
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


          { /* Columna 3  */ }
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
