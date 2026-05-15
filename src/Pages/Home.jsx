/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { HOME_PHRASES } from "../utils/constants";

// Material UI
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

// Framer Motion
import { motion } from "framer-motion";

import Biografia from "../Components/Biografia";
import ComoTrabajamos from "../Components/ComoTrabajamos";

export default function Home() {
  const [currentText, setCurrentText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    let isMounted = true;
    const delay = (ms) => new Promise((res) => setTimeout(res, ms));

    const write = async () => {
      while (isMounted) {
        const text = HOME_PHRASES[phraseIndex];

        for (let i = 0; i <= text.length; i++) {
          if (!isMounted) return;
          setCurrentText(text.slice(0, i));
          await delay(90);
        }

        await delay(1300);

        setCurrentText("");
        await delay(300);

        setPhraseIndex((p) => (p + 1) % HOME_PHRASES.length);
      }
    };

    write();
    return () => {
      isMounted = false;
    };
  }, [phraseIndex]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      id="home"
      sx={{
        pt: { xs: 10, md: 14 },
        pb: 10,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#0a0a0a",
      }}
    >
      <Container maxWidth="xl">
        <div className="grid md:grid-cols-2 gap-16 items-center w-full">
          {/* ------------ TEXTO ------------ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
              Diseño Web &<br />
              <span className="text-[#00D9FF]">Android</span>
            </h1>

            <p className="text-xl text-gray-400 mb-8 max-w-md">
              "Cambiando la manera de hacer Publicidad en México".
            </p>

            <p className="text-lg text-[#00D9FF] mb-8 font-mono h-7">
              {currentText}
              <span className="animate-pulse">|</span>
            </p>

            {/* ✅ CTA PRINCIPAL */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                component={Link}
                to="/precios"
                sx={{
                  px: 6,
                  py: 2,
                  borderRadius: 3,
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  background: "linear-gradient(45deg, #00D9FF, #FF6B35)",
                  color: "white",
                  boxShadow: "0 0 20px rgba(0, 217, 255, 0.4)",
                  "&:hover": {
                    background: "linear-gradient(45deg, #00C4E6, #E55A30)",
                    transform: "translateY(-3px)",
                    boxShadow: "0 10px 30px rgba(0, 217, 255, 0.5)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                🚀 Ver Planes
              </Button>
              <Button
                component={Link}
                to="/contacto"
                sx={{
                  px: 6,
                  py: 2,
                  borderRadius: 3,
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  background: "linear-gradient(45deg, #FF6B35, #FF3CAC)",
                  color: "white",
                  boxShadow: "0 0 20px rgba(255, 107, 53, 0.4)",
                  "&:hover": {
                    background: "linear-gradient(45deg, #E55A30, #E030A0)",
                    transform: "translateY(-3px)",
                    boxShadow: "0 10px 30px rgba(255, 107, 53, 0.5)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                📞 Contactar
              </Button>
            </div>
          </motion.div>

          {/* ------------ IMAGEN ------------ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full flex justify-center"
          >
            <div className="relative z-10 bg-gradient-to-br from-[#00D9FF]/20 to-[#FF6B35]/20 p-4 rounded-3xl backdrop-blur-sm border border-[#00D9FF]/30 w-full max-w-lg">
              <img
                src="https://images.pexels.com/photos/7988086/pexels-photo-7988086.jpeg"
                alt="Diseñador trabajando"
                className="rounded-2xl w-full h-auto shadow-2xl"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-[#00D9FF]/20 rounded-full blur-3xl"></div>
          </motion.div>

        </div>

        {/* ------------ TESTIMONIOS ------------ */}
        <Box sx={{ mt: 20 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Lo Que Dicen <span className="text-[#00D9FF]">Mis Clientes</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Testimonios reales de proyectos exitosos
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Carlos Méndez",
                role: "Dueño de Pizzería La Napolitana",
                text: "Mi negocio creció un 40% después de tener mi página web. Ahora recibo pedidos online y mis clientes pueden ver el menú desde su celular. ¡Excelente trabajo!",
              },
              {
                name: "Ana Rodríguez",
                role: "Estilista Profesional",
                text: "La agenda digital me cambió la vida. Mis clientes ahora reservan sus citas online y yo puedo organizar mejor mi tiempo. Súper recomendado.",
              },
              {
                name: "Luis Hernández",
                role: "Plomero Independiente",
                text: "Antes dependía del boca a boca. Ahora con mi tarjeta digital profesional, los clientes me encuentran fácil y confían más en mi servicio.",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative p-6 rounded-2xl bg-[#0A0A0A] border border-gray-800 hover:border-[#00D9FF]/50 transition-all duration-300"
              >
                <div className="mb-4">
                  <h4 className="text-white font-bold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="absolute top-4 right-4 text-[#00D9FF] text-4xl opacity-20">
                  "
                </div>
              </motion.div>
            ))}
          </div>
        </Box>

        {/* ------------ CÓMO TRABAJAMOS ------------ */}
        <ComoTrabajamos />

        {/* ------------ BIO ------------ */}
        <Box sx={{ mt: 16 }}>
          <Biografia />
        </Box>
      </Container>
    </Box>
  );
}