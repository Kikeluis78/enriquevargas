import { useState } from "react";

export default function ModalConstruccion() {
  const [show, setShow] = useState(true); // cambia a false si no quieres mostrarlo al inicio

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div
        className="
          bg-gradient-to-b from-gray-900 via-gray-800 to-black
          rounded-2xl shadow-2xl relative border border-gray-700
          w-[90%] sm:w-[80%] max-w-4xl h-[70vh]
          flex flex-col p-8
        "
      >
        {/* Contenido con scroll */}
        <div className="overflow-y-auto flex-1 custom-scroll px-4 text-center">
          {/* Título */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-amber-400 mb-6 drop-shadow-lg mt-6">
            🚧 Estamos en Construcción 🚧
          </h2>

          {/* Texto */}
          <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-18">
            Esta sección aún no está disponible.  
            <span className="text-blue-400 font-semibold"> ¡Estamos trabajando </span>  
            <span className="text-yellow-400 font-semibold" >    para que esté lista muy pronto! 🚀  </span>
         
          </p>

        
        </div>

        {/* Botón centrado */}
        <div className="pt-6">
          <button
            onClick={() => setShow(false)}
            className="mx-auto block px-6 py-2 bg-blue-500 hover:bg-blue-600 
                       text-white font-semibold rounded-full shadow-md 
                       transition-transform transform hover:scale-105 text-sm sm:text-base mt-12"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
