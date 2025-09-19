// src/Components/Biografia.tsx
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ModalMisionVision from "./ModalMisionVision";


export default function Biografia() {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-center gap-8 px-4 py-16 bg-gray-900 text-white">
        {/* Fotografía */}
        <div
          data-aos="fade-right"
          className="flex-shrink-0 w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-xl border-4 border-blue-400"
        >
          <img
            src="/img/foto.jpeg"
            alt="Enrique Vargas"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Texto de biografía */}
        <div data-aos="fade-left" className="max-w-xl text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-yellow-300">
            Sobre mí
          </h2>

          <p className="text-lg sm:text-xl text-gray-200 mb-4 leading-relaxed">
            Hola, soy Enrique Vargas, tengo 47 años y cuento con más de 15 años
            de experiencia en ventas y trato directo con la gente. Siempre he
            buscado estrategias de marketing directo para alcanzar objetivos
            claros de ventas y, ahora, combinando mi experiencia con el
            desarrollo web, busco ayudar a pequeños y medianos negocios a
            impulsar su presencia en línea.
          </p>

          <p className="text-lg sm:text-xl text-gray-200 mb-4 leading-relaxed">
            ✨ Mi objetivo es acompañarte a entrar al mundo digital, para que
            conectes con tus clientes y hagas crecer tu negocio de manera
            profesional y efectiva. Lo hago de forma cercana y personalizada,
            como si estuviera hablando directamente contigo.
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold text-white mt-6 mb-4">
            🚀 5 Razones para que impulses tu negocio en internet:
          </h3>

          <ul className="list-disc list-inside space-y-2 text-lg sm:text-xl text-gray-200 leading-relaxed">
            <li>
              🌐 <strong>Página web profesional:</strong> tu carta de
              presentación 24/7.
            </li>
            <li>
              📱 <strong>Redes sociales (Facebook, Instagram, TikTok):</strong>{" "}
              conecta, genera confianza y atrae nuevos clientes.
            </li>
            <li>
              ✉️ <strong>Email marketing:</strong> comunica promociones y
              fideliza a tus clientes.
            </li>
            <li>
              🔎 <strong>Posicionamiento en Google (SEO y Google Maps):</strong>{" "}
              haz que te encuentren fácilmente.
            </li>
            <li>
              💳 <strong>Tiendas en línea y pasarelas de pago:</strong> vende
              tus productos o servicios de forma segura y sencilla.
            </li>
          </ul>

          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setModalOpen(true);
            }}
            className="mt-6 inline-block font-bold text-lg relative transition-all duration-300 hover:scale-105"
          >
            <span className="text-yellow-400">Misión</span>{" "}
            <span className="text-blue-400">y Visión</span>
            {/* Línea decorativa completa debajo del texto */}
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-blue-400 
                   rounded-full opacity-50 transition-all duration-300 hover:opacity-100"></span>
          </a>
        </div>
      </section>

      {/* Modal */}
      <ModalMisionVision isOpen={modalOpen} onClose={() => setModalOpen(false)} />

   
    </>
  );
}
