/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ModalPromocion from "../Components/ModalPromocion";
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
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Productos principales (soluciones personalizables)
  const planesExpress = [
    {
      name: "Sistema de pedidos desde Telegram",
      price: "Desde $999",
      description: "Una solución de pedidos que permite a tus clientes acceder a tu catálogo desde Telegram y realizar su pedido de forma sencilla.",
      features: [
        "✓ Acceso desde Telegram",
        "✓ Catálogo digital personalizado",
        "✓ Categorías de productos",
        "✓ Carrito de compra",
        "✓ Hasta 30 productos en la configuración inicial",
        "✓ Personalización con logo, colores y datos del negocio",
        "✓ Configuración inicial incluida",
        "✓ Enlace directo al bot",
        "✓ Código QR de acceso al bot",
        "✓ Diseño adaptable a celular",
        "✓ Soporte por WhatsApp",
      ],
      plus: ["QR directo al bot", "Configuración inicial incluida"],
      clarification: "El precio base incluye la configuración inicial de hasta 30 productos. Más productos, integraciones o funciones especiales se cotizan por separado.",
      bestFor: ["Taquerías", "Torterías", "Cocinas pequeñas", "Micro negocios", "Negocios de comida"],
      hasDemo: true,
      demoUrl: "https://t.me/pizzas_test525_bot",
    },
    {
      name: "Tarjeta Digital",
      price: "$699",
      description: "Tu información profesional o de negocio en un solo lugar, lista para compartir con tus clientes.",
      features: [
        "✓ Diseño personalizado con tu información",
        "✓ Botón directo a WhatsApp",
        "✓ Teléfono y correo de contacto",
        "✓ Enlaces a redes sociales",
        "✓ Ubicación o mapa del negocio",
        "✓ Código QR para compartir",
        "✓ Opción para guardar el contacto",
        "✓ Diseño adaptable a celular y computadora",
        "✓ Configuración inicial incluida",
        "✓ Soporte por WhatsApp",
      ],
      plus: ["QR para compartir", "Guardar contacto"],
      clarification: "Incluye configuración inicial con la información proporcionada por el cliente.",
      bestFor: ["Plomeros", "Electricistas", "Carpinteros", "Albañiles", "Mecánicos"],
      hasDemo: true,
      demoUrl: "https://web-oficios.vercel.app/",
    },
    {
      name: "Agenda Digital",
      price: "Desde $1,499",
      description: "Una agenda digital para que tus clientes consulten tus servicios y soliciten o reserven una cita de forma sencilla.",
      features: [
        "✓ Diseño personalizado para tu negocio",
        "✓ Información de servicios",
        "✓ Horarios de atención",
        "✓ Sistema de solicitud o reserva de citas",
        "✓ Información de contacto",
        "✓ Código QR directo a la agenda",
        "✓ Configuración inicial incluida",
        "✓ Diseño adaptable a celular y computadora",
        "✓ Soporte por WhatsApp",
      ],
      plus: ["QR directo para reservar", "Configuración inicial incluida"],
      clarification: "Funciones avanzadas, automatizaciones o integraciones adicionales se cotizan por separado.",
      bestFor: ["Dentistas", "Podólogos", "Barberías", "Spa", "Tatuadores"],
      hasDemo: true,
      demoUrl: "https://podologos-ten.vercel.app/",
    },
    {
      name: "Menú Digital con Pedidos a WhatsApp",
      price: "Desde $3,999",
      featured: true,
      description: "Menú digital personalizado para que tus clientes consulten tus productos, armen su pedido y envíen el detalle directamente a tu WhatsApp.",
      features: [
        "✓ Menú digital personalizado",
        "✓ Categorías de productos",
        "✓ Carrito de compra",
        "✓ Pedido detallado enviado a WhatsApp",
        "✓ Hasta 50 productos en la configuración inicial",
        "✓ Personalización con logo, colores y datos del negocio",
        "✓ Código QR para mesas, mostrador o material impreso",
        "✓ Configuración inicial incluida",
        "✓ Diseño adaptable a celular y computadora",
        "✓ Sin comisión de nuestra parte por cada pedido",
        "✓ Soporte por WhatsApp",
      ],
      plus: ["QR listo para tu negocio", "Sin comisión nuestra por pedido"],
      clarification: "El precio base incluye la configuración inicial de hasta 50 productos. Catálogos mayores, integraciones o funciones especiales se cotizan por separado.",
      bestFor: ["Pizzerías", "Restaurantes", "Taquerías", "Negocios de comida"],
      hasDemo: true,
      demoUrl: "https://oliver-pizzas.vercel.app/",
    },
  ];

  // Proyectos especiales (desarrollo de mayor alcance)
  const planesPremium = [
    {
      name: "E-Commerce PRO",
      price: "Desde $9,499",
      description: "Tienda en línea personalizada para presentar tus productos y comenzar a vender por internet.",
      features: [
        "✓ Diseño personalizado",
        "✓ Catálogo organizado por categorías",
        "✓ Carrito de compra",
        "✓ Proceso de compra",
        "✓ Hasta 30 productos en la configuración inicial",
        "✓ Diseño adaptable a celular y computadora",
        "✓ Configuración inicial incluida",
        "✓ Integración de información y contacto del negocio",
        "✓ Dominio por 1 año",
        "✓ Hosting por 1 año",
        "✓ Soporte por WhatsApp",
      ],
      plus: ["Dominio + hosting por 1 año incluidos"],
      clarification: "El precio base contempla hasta 30 productos en la configuración inicial. Catálogos mayores, pasarelas de pago, envíos, inventario, automatizaciones o integraciones especiales pueden modificar el precio final.",
      bestFor: ["Tiendas físicas", "Emprendedores", "Marcas locales"],
      hasDemo: false,
    },
    {
      name: "Web Corporativa",
      price: "Desde $9,999",
      featured: true,
      description: "Sitio web profesional para presentar tu empresa, servicios e información de contacto con una imagen sólida en internet.",
      features: [
        "✓ Diseño personalizado",
        "✓ Hasta 5 secciones o páginas principales",
        "✓ Presentación de empresa y servicios",
        "✓ Información de contacto",
        "✓ Enlaces a redes sociales",
        "✓ Formulario de contacto",
        "✓ Diseño adaptable a celular y computadora",
        "✓ Configuración inicial incluida",
        "✓ Dominio por 1 año",
        "✓ Hosting por 1 año",
        "✓ Soporte por WhatsApp",
      ],
      plus: ["Dominio + hosting por 1 año incluidos"],
      clarification: "Secciones, funcionalidades e integraciones adicionales se cotizan según las necesidades del proyecto.",
      bestFor: ["Empresas", "Agencias", "Consultorías", "Startups"],
      hasDemo: false,
    },
    {
      name: "Web + App Android",
      price: "Desde $13,999",
      description: "Solución web con experiencia adaptada para Android, pensada para proyectos que necesitan presencia web y acceso desde dispositivos móviles.",
      features: [
        "✓ Desarrollo web personalizado",
        "✓ Diseño adaptable a celular y computadora",
        "✓ Experiencia adaptada para dispositivos Android cuando sea técnicamente viable",
        "✓ Configuración inicial incluida",
        "✓ Integración entre la experiencia web y móvil",
        "✓ Dominio por 1 año",
        "✓ Hosting por 1 año",
        "✓ Soporte por WhatsApp",
        "✓ Preparación según el alcance definido del proyecto",
      ],
      plus: ["Web + experiencia Android", "Dominio y hosting por 1 año"],
      clarification: "El alcance de la aplicación depende de las funcionalidades requeridas. Integraciones o desarrollo móvil especializado se cotizan por separado.",
      bestFor: ["Negocios en crecimiento", "Profesionales", "Tiendas digitales"],
      hasDemo: false,
    },
  ];

  const renderPlanCard = (plan, index) => {
    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className={`relative min-w-0 p-6 sm:p-8 rounded-3xl ${
          plan.featured
            ? "bg-linear-to-br from-[#00D9FF]/20 to-[#FF6B35]/20 border-2 border-[#00D9FF]"
            : "bg-[#0A0A0A] border border-gray-800"
        }`}
      >
        {plan.featured && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#00D9FF] text-black px-4 py-1 rounded-full text-sm font-semibold whitespace-nowrap">
            Más Popular
          </div>
        )}

        <h3 className="text-2xl md:text-xl lg:text-2xl font-bold mb-2 text-white">{plan.name}</h3>
        <div className="mb-6">
          {plan.price.startsWith("Desde ") && (
            <span className="block text-sm text-gray-400 mb-1">Desde</span>
          )}
          <div className="flex flex-wrap items-baseline gap-x-2">
            <span className="text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#00D9FF]">
              {plan.price.replace(/^Desde /, "")}
            </span>
            <span className="text-gray-400">MXN</span>
          </div>
        </div>

        <p className="text-gray-400 mb-4 text-sm">{plan.description}</p>

        {plan.hasDemo && (
          <div className="mb-4">
            <span className="inline-block px-3 py-1 text-xs font-bold text-black bg-[#FFE45E] rounded-full">
              Demo disponible
            </span>
          </div>
        )}

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

        <p className="text-sm font-semibold text-gray-300 mb-3">Qué incluye:</p>
        <ul className="space-y-3 mb-4">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-gray-300 text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mb-4 border-l-2 border-[#00D9FF]/50 pl-3">
          <p className="text-sm font-semibold text-[#00D9FF] mb-1">PLUS incluido</p>
          <p className="text-gray-300 text-sm leading-relaxed">{plan.plus.join(" + ")}</p>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed">{plan.clarification}</p>

        <Box sx={{ mt: 6, textAlign: "center" }}>
          {plan.hasDemo && (
            <Button
              component="a"
              href={plan.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                mb: 2,
                width: "100%",
                borderRadius: 2,
                fontWeight: 600,
                border: "2px solid #00D9FF",
                color: "#00D9FF",
                "&:hover": { bgcolor: "rgba(0, 217, 255, 0.1)" },
              }}
            >
              Ver Demo
            </Button>
          )}
          <Button
            component={Link}
            to="/contacto"
            sx={{
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
            Consultar
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-[#00D9FF]">
              Mis precios
            </h2>
            <p className="text-gray-400 text-center mb-12 text-lg">
              Elige la opción que mejor se adapte a <span className="text-[#FFE45E] font-semibold">tu negocio</span>
            </p>
          </motion.div>

          {/* ✅ SELECTOR SEGMENTADO MODERNO */}
          <div className="flex justify-center mb-8 px-0 sm:px-4">
            <div className="flex bg-[#0A0A0A] border border-gray-700 rounded-xl p-1 w-full max-w-md">
              <button
                onClick={() => setActiveTab(0)}
                role="tab"
                aria-selected={activeTab === 0}
                aria-label="Precios accesibles"
                className={`flex-1 py-3 px-2 sm:px-6 rounded-lg font-semibold text-xs min-[375px]:text-sm sm:text-base transition-all duration-300 ease-in-out whitespace-normal min-[375px]:whitespace-nowrap ${
                  activeTab === 0
                    ? "bg-[#00D9FF] text-black shadow-lg shadow-[#00D9FF]/50"
                    : "text-gray-400 hover:text-gray-300"
                }`}
              >
                Precios accesibles
              </button>
              <button
                onClick={() => setActiveTab(1)}
                role="tab"
                aria-selected={activeTab === 1}
                aria-label="Precios Premium"
                className={`flex-1 py-3 px-2 sm:px-6 rounded-lg font-semibold text-xs min-[375px]:text-sm sm:text-base transition-all duration-300 ease-in-out whitespace-normal min-[375px]:whitespace-nowrap ${
                  activeTab === 1
                    ? "bg-[#00D9FF] text-black shadow-lg shadow-[#00D9FF]/50"
                    : "text-gray-400 hover:text-gray-300"
                }`}
              >
                Precios Premium
              </button>
            </div>
          </div>

          {/* ✅ CONTENIDO DE TABS */}
          {activeTab === 0 && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-gray-400 text-center mb-12 text-lg">
                  Productos ya desarrollados que <span className="text-[#00D9FF] font-semibold">personalizo</span> con tu logo, colores e información.
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
                  Proyectos de mayor alcance. Según tus necesidades, pueden requerir <span className="text-[#FFE45E] font-semibold">cotización adicional</span>.
                </p>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {planesPremium.map(renderPlanCard)}
                </div>

                {/* 🧩 Bloque Especial - Aplicaciones Android (Cotización Personalizada) */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="max-w-2xl mx-auto mt-20 bg-gradient-to-br from-[#0A0A0A] to-[#0F1419] border border-[#00D9FF]/40 rounded-2xl p-6 sm:p-8 md:p-10"
                >
                  {/* Contenedor flex vertical */}
                  <div className="text-center">
                    {/* Título */}
                    <h3 className="text-2xl min-[375px]:text-3xl sm:text-4xl font-bold text-[#00D9FF] mb-3">
                      Aplicaciones Android
                    </h3>

                    {/* Descripción principal */}
                    <p className="text-gray-300 text-base sm:text-lg mb-4 leading-relaxed">
                      Desarrollo de aplicaciones adaptadas a las necesidades de tu proyecto.
                    </p>

                    {/* Texto secundario */}
                    <p className="text-gray-400 text-sm sm:text-base mb-6">
                      Las funciones, integraciones y complejidad se definen según tus requerimientos.
                    </p>

                    {/* Sección de cotización personalizada */}
                    <div className="bg-[#0A0A0A]/60 border border-gray-700/50 rounded-xl p-5 sm:p-6 mb-6">
                      <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider mb-2">
                        Precio
                      </p>
                      <p className="text-[19px] min-[375px]:text-2xl sm:text-3xl font-bold text-[#FFE45E] mb-1">
                        Cotización personalizada
                      </p>
                      <p className="text-gray-500 text-xs sm:text-sm">
                        Según funcionalidades e integraciones
                      </p>
                    </div>

                    {/* Botón CTA */}
                    <Box sx={{ textAlign: "center" }}>
                      <Button
                        component={Link}
                        to="/contacto"
                        sx={{
                          px: { xs: 4, sm: 6 },
                          py: 1.75,
                          width: { xs: "100%", sm: "auto" },
                          borderRadius: 2,
                          fontWeight: 700,
                          fontSize: { xs: "0.95rem", sm: "1rem" },
                          background: "linear-gradient(to right, #00D9FF, #FF6B35)",
                          color: "white",
                          boxShadow: "0 0 20px rgba(0, 217, 255, 0.3)",
                          "&:hover": {
                            background: "linear-gradient(to right, #00C4E6, #E55A30)",
                            transform: "translateY(-2px)",
                            boxShadow: "0 10px 30px rgba(0, 217, 255, 0.4)",
                          },
                          transition: "all 0.3s ease",
                        }}
                      >
                        Cotiza tu aplicación
                      </Button>
                    </Box>
                  </div>
                </motion.div>
              </motion.div>
            </>
          )}

          {/* 📝 Aclaración comercial discreta */}
          <div className="mt-16 pt-8 border-t border-gray-800/50">
            <p className="text-center text-gray-400 text-sm leading-relaxed max-w-3xl mx-auto px-4">
              Los precios mostrados corresponden a la configuración base de cada solución. Funciones, integraciones o requerimientos adicionales se cotizan por separado.
            </p>
            <p className="text-center text-gray-400 text-sm leading-relaxed max-w-3xl mx-auto px-4 mt-3">
              Renovaciones, mantenimiento y servicios posteriores al periodo incluido se cotizan por separado.
            </p>
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
          answer="El tiempo de entrega se define según el alcance y la información necesaria para configurar tu solución."
        />
        <Accordion
          question="💳 ¿El precio incluye dominio y hosting?"
          answer="E-Commerce PRO, Web Corporativa y Web + App Android incluyen dominio y hosting por 1 año. En las demás soluciones, las condiciones se confirman antes de contratar. Renovaciones, mantenimiento y servicios posteriores al periodo incluido se cotizan por separado."
        />
        <Accordion
          question="🔄 ¿Puedo actualizar mi página en el futuro?"
          answer="Sí. Las modificaciones posteriores, funciones nuevas e integraciones se evalúan y cotizan por separado."
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
      <ModalPromocion />
    </>
  );
}
