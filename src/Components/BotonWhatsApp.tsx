import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const BotonWhatsApp: React.FC = () => {
  const numero = "5611001627";
  const mensaje = "¡Hola! Me interesa más información.";
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chatear por WhatsApp"
      title="Chatear por WhatsApp"
      className="fixed bottom-6 right-6 z-50 
                 flex items-center justify-center 
                 w-16 h-16 rounded-full 
                 bg-green-500 text-white 
                 border-4 border-green-700 
                 shadow-[0_0_20px_rgba(16,185,129,0.8)]
                 transition-transform hover:scale-110
                 animate-whatsapp-glow"
    >
      <FaWhatsapp className="w-8 h-8" />
    </a>
  );
};

export default BotonWhatsApp;
