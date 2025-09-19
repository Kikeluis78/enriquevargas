import { useState } from "react";

export default function InfoContrato() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-md mt-6 border border-gray-700 rounded-xl overflow-hidden mb-6">
      {/* Botón de pestaña */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-blue-500 text-yellow-400 font-semibold px-4 py-3 flex justify-between items-center focus:outline-none"
      >
        <span>NOTA: Tu Contrato disponible tras enviar tus datos</span>
        <span className="transform transition-transform duration-300">
          {isOpen ? "▲" : "▼"}
        </span>
      </button>

      {/* Contenido desplegable */}
      {isOpen && (
    <div className="bg-gray-900 text-gray-300 px-3 py-2 text-xs text-justify rounded-md mb-4">
  Nota:{""} Al enviar tus datos, podrás <strong>descargar tu contrato</strong> para leerlo y firmarlo.
</div>


      )}
    </div>
  );
}
