/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// ✅ Material UI
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

// ✅ Accordion personalizado
import Accordion from "../Components/Accordion";

import AOS from "aos";
import "aos/dist/aos.css";
import { WHATSAPP_NUMBER } from "../utils/constants";

export default function Precios() {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  // Planes Express
  const planesExpress = [
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
        "✅ Diseño adaptado a tu oficio",
        "✅ 1 revisión incluida",
      ],
      bestFor: ["Plomeros", "Electricistas", "Carpinteros", "Albañiles", "Mecánicos"],
    },
    {
      name: "Básico Plus",
      price: "$3,999",
      featured: true,
      description: "Mini tienda con carrito vía WhatsApp. Lista en 7 días.",
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
      bestFor: ["Pizzerías", "Cualquier negocio con servicio a Domicilio"],
    },
    {
      name: "Agenda Digital",
      price: "$1499",
      description: "Ideal para profesionales que necesitan agendar citas online.",
      features: [
        "✅ Página web profesional con agenda de citas sencilla",
        "✅ Hasta 4 secciones (Inicio, Servicios, Agenda, Contacto)",
        "✅ Sistema de reservas online con confirmación por WhatsApp",
        "✅ Integración con Google Maps",
        "✅ Hosting y dominio por 1 año",
        "✅ SEO básico + diseño responsivo",
        "✅ Formularios de contacto personalizados",
        "✅ Soporte técnico por 1 año",
        "✅ 2 revisiones incluidas",
      ],
      bestFor: ["Salones de belleza", "Dentistas", "Barberías", "Spa locales", "Tatuadores"],
    },
  ];

  // Planes Premium
  const planesPremium = [
    {
      name: "E-Commerce PRO",
      price: "$9,499",
      description:
        "Tienda online completa con carrito de compras, pasarelas de pago y panel de administración.",
      features: [
        "✅ Diseño profesional con catálogo ilimitado",
        "✅ Carrito de compras integrado (Stripe / PayPal)",
        "✅ Panel de gestión de productos y pedidos",
        "✅ Integración con WhatsApp para atención al cliente",
        "✅ SEO avanzado + Google Analytics",
        "✅ Hosting y dominio por 1 año",
        "✅ Soporte técnico 24/7",
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
      price: "$13,999",
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

  const renderPlanCard = (plan, index) => {
    const whatsappMsg = `Hola, me interesa el plan *${plan.name}* de ${plan.price} MX`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMsg)}`;

    return (
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

        <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
        <p className="text-gray-400 mb-4 text-sm">{plan.description}</p>

        <div className="mb-6">
          <span className="text-5xl font-bold text-[#00D9FF]">{plan.price}</span>
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

        <Box sx={{ mt: 6, textAlign: "center" }}>
          <Button
            component="a"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              mt: 3,
              px: 4,
              py: 1.5,
              width: "100%",
              borderRadius: 2,
              fontWeight: 700,
              background: plan.featured
                ? "linear-gradient(to right, #00D9FF, #FF6B35)"
                : "linear-gradient(to right, #22d3ee, #60a5fa)",
              color: "white",
              "&:hover": {
                opacity: 0.9,
                transform: "translateY(-2px)",
                boxShadow: "0 10px 20px rgba(0, 217, 255, 0.3)",
              },
              transition: "all 0.3s ease",
            }}
          >
            Contratar Ahora
          </Button>
        </Box>
      </motion.div>
    );
  };

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
              <span className="text-[#00D9FF]">Nuestros Planes</span>
            </h2>
            <p className="text-gray-400 text-center mb-12 text-lg">
              Elige el plan perfecto para tu negocio 🚀
            </p>
          </motion.div>

          {/* ✅ TABS NEON */}
          <Box sx={{ display: "flex", justifyContent: "center", mb: 8 }}>
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              sx={{
                "& .MuiTabs-indicator": {
                  backgroundColor: "#00D9FF",
                  height: 3,
                  boxShadow: "0 0 10px #00D9FF",
                },
              }}
            >
              <Tab
                label="Planes Express"
                sx={{
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: activeTab === 0 ? "#00D9FF" : "#9ca3af",
                  textTransform: "none",
                  px: 4,
                  "&:hover": { color: "#00D9FF" },
                  transition: "all 0.3s ease",
                }}
              />
              <Tab
                label="Planes Premium"
                sx={{
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: activeTab === 1 ? "#00D9FF" : "#9ca3af",
                  textTransform: "none",
                  px: 4,
                  "&:hover": { color: "#00D9FF" },
                  transition: "all 0.3s ease",
                }}
              />
            </Tabs>
          </Box>

          {/* ✅ CONTENIDO DE TABS */}
          {activeTab === 0 && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-gray-400 text-center mb-12 text-lg">
                  Diseños listos para impulsar tu negocio en menos de una semana 🚀
                </p>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {planesExpress.map(renderPlanCard)}
                </div>
              </motion.div>
            </>
          )}

          {activeTab === 1 && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-gray-400 text-center mb-12 text-lg">
                  Soluciones integrales con Hosting y Dominio por 1 año
                </p>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {planesPremium.map(renderPlanCard)}
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
                      <li>✅ Diseños modernos</li>
                      <li>✅ Hosting + Dominio + soporte por 1 año</li>
                    </ul>
                    <Box sx={{ mt: 5 }}>
                      <Button
                        component="a"
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                          "Hola, me interesa una Aplicación Android"
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          px: 5,
                          py: 1.5,
                          borderRadius: 2,
                          fontWeight: 700,
                          background: "linear-gradient(to right, #00D9FF, #FF6B35)",
                          color: "white",
                          "&:hover": { opacity: 0.9, transform: "translateY(-2px)" },
                          transition: "all 0.3s ease",
                        }}
                      >
                        Solicitar Cotización
                      </Button>
                    </Box>
                  </div>

                  <div className="flex-1 text-center">
                    <p className="text-gray-400 text-sm">Contáctanos para ver ejemplos de proyectos.</p>
                  </div>
                </motion.div>
              </motion.div>
            </>
          )}
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
