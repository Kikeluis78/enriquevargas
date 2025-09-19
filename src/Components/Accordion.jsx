// src/components/Accordion.jsx
import React, { useState } from "react";

export default function Accordion({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-800 py-3">
      {/* Botón que abre/cierra */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left text-gray-200 font-semibold hover:text-yellow-300 transition-colors focus:outline-none"
      >
        <span>{question}</span>
        <span className="ml-3 text-yellow-400 text-xl font-bold">
          {open ? "−" : "+"}
        </span>
      </button>

      {/* Contenido desplegable */}
      {open && (
        <div className="mt-2 text-gray-400 leading-relaxed transition-all duration-300 ease-in-out">
          {answer}
        </div>
      )}
    </div>
  );
}
