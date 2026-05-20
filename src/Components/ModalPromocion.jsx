import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getActivePromotion } from '../utils/promotions';

const ModalPromocion = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [promotion, setPromotion] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Verificar si hay una promoción activa
    const activePromo = getActivePromotion();
    
    if (!activePromo) {
      return; // No hay promoción activa, no mostrar modal
    }

    // Verificar si el usuario marcó "No mostrar más"
    const dontShowAgain = localStorage.getItem('dontShowPromotion');
    
    if (dontShowAgain === 'true') {
      return; // El usuario no quiere ver más el modal
    }

    setPromotion(activePromo);

    // Mostrar el modal después de 10 segundos
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleDontShowAgain = () => {
    localStorage.setItem('dontShowPromotion', 'true');
    setIsOpen(false);
  };

  const handleContactClick = () => {
    setIsOpen(false);
    navigate('/contacto');
  };

  if (!promotion || !isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 animate-fadeIn">
      {/* Overlay con blur */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl shadow-2xl animate-scaleIn">
        {/* Botón cerrar */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-red-500/20 hover:bg-red-500/40 text-white rounded-full transition-all duration-300 hover:rotate-90 hover:scale-110"
          aria-label="Cerrar"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Contenido del modal */}
        <div className="p-8">
          {/* Header con gradiente */}
          <div className={`bg-gradient-to-r ${promotion.gradient} p-6 rounded-2xl mb-6 text-center relative overflow-hidden`}>
            <div className="absolute inset-0 bg-black/10" />
            <div className="relative z-10">
              <div className="text-6xl mb-3 animate-bounce">{promotion.icon}</div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">
                {promotion.title}
              </h2>
              <p className="text-xl md:text-2xl font-semibold text-white/95 drop-shadow-md">
                {promotion.subtitle}
              </p>
            </div>
          </div>

          {/* Descripción */}
          <p className="text-center text-gray-300 text-lg mb-6">
            {promotion.description}
          </p>

          {/* Precio */}
          <div className="text-center mb-6">
            {promotion.originalPrice && (
              <p className="text-gray-500 line-through text-xl mb-2">
                {promotion.originalPrice}
              </p>
            )}
            <p className={`text-5xl md:text-6xl font-bold bg-gradient-to-r ${promotion.gradient} bg-clip-text text-transparent animate-pulse`}>
              {promotion.price}
            </p>
          </div>

          {/* Características */}
          <div className="bg-gray-800/50 rounded-xl p-6 mb-6 border border-gray-700">
            <ul className="space-y-3">
              {promotion.features.map((feature, index) => (
                <li 
                  key={index}
                  className="text-gray-200 text-base md:text-lg flex items-start animate-slideInLeft"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="mr-2 flex-shrink-0">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Nota adicional si existe */}
          {promotion.note && (
            <p className="text-xs text-gray-400 text-center mb-6 italic">
              {promotion.note}
            </p>
          )}

          {/* Botón de acción principal */}
          <button
            onClick={handleContactClick}
            className={`w-full bg-gradient-to-r ${promotion.gradient} text-white font-bold text-xl py-4 px-8 rounded-xl hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-2xl mb-4`}
          >
            {promotion.buttonText}
          </button>

          {/* Checkbox "No mostrar más" */}
          <div className="flex items-center justify-center space-x-2 mb-4">
            <input
              type="checkbox"
              id="dontShowAgain"
              onChange={handleDontShowAgain}
              className="w-4 h-4 text-purple-600 bg-gray-700 border-gray-600 rounded focus:ring-purple-500 focus:ring-2 cursor-pointer"
            />
            <label 
              htmlFor="dontShowAgain" 
              className="text-sm text-gray-400 cursor-pointer hover:text-gray-300 transition-colors"
            >
              No mostrar más este anuncio
            </label>
          </div>

          {/* Texto adicional */}
          <p className="text-center text-xs text-gray-500">
            ⏰ Oferta por tiempo limitado
          </p>
        </div>

        {/* Efectos decorativos */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden rounded-3xl">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.4s ease-out;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.5s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default ModalPromocion;
