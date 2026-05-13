import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getActivePromotion } from '../utils/promotions';

const ModalPromocion = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [promotion, setPromotion] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const activePromo = getActivePromotion();
    if (!activePromo) return;
    if (localStorage.getItem('dontShowPromotion') === 'true') return;

    setPromotion(activePromo);
    const timer = setTimeout(() => setIsOpen(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setIsOpen(false);
  const handleDontShowAgain = () => {
    localStorage.setItem('dontShowPromotion', 'true');
    setIsOpen(false);
  };
  const handleContactClick = () => {
    setIsOpen(false);
    navigate('/contacto');
  };

  if (!promotion || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" onClick={handleClose} />

      <div
        className="relative w-full max-w-lg bg-[#0d1117] border border-[#00D9FF]/20 rounded-2xl shadow-2xl overflow-hidden"
        style={{ boxShadow: "0 0 60px rgba(0,217,255,0.08)" }}
      >
        {/* Línea accent */}
        <div className="h-1 w-full bg-gradient-to-r from-[#00D9FF] to-[#FF6B35]" />

        <div className="p-8">
          {/* Cerrar */}
          <button
            onClick={handleClose}
            className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center text-gray-500 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Ícono + Header */}
          <div className="mb-6">
            <div className="text-5xl mb-3">{promotion.icon}</div>
            <span className="text-xs font-bold tracking-widest text-[#00D9FF] uppercase">
              Oferta válida este Mes.
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mt-2 leading-tight">
              {promotion.subtitle}
            </h2>
            <p className="text-gray-400 mt-2 text-sm">{promotion.description}</p>
          </div>

          {/* Precio */}
          <div className="flex items-end gap-3 mb-6">
            <span className="text-4xl font-extrabold text-white">{promotion.price}</span>
            {promotion.originalPrice && (
              <span className="text-gray-600 line-through text-lg mb-1">{promotion.originalPrice}</span>
            )}
          </div>

          {/* Features */}
          <ul className="space-y-2 mb-6 border-t border-gray-800 pt-6">
            {promotion.features.map((feature, i) => (
              <li key={i} className="text-gray-300 text-sm">{feature}</li>
            ))}
          </ul>

          {promotion.note && (
            <p className="text-xs text-gray-600 italic mb-4">{promotion.note}</p>
          )}

          {/* CTA */}
          <button
            onClick={handleContactClick}
            className="w-full py-3 rounded-xl font-bold text-black bg-gradient-to-r from-[#00D9FF] to-[#FF6B35] hover:opacity-90 transition mb-2"
          >
            {promotion.buttonText}
          </button>

          <p className="text-center text-xs text-gray-600 mb-4">⏳ Quedan pocos dias</p>

          {/* No mostrar más */}
          <div className="flex items-center justify-center gap-2">
            <input
              type="checkbox"
              id="dontShowAgain"
              onClick={handleDontShowAgain}
              className="w-4 h-4 cursor-pointer accent-[#00D9FF]"
            />
            <label htmlFor="dontShowAgain" className="text-xs text-gray-600 cursor-pointer hover:text-gray-400 transition-colors">
              No mostrar más este anuncio
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalPromocion;
