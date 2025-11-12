/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// ✅ Material UI
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

// ✅ Accordion personalizado
import Accordion from "../Components/Accordion";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Precios() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      {/* ✅ Sección de Precios */}
      <section id="precios" className="py-20 px-6 bg-[#1A1A1A]">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
              <span className="text-[#00D9FF]"> Planes Web Express</span>
            </h2>
            <p className="text-gray-400 text-center mb-12 text-lg">
               Diseños listos para impulsar tu negocio en menos de una semana 🚀
               <br/>
              Soluciones prácticas para tu negocio — Hosting y Dominio incluidos
            </p>
          </motion.div>

          {/* ✅ BOTÓN VER PLANES PREMIUM */}
          <div className="text-center mb-12">
            <Button
              component={Link}
              to="/precios2"
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
              🚀 Ver Planes Premium
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[

              // 🧩 TARJETA 1
              {
                name: "Tarjeta Digital",
                price: "$699",
                description:
                  "Perfecta para tu oficio. Llévalo al mundo online con estilo profesional.",
                features: [
                  "✅ Diseño web responsivo de una sola página",
                  "✅ Secciones: Servicios + Contacto",
                  "✅ Optimización SEO básica",
                  "✅ Formulario de contacto funcional",
                  "✅ Hasta 2 revisiones incluidas",
                  "✅ Hosting y dominio por 1 año",
                  "✅ Soporte técnico incluido",
                  "✅ Botón WhatsApp integrado",
                  "✅ Diseño adaptado a tu oficio (plomero, carpintero, etc.)",
                ],
                bestFor: [
                  "Plomeros",
                  "Electricistas",
                  "Carpinteros",
                  "Albañiles",
                  "Mecánicos",
                ],
              },

              // 💎 TARJETA 2 (más popular)
              {
                name: "Básico Plus",
                price: "$1999",
                featured: true,
                description: "Mini tienda con carrito vía WhatsApp. Lista en 5 días.",
                features: [
                  "✅ Diseño web avanzado",
                  "✅ Hasta 5 páginas (Inicio, Productos, Contacto, etc.)",
                  "✅ Carrito de compras vía WhatsApp (hasta 30 productos)",
                  "✅ Integración redes sociales y mapa de ubicación",
                  "✅ Optimización SEO completa",
                  "✅ Hosting y dominio por 1 año",
                  "✅ Galería de productos o trabajos",
                  "✅ Soporte 24/7",
                  "✅ 3 revisiones incluidas",
                ],
                bestFor: ["Tiendas locales", "Emprendedores", "Talleres", "Consultorios"],
              },

              // 🧭 TARJETA 3 (agenda de citas)
              {
                name: "Agenda Digital",
                price: "$999",
                description: "Ideal para profesionales que necesitan agendar citas online.",
                features: [
                  "✅ Página web profesional con agenda de citas sencilla",
                  "✅ Hasta 5 secciones (Inicio, Servicios, Agenda, Contacto, Políticas)",
                  "✅ Sistema de reservas online con confirmación por WhatsApp",
                  "✅ Integración con Google Maps",
                  "✅ Hosting y dominio por 1 año",
                  "✅ SEO básico + diseño responsivo",
                  "✅ Formularios de contacto personalizados",
                  "✅ Soporte técnico por 1 año",
                ],
                bestFor: [
                  "Salones de belleza",
                  "Dentistas",
                  "Barberías",
                  "Spa locales",
                  "Tatuadores",
                ],
              },
            ].map((plan, index) => (
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

                <h3 className="text-2xl font-bold mb-2 text-white">
                  {plan.name}
                </h3>
                <p className="text-gray-400 mb-4 text-sm">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-5xl font-bold text-[#00D9FF]">
                    {plan.price}
                  </span>
                  <span className="text-gray-400 ml-2">MX</span>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-400 mb-2">Ideal para:</p>
                  <div className="flex flex-wrap gap-1">
                    {plan.bestFor.map((profession, i) => (
                      <span
                        key={i}
                        className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs"
                      >
                        {profession}
                      </span>
                    ))}
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* ✅ Botón Comprar */}
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
                      background: plan.featured
                        ? "linear-gradient(to right, #00D9FF, #FF6B35)"
                        : "linear-gradient(to right, #22d3ee, #60a5fa)",
                      color: "white",
                      "&:hover": {
                        opacity: 0.9,
                        transform: "translateY(-2px)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    ¡Comprar Plan!
                  </Button>
                </Box>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Preguntas frecuentes */}
      <Box
        sx={{ maxWidth: "650px", mx: "auto", mt: 10, mb: 10 }}
        data-aos="fade-up"
      >
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
          question="⏳ ¿En cuánto tiempo estará lista mi página?"
          answer="Generalmente entre 3 y 5 días hábiles después de recibir la información de tu negocio."
        />
        <Accordion
          question="💳 ¿El precio incluye dominio y hosting?"
          answer="Sí, todos los planes incluyen dominio y hosting por 1 año."
        />
        <Accordion
          question="🔄 ¿Puedo actualizar mi página en el futuro?"
          answer="Sí, puedes ampliar secciones o migrar fácilmente a un plan superior."
        />
        <Accordion
          question="📱 ¿Mi página se verá bien en celulares?"
          answer="Sí, todos nuestros diseños son 100% responsivos y adaptables."
        />
        <Accordion
          question="🔧 ¿Para qué profesiones son estos planes?"
          answer="Perfectos para oficios, tiendas locales, consultorios, salones de belleza y todo tipo de pequeños negocios."
        />
      </Box>
    </>
  );
}
