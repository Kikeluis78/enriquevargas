import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Accordion from "../Components/Accordion";
import {
  CheckCircle,
  Globe,
  Smartphone,
  Search,
  Palette,
  ShieldCheck,
} from "lucide-react";

import AOS from "aos";
import "aos/dist/aos.css";

function Precios() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center px-6 py-10 space-y-12">
      {/* Botones superiores */}
      <div
        className="flex flex-col sm:flex-row justify-center gap-4"
        data-aos="fade-down"
      >
        <Link
          to="/precios"
          className="px-4 py-2 sm:px-5 sm:py-2 md:px-6 md:py-3 rounded-lg bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-400
 text-black font-bold shadow-lg hover:opacity-95 transition text-center"
        >
          🌐 Página Básica
        </Link>
        <Link
          to="/precios2"
          className="px-4 py-2 sm:px-5 sm:py-2 md:px-6 md:py-3 rounded-lg  bg-gradient-to-r from-pink-400 via-yellow-400 to-blue-500
 text-black font-bold shadow-lg hover:opacity-95 transition text-center"
        >
          🚀 Precios Pro
        </Link>
      </div>


      {/* Card principal */}
      <div
        className="bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-[0_0_25px_rgba(0,255,200,0.3)] p-6 sm:p-8 max-w-md sm:max-w-lg md:max-w-xl w-full text-center border border-teal-400/40"
        data-aos="zoom-in"
      >
              {/* Título centrado */}
      <div className="flex items-center justify-center" data-aos="fade-up">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 bg-gradient-to-r from-yellow-200 via-cyan-300 to-purple-300 bg-clip-text text-transparent">
          Página Básica a un Súper Precio
        </h1>
        <span className="ml-2 text-2xl sm:text-3xl md:text-4xl">🚀</span>
      </div>

        {/* Subtítulo */}
        <p className="text-gray-300 text-sm sm:text-base mb-6 leading-relaxed">
          La mejor opción para iniciar tu presencia en internet. Una web básica
          te brinda visibilidad profesional, confianza y una forma clara de
          presentar tus servicios.
        </p>

        {/* Lista de características */}
        <ul className="text-left space-y-4 text-gray-200 text-sm sm:text-base">
          <li className="flex items-center gap-3">
            <Globe className="w-5 h-5 text-blue-400" />
            Dominio personalizado y hosting básico
          </li>
          <li className="flex items-center gap-3">
            <Smartphone className="w-5 h-5 text-green-400" />
            Diseño 100% responsive (móvil, tablet y PC)
          </li>
          <li className="flex items-center gap-3">
            <Search className="w-5 h-5 text-yellow-400" />
            Optimización SEO inicial para Google
          </li>
          <li className="flex items-center gap-3">
            <Palette className="w-5 h-5 text-pink-400" />
            Diseño moderno con paleta personalizada
          </li>
          <li className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-purple-400" />
            Seguridad básica con certificado SSL
          </li>
          <li className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-teal-400" />
            2 Secciones (Inicio, Servicios, Nosotros, Contacto)
          </li>
        </ul>

        {/* Precio */}
        <div className="mt-8">
          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-teal-400">
            Desde $1,999 MXN
          </p>
          <p className="text-xs sm:text-sm text-gray-400 mt-1">
            *Precio único, sin costos ocultos
          </p>
        </div>

        {/* Botón contratar */}
        <Link
          to="/contacto"
          className="mt-6 block w-full px-4 py-2 sm:px-5 sm:py-2 md:px-6 md:py-3 bg-gradient-to-r from-cyan-400 via-yellow-200 to-pink-500
hover:opacity-95 text-black font-semibold rounded-xl shadow-lg shadow-blue-300/30 transition"
        >
          ¡Comprar Plan!
        </Link>
      </div>

      {/* Preguntas Frecuentes */}
      <div
        className="max-w-2xl w-full mx-auto"
        data-aos="fade-up"
        data-aos-delay="300"
      >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-6 text-center">
          <span className="text-2xl sm:text-3xl md:text-4xl">❓</span>
          <h2 className="text-xl sm:text-3xl md:text-3xl font-bold text-amber-300">
            Preguntas
          </h2>
          <p className="text-xl sm:text-3xl md:text-3xl font-bold text-blue-300">
            Frecuentes
          </p>
        </div>

        <Accordion
          question="⏳ ¿En cuánto tiempo estará lista mi página?"
          answer="Generalmente entre 5 y 7 días hábiles después de recibir toda la información de tu negocio."
        />
        <Accordion
          question="💳 ¿El precio incluye dominio y hosting?"
          answer="Sí, el paquete incluye dominio y hosting básico por 1 año."
        />
        <Accordion
          question="🔄 ¿Puedo actualizar mi página en el futuro?"
          answer="Claro, podrás ampliar secciones o pasar a un plan Pro si lo necesitas."
        />
        <Accordion
          question="📱 ¿Mi página se verá bien en celulares?"
          answer="Sí, todos nuestros diseños son totalmente responsivos y se adaptan a cualquier dispositivo."
        />
      </div>
    </div>
  );
}

export default Precios;
