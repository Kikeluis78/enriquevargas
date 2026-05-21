import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getActivePromotion } from '../utils/promotions';

const ModalPromocion = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const promotion = getActivePromotion();

  if (!promotion) return null;

  return (
    <>
      {/* Botón flotante regalo — fijo arriba derecha */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-20 right-4 z-[9998] flex flex-col items-center gap-1 group"
        aria-label="Ver promoción"
      >
        <span className="text-4xl animate-wiggle drop-shadow-lg">🎁</span>
        <span className="text-[11px] font-semibold text-white bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded-full whitespace-nowrap">
          Descubre tu sorpresa
        </span>
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/75 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Contenido */}
          <div className="relative w-full max-w-md bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl overflow-hidden">
            {/* Botón cerrar */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 rounded-full transition-colors"
              aria-label="Cerrar"
            >
              ✕
            </button>

            <div className="p-6">
              {/* Encabezado */}
              <div className="text-center mb-5">
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Oferta especial</p>
                <h2 className="text-2xl font-bold text-white">{promotion.subtitle}</h2>
                <p className="text-gray-400 text-sm mt-1">{promotion.description}</p>
              </div>

              {/* Precio */}
              <div className="text-center mb-5">
                {promotion.originalPrice && (
                  <p className="text-gray-500 line-through text-sm">{promotion.originalPrice}</p>
                )}
                <p className="text-4xl font-bold text-white">{promotion.price}</p>
              </div>

              {/* Características */}
              <ul className="space-y-2 mb-6">
                {promotion.features.map((feature, i) => (
                  <li key={i} className="text-gray-300 text-sm">{feature}</li>
                ))}
              </ul>

              {promotion.note && (
                <p className="text-xs text-gray-500 italic mb-4">{promotion.note}</p>
              )}

              {/* CTA */}
              <button
                onClick={() => { setIsOpen(false); navigate('/contacto'); }}
                className="w-full bg-white text-gray-900 font-semibold py-3 rounded-xl hover:bg-gray-100 transition-colors"
              >
                {promotion.buttonText}
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes wiggle {
          0%, 100% { transform: rotate(-8deg) scale(1.05); }
          25% { transform: rotate(8deg) scale(1.1); }
          50% { transform: rotate(-5deg) scale(1.05); }
          75% { transform: rotate(5deg) scale(1.1); }
        }
        .animate-wiggle {
          animation: wiggle 1.2s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default ModalPromocion;
