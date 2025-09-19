import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = footerRef.current; // 👈 copiar el ref
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { root: null, threshold: 0.1 }
    );

    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef); // 👈 usar la copia
    };
  }, []); // ✅ no necesita agregar footerRef al array de deps

  return (
    <footer
      ref={footerRef}
      className={`bg-gray-900 text-white text-center py-6 sm:py-8 px-4 sm:px-6 transition-opacity duration-700 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Derechos */}
      <div className="mb-4 sm:mb-6 text-xs sm:text-sm text-gray-400">
        &copy; 2025 Enrique Vargas. Todos los derechos reservados.
      </div>

      {/* Enlaces de navegación */} 
      
      <div className="mb-5 sm:mb-6 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm sm:text-base">
     {/*   <a
          href="https://ejemplo.com/inicio"
          target="_blank"
          className="hover:underline text-gray-300 hover:text-white"
        >
          Inicio
        </a>
        <a
          href="https://ejemplo.com/sobre-mi"
          target="_blank"
          className="hover:underline text-gray-300 hover:text-white"
        >
          Sobre mí
        </a>
        <a
          href="https://ejemplo.com/portafolio"
          target="_blank"
          className="hover:underline text-gray-300 hover:text-white"
        >
          Portafolio
        </a>
        <a
          href="https://ejemplo.com/blog"
          target="_blank"
          className="hover:underline text-gray-300 hover:text-white"
        >
          Blog
        </a>
        <a
          href="https://ejemplo.com/contacto"
          target="_blank"
          className="hover:underline text-gray-300 hover:text-white"
        >
          Contacto
        </a>  */}
        <Link
          to="/politica"
          className="hover:underline text-gray-300 hover:text-white"
        >
          Política de privacidad
        </Link>
      </div>

      {/* Redes sociales */}
      <div className="flex justify-center gap-6 sm:gap-12 text-white text-lg sm:text-xl">
        <a
          href="https://www.facebook.com/share/16GF1dVBJK/"
          target="_blank"
          aria-label="Facebook"
          className="hover:text-blue-500 transition"
        >
          <FaFacebookF className="w-5 h-5 sm:w-6 sm:h-6" />
        </a>
        <a
          href="https://www.instagram.com/enrique_vargas78/profilecard/?igsh=MWRkZXp2c3A1cHN0OQ=="
          target="_blank"
          aria-label="Instagram"
          className="hover:text-pink-500 transition"
        >
          <FaInstagram className="w-5 h-5 sm:w-6 sm:h-6" />
        </a>
        <a
          href="https://youtube.com/@enriqueg_v078?si=yNkYuswDl_eSaM_b"
          target="_blank"
          aria-label="YouTube"
          className="hover:text-red-500 transition"
        >
          <FaYoutube className="w-5 h-5 sm:w-6 sm:h-6" />
        </a>
      </div>
    </footer>
  );
}
