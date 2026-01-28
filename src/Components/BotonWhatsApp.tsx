import React from "react";
import { FaWhatsapp } from "react-icons/fa";
<<<<<<< HEAD
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "../utils/constants";
=======
>>>>>>> 667f29b77d5f478d3953a3784b3b9355338575ad

// ✅ Material UI
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";

export default function BotonWhatsApp() {
<<<<<<< HEAD
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
=======
  const numero = "5611001627";
  const mensaje = "¡Hola! Me interesa más información.";
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
>>>>>>> 667f29b77d5f478d3953a3784b3b9355338575ad

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 24,
        right: 24,
        zIndex: 50,
      }}
    >
      <IconButton
        component="a"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chatear por WhatsApp"
        title="Chatear por WhatsApp"
        sx={{
          width: 64,
          height: 64,
          borderRadius: "50%",
          bgcolor: "#22c55e", // verde tailwind
          color: "white",
          border: "4px solid #15803d",
          boxShadow: "0 0 20px rgba(16,185,129,0.8)",
          transition: "transform 0.2s ease",
          "&:hover": {
            transform: "scale(1.12)",
            bgcolor: "#16a34a",
          },
        }}
        className="animate-whatsapp-glow"
      >
        <FaWhatsapp size={32} />
      </IconButton>
    </Box>
  );
}
