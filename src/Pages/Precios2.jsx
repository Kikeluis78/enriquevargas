import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ShoppingCart,
  Globe,
  CreditCard,
  Smartphone,
  Package,
  ShieldCheck,
  Palette,
  Users,
} from "lucide-react";
import Accordion from "../Components/Accordion";
import AOS from "aos";
import "aos/dist/aos.css";

function Precios2() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Configuración de planes (para evitar repetir código)
  const planes = [
    {
      id: 1,
      titulo: "Tienda Online",
      icono: "🛒",
      precio: "Desde $3,999 MXN",
      gradiente: "from-cyan-400 via-blue-400 to-pink-400",
      sombra: "shadow-[0_0_25px_rgba(0,255,200,0.3)]",
      borde: "border-teal-400/40",
      descripcion: "Todo lo que necesitas para vender en línea de manera profesional y segura.",
      features: [
        { icon: <Globe className="w-5 h-5 text-blue-400" />, text: "Dominio y hosting confiable" },
        { icon: <ShoppingCart className="w-5 h-5 text-green-400" />, text: "Carrito de compras integrado" },
        { icon: <CreditCard className="w-5 h-5 text-yellow-400" />, text: "Pasarela de pago segura (PayPal, tarjetas, etc.)" },
        { icon: <Smartphone className="w-5 h-5 text-pink-400" />, text: "Diseño 100% responsive" },
        { icon: <Package className="w-5 h-5 text-purple-400" />, text: "Gestión de inventario y productos" },
        { icon: <ShieldCheck className="w-5 h-5 text-teal-400" />, text: "Seguridad SSL y protección de datos" },
        { icon: <Users className="w-5 h-5 text-orange-400" />, text: "Respuesta más rápida para tus clientes" },
        { icon: <Palette className="w-5 h-5 text-pink-400" />, text: "Diseño moderno y personalizado" },
      ],
      boton: "¡Comprar Plan!",
    },
    {
      id: 2,
      titulo: "Página Web Personalizada",
      icono: "💻",
      precio: "Desde $3,999 MXN",
      gradiente: "from-orange-400 via-red-400 to-pink-500",
      sombra: "shadow-[0_0_20px_rgba(255,0,150,0.3)]",
      borde: "border-pink-400/40",
      descripcion: "Soluciones web a medida, con funcionalidades avanzadas y diseño único.",
      features: [
        { icon: <Palette className="w-5 h-5 text-pink-400" />, text: "Diseño totalmente personalizado" },
        { icon: <Globe className="w-5 h-5 text-blue-400" />, text: "Optimización SEO avanzada" },
        { icon: <Smartphone className="w-5 h-5 text-green-400" />, text: "Compatible con todos los dispositivos" },
        { icon: <Users className="w-5 h-5 text-orange-400" />, text: "Integración con CRM y marketing" },
        { icon: <ShieldCheck className="w-5 h-5 text-purple-400" />, text: "Seguridad avanzada y backups automáticos" },
        { icon: <Package className="w-5 h-5 text-yellow-400" />, text: "Funcionalidades especiales según tu negocio" },
      ],
      boton: "¡Comprar Plan!",
    },
    {
      id: 3,
      titulo: "Aplicaciones Android",
      icono: "📱",
      precio: "Desde $3,999 MXN",
      gradiente: "from-cyan-400 via-yellow-200 to-pink-500",
      sombra: "shadow-[0_0_15px_rgba(0,200,255,0.3)]",
      borde: "border-cyan-400/40",
      descripcion: "Desarrollamos apps Android que se integran con tu tienda o página personalizada.",
      features: [],
      boton: "¡Cotizar o Comprar!",
    },
  ];

  return (
    <div className="min-h-screen bg-black flex flex-col items-center px-6 py-10 space-y-12">
      {/* Botones superiores */}
      <div
        className="flex flex-col sm:flex-row justify-center gap-4"
        data-aos="fade-down"
      >
        <Link
          to="/precios"
          className="px-4 py-2 sm:px-5 sm:py-2 md:px-6 md:py-3 rounded-lg bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-400 text-black font-bold shadow-lg hover:opacity-95 transition text-center"
        >
          🌐 Página Básica
        </Link>
        <Link
          to="/precios2"
          className="px-4 py-2 sm:px-5 sm:py-2 md:px-6 md:py-3 rounded-lg bg-gradient-to-r from-pink-400 via-yellow-400 to-blue-500 text-black font-bold shadow-lg hover:opacity-95 transition text-center"
        >
          🚀 Precios Pro
        </Link>
      </div>

      {/* Cards dinámicas */}
      {planes.map((plan) => (
        <div
          key={plan.id}
          className={`bg-gray-900/80 backdrop-blur-md rounded-2xl ${plan.sombra} p-6 sm:p-8 max-w-md sm:max-w-lg md:max-w-xl w-full text-center border ${plan.borde} transition-transform hover:scale-105`}
          data-aos="fade-up"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-2xl sm:text-3xl md:text-4xl">{plan.icono}</span>
            <h2
              className={`text-2xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-r ${plan.gradiente} bg-clip-text text-transparent`}
            >
              {plan.titulo}
            </h2>
          </div>

          <p className="text-gray-300 text-sm sm:text-base mb-6 leading-relaxed">
            {plan.descripcion}
          </p>

          {plan.features.length > 0 && (
            <ul className="text-left space-y-3 text-gray-200 text-sm sm:text-base">
              {plan.features.map((f, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  {f.icon}
                  {f.text}
                </li>
              ))}
            </ul>
          )}

          {/* Precio */}
          <div className="mt-8">
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-teal-400">
              {plan.precio}
            </p>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">
              *Precio único, sin costos ocultos
            </p>
          </div>

          {/* Botón contratar */}
          <Link
            to="/contacto"
            aria-label={`Contratar ${plan.titulo}`}
            className="mt-6 block w-full px-4 py-2 sm:px-5 sm:py-2 md:px-6 md:py-3 bg-gradient-to-r from-cyan-400 via-yellow-200 to-pink-500 hover:opacity-95 text-black font-semibold rounded-xl shadow-lg shadow-blue-300/30 transition"
          >
            {plan.boton}
          </Link>
        </div>
      ))}

      {/* Preguntas Frecuentes */}
      <div
        className="max-w-2xl w-full mx-auto"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-6 text-center">
          <span className="text-2xl sm:text-3xl md:text-4xl">❓</span>
          <h2 className="text-xl sm:text-3xl md:text-3xl font-bold text-amber-300">
            Preguntas
          </h2>
          <p className="text-xl sm:text-3xl md:text-3xl font-bold text-blue-300">
            Frecuentes
          </p>
        </div>

        <Accordion
          question="⏳ ¿Cuánto tiempo tarda en estar lista mi tienda online?"
          answer="Depende de la complejidad, generalmente entre 10 y 15 días hábiles."
        />
        <Accordion
          question="💳 ¿Puedo aceptar varios métodos de pago?"
          answer="Sí, integraciones con tarjetas, PayPal, transferencia bancaria y más."
        />
        <Accordion
          question="📱 ¿Se verá bien en móviles y tablets?"
          answer="Totalmente, todo es responsive y adaptable a cualquier dispositivo."
        />
        <Accordion
          question="🔄 ¿Puedo actualizar productos o funcionalidades?"
          answer="Sí, tendrás acceso al panel de administración para cambios ilimitados."
        />
        <Accordion
          question="🛠️ ¿Incluye soporte o mantenimiento?"
          answer="Sí, incluimos un periodo de soporte inicial. Posteriormente podemos acordar un plan de mantenimiento mensual."
        />
      </div>
    </div>
  );
}

export default Precios2;
