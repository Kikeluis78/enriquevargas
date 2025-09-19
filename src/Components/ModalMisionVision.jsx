import { useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ModalMisionVision({ isOpen, onClose }) {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div
        data-aos="zoom-in"
        className="relative bg-gray-900 text-white rounded-xl shadow-2xl max-w-3xl w-full p-6 md:p-10"
      >
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-300 hover:text-white transition"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>

        {/* Contenido del modal */}
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-300 mb-6 text-center">
          Misión y Visión
        </h2>

        <div className="space-y-6 text-gray-200 text-lg md:text-xl">
          {/* Misión */}
          <div>
            <h3 className="font-semibold text-blue-400 mb-2">Misión</h3>
            <p>
              Ayudar a pequeños y medianos negocios a posicionarse en el mundo
              digital conectando con sus clientes de manera efectiva y
              profesional. Entrego aplicaciones web funcionales y accesibles,
              creando una sinergia entre cliente y usuario.
            </p>
            <p>
              Para negocios con servicio a domicilio, busco agilizar la
              atención al cliente mediante páginas web automatizadas, optimizando
              tiempos de respuesta y mejorando la experiencia del usuario.
            </p>
          </div>

          {/* Visión */}
          <div>
            <h3 className="font-semibold text-blue-400 mb-2">Visión</h3>
            <p>
              Revolucionar la publicidad digital reduciendo el impacto ambiental
              de volantes y papelería innecesaria. Transformo estos elementos en
              estrategias digitales efectivas para tu negocio.
            </p>
            <p>
              Busco que cada cliente tenga presencia online de manera profesional,
              accesible y responsable con el medio ambiente, aumentando la
              visibilidad y la eficiencia de su negocio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
