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
        pt: { xs: 6, md: 10 },
        pb: 10,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#0a0a0a",
      }}
    >
      <Container maxWidth="xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center w-full">
          {/* ------------ TEXTO ------------ */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            {/* Título principal: Soluciones Digitales */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight text-white text-center md:text-left">
              Soluciones<br className="sm:hidden" />
              <span className="text-[#00D9FF]"> Digitales</span>
            </h1>

            {/* Texto de impacto comercial */}
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 max-w-lg text-center md:text-left leading-relaxed">
              Herramientas digitales simples para vender, organizar y conectar mejor con tus clientes.
            </p>

            {/* Máquina de escribir */}
            <div className="mb-6 min-h-[28px] flex items-center justify-center md:justify-start">
              <p className="text-base sm:text-lg text-[#00D9FF] font-mono">
                {currentText}
                <span className="animate-pulse">|</span>
              </p>
            </div>

            {/* Botones CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                component={Link}
                to="/precios"
                sx={{
                  px: 6, py: 2, borderRadius: 3, fontWeight: 700, fontSize: "1.1rem",
                  background: "linear-gradient(45deg, #00D9FF, #FF6B35)", color: "white",
                  boxShadow: "0 0 20px rgba(0, 217, 255, 0.4)",
                  "&:hover": { background: "linear-gradient(45deg, #00C4E6, #E55A30)", transform: "translateY(-3px)", boxShadow: "0 10px 30px rgba(0, 217, 255, 0.5)" },
                  transition: "all 0.3s ease",
                }}
              >🚀 Ver Planes</Button>
              <Button
                component={Link}
                to="/contacto"
                sx={{
                  px: 6, py: 2, borderRadius: 3, fontWeight: 700, fontSize: "1.1rem",
                  background: "linear-gradient(45deg, #FF6B35, #FF3CAC)", color: "white",
                  boxShadow: "0 0 20px rgba(255, 107, 53, 0.4)",
                  "&:hover": { background: "linear-gradient(45deg, #E55A30, #E030A0)", transform: "translateY(-3px)", boxShadow: "0 10px 30px rgba(255, 107, 53, 0.5)" },
                  transition: "all 0.3s ease",
                }}
              >📞 Contactar</Button>
            </div>
          </motion.div>

          {/* ------------ IMAGEN ------------ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full flex justify-center"
          >
            <div className="relative z-10 bg-gradient-to-br from-[#00D9FF]/20 to-[#FF6B35]/20 p-3 sm:p-4 rounded-3xl backdrop-blur-sm border border-[#00D9FF]/30 w-full max-w-lg">
              <img
                src="/home-soluciones-digitales.webp"
                alt="Soluciones digitales para pequeños negocios"
                className="rounded-2xl w-full h-auto shadow-2xl"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-[#00D9FF]/20 rounded-full blur-3xl"></div>
          </motion.div>
        </div>

        <section className="mt-16 scroll-mt-28" id="productos-inicio" aria-labelledby="soluciones-titulo">
          <h2 id="soluciones-titulo" className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
            Soluciones <span className="text-[#00D9FF]">para tu negocio</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { id: "telegram", image: "/img/telegram-pedidos.webp", name: "Sistema de pedidos desde Telegram", description: "Tus clientes consultan productos, arman su pedido y el negocio recibe el detalle por WhatsApp." },
              { id: "tarjeta", image: "/img/tarjeta-digital.webp", imageAlt: "Tarjeta digital con servicios, datos de contacto y WhatsApp", name: "Tarjeta Digital", description: "Presenta tus servicios, datos de contacto y WhatsApp en una página sencilla y profesional." },
              { id: "agenda", image: "/img/agenda-digital.webp", imageAlt: "Agenda digital con calendario, selección de horario y confirmación por WhatsApp o correo", name: "Agenda Digital", description: "Permite que tus clientes elijan día y horario y recibas la información de la cita de forma ordenada." },
              { id: "pizzeria", icon: "🍕", name: "Menú Digital con Pedidos por WhatsApp", description: "Muestra tu menú y recibe pedidos por WhatsApp." },
            ].map((solution) => (
              <article key={solution.id} className="flex flex-col p-6 rounded-2xl bg-[#0A0A0A] border border-[#00D9FF]/30">
                {!solution.image && <span aria-hidden="true" className="text-4xl mb-4">{solution.icon}</span>}
                <h3 className="text-lg font-bold text-white mb-2">{solution.name}</h3>
                {solution.image && (
                  <img src={solution.image} alt={solution.imageAlt ?? "Sistema de pedidos desde Telegram con menú, carrito y envío a WhatsApp"} className="w-full h-auto mb-4" loading="lazy" />
                )}
                <p className="text-gray-300 text-sm mb-6">{solution.description}</p>
                <Link to="/precios" aria-label={`Más información sobre ${solution.name}`} className="mt-auto inline-flex items-center justify-center min-h-12 px-4 py-3 rounded-xl border border-[#00D9FF] text-[#00D9FF] font-semibold hover:bg-cyan-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                  Más información
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 p-6 rounded-2xl border border-[#00D9FF]/30 text-center" aria-labelledby="demos-inicio">
          <h2 id="demos-inicio" className="text-2xl font-bold text-white mb-3">¿Quieres verlo funcionando?</h2>
          <p className="text-gray-300 mb-4">Explora las demostraciones disponibles antes de decidir.</p>
          <Link to="/precios" className="inline-flex min-h-12 items-center px-6 py-3 rounded-xl bg-[#00D9FF] text-black font-bold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Ver planes</Link>
        </section>

        {/* ------------ BIO ------------ */}
        <Box sx={{ mt: 16 }}>
          <Biografia />
        </Box>
      </Container>
    </Box>
  );
}