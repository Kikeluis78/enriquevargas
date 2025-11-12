/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AOS from "aos";
import "aos/dist/aos.css";
import Accordion from "../Components/Accordion";

export default function Precios2() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const planes = [
    {
      name: "E-Commerce PRO",
      price: "$7,499",
      description:
        "Tienda online completa con carrito de compras, pasarelas de pago y panel de administración.",
      features: [
        "✅ Diseño profesional con catálogo ilimitado",
        "✅ Carrito de compras integrado (Stripe / PayPal)",
        "✅ Panel de gestión de productos y pedidos",
        "✅ Integración con WhatsApp para atención al cliente",
        "✅ SEO avanzado + Google Analytics",
        "✅ Hosting y dominio por 1 año",
        "✅ Soporte técnico 6 meses",
      ],
      bestFor: ["Tiendas físicas", "Emprendedores", "Marcas locales"],
    },
    {
      name: "Web Corporativa",
      price: "$9,999",
      featured: true,
      description:
        "Ideal para empresas o marcas que buscan presencia sólida y escalabilidad.",
      features: [
        "✅ Diseño web robusto y personalizable",
        "✅ Hasta 12 secciones o páginas",
        "✅ Integración de blog, noticias y formularios avanzados",
        "✅ Panel de administración básico",
        "✅ Hosting y dominio por 1 año",
        "✅ Soporte técnico 1 año",
        "✅ SEO completo y carga optimizada",
      ],
      bestFor: ["Empresas", "Agencias", "Consultorías", "Startups"],
    },
    {
      name: "Oferta 2026: Web + App",
      price: "$12,999",
      description:
        "Lanzamiento especial: sitio web completo con aplicación Android incluida.",
      features: [
        "✅ Web profesional + App Android funcional",
        "✅ Panel de control unificado (sin código complejo)",
        "✅ Diseño responsivo y optimizado",
        "✅ Hosting y dominio por 1 año",
        "✅ Publicación en Google Play",
        "✅ 1 año de soporte y actualizaciones",
      ],
      bestFor: ["Negocios en crecimiento", "Profesionales", "Tiendas digitales"],
    },
  ];

  return (
    <>
      {/* ✅ Sección principal */}
      <section id="precios" className="py-20 px-6 bg-[#1A1A1A]">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
              <span className="text-[#00D9FF]">Planes Premium</span>
            </h2>
            <p className="text-gray-400 text-center mb-12 text-lg">
              Soluciones integrales con Hosting y Dominio por 1 año
            </p>
          </motion.div>

          {/* 🔙 Botón volver a básicos */}
          <div className="text-center mb-12">
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
                "&:hover": {
                  background: "linear-gradient(45deg, #00C4E6, #E55A30)",
                  transform: "translateY(-2px)",
                  boxShadow: "0 10px 20px rgba(0, 217, 255, 0.3)",
                },
                transition: "all 0.3s ease",
              }}
            >
              ← Ver Planes Básicos
            </Button>
          </div>

          {/* ✅ Tarjetas Premium */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {planes.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative p-8 rounded-3xl ${
                  plan.featured
                    ? "bg-gradient-to-br from-[#00D9FF]/20 to-[#FF6B35]/20 border-2 border-[#00D9FF]"
                    : "bg-[#0A0A0A] border border-gray-800"
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#00D9FF] text-black px-4 py-1 rounded-full text-sm font-semibold">
                    Más Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2 text-white text-center">
                  {plan.name}
                </h3>
                <p className="text-gray-400 text-center mb-4 text-sm">
                  {plan.description}
                </p>
                <div className="text-center mb-6">
                  <span className="text-5xl font-bold text-[#00D9FF]">
                    {plan.price}
                  </span>
                  <span className="text-gray-400 ml-2">MX</span>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-400 mb-2">Ideal para:</p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {plan.bestFor.map((prof, i) => (
                      <span
                        key={i}
                        className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs"
                      >
                        {prof}
                      </span>
                    ))}
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-[#00D9FF] mt-1">✓</span>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Box sx={{ mt: 6, textAlign: "center" }}>
                  <Button
                    component={Link}
                    to="/contacto"
                    sx={{
                      mt: 3,
                      px: 4,
                      py: 1.5,
                      width: "auto",
                      borderRadius: 2,
                      fontWeight: 700,
                      background:
                        "linear-gradient(to right, #22d3ee, #60a5fa, #FF6B35)",
                      color: "white",
                      "&:hover": { opacity: 0.9, transform: "translateY(-2px)" },
                      transition: "all 0.3s ease",
                    }}
                  >
                    ¡Contratar Plan!
                  </Button>
                </Box>
              </motion.div>
            ))}
          </div>

          {/* 🧩 Tarjeta Horizontal - Aplicaciones Android */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="max-w-6xl mx-auto mt-16 bg-[#0A0A0A] border border-[#00D9FF]/30 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8"
          >
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-[#00D9FF] mb-3">
                🚀 Aplicaciones Android
              </h3>
              <p className="text-gray-300 mb-4">
                Desarrollamos tu aplicación Android profesional desde cero o
                complementamos tu página web actual.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>✅ App nativa o híbrida (según tus necesidades)</li>
                <li>✅ Publicación en Google Play incluida</li>
                <li>✅ Integración con base de datos y API</li>
                <li>✅ Diseño moderno y responsivo</li>
                <li>✅ Hosting + Dominio + soporte por 1 año</li>
              </ul>
              <Box sx={{ mt: 5 }}>
                <Button
                  component={Link}
                  to="/contacto"
                  sx={{
                    px: 5,
                    py: 1.5,
                    borderRadius: 2,
                    fontWeight: 700,
                    background: "linear-gradient(to right, #00D9FF, #FF6B35)",
                    color: "white",
                    "&:hover": { opacity: 0.9 },
                  }}
                >
                  Solicitar Cotización
                </Button>
              </Box>
            </div>

            <div className="flex-1 text-center">
              <img
                src="https://images.pexels.com/photos/5054354/pexels-photo-5054354.jpeg"
                alt="App Android"
                className="w-full max-w-sm mx-auto rounded-2xl shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ✅ Preguntas frecuentes */}
      <Box sx={{ maxWidth: "650px", mx: "auto", mt: 12 }} data-aos="fade-up">
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: { xs: "1.8rem", md: "2.2rem" },
            textAlign: "center",
            mb: 4,
            color: "#fbbf24",
          }}
        >
          Preguntas <span style={{ color: "#60a5fa" }}>Frecuentes</span>
        </Typography>

        <Accordion
          question="⏳ ¿Cuánto tarda un proyecto Premium?"
          answer="Entre 7 y 15 días hábiles, dependiendo de la complejidad."
        />
        <Accordion
          question="💳 ¿Incluye Hosting y Dominio?"
          answer="Sí, todos los planes incluyen Hosting y Dominio por 1 año."
        />
        <Accordion
          question="📱 ¿Entregan también App Android?"
          answer="Solo en el plan 'Oferta 2026' y el servicio de Aplicaciones Android."
        />
        <Accordion
          question="🔄 ¿Puedo pedir mantenimiento mensual?"
          answer="Sí, ofrecemos planes de soporte y mantenimiento a medida."
        />
      </Box>
    </>
  );
}
