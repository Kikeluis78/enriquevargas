import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { ShoppingCart, Zap, TrendingUp, Clock, MessageCircle, CheckCircle2 } from "lucide-react";

function useCountdown(targetDate) {
  const getTime = () => {
    const diff = new Date(targetDate) - new Date();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
    };
  };
  const [time, setTime] = useState(getTime);
  useEffect(() => {
    const id = setInterval(() => setTime(getTime()), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default function ComoTrabajamos() {
  const countdown = useCountdown("2026-06-15T23:59:59");
  const beneficios = [
    {
      icon: <Zap size={48} />,
      titulo: "Pedidos Instantáneos",
      descripcion: "Tus clientes ordenan en segundos desde su celular",
      stat: "3x más rápido",
      color: "#00D9FF",
    },
    {
      icon: <MessageCircle size={48} />,
      titulo: "Todo por WhatsApp",
      descripcion: "Recibes pedidos completos directo a tu WhatsApp Business",
      stat: "Sin apps extras",
      color: "#FFE45E",
    },
    {
      icon: <TrendingUp size={48} />,
      titulo: "Aumenta Tus Ventas",
      descripcion: "Clientes ordenan 24/7 aunque tu local esté cerrado",
      stat: "+40% ventas",
      color: "#C084FC",
    },
    {
      icon: <Clock size={48} />,
      titulo: "Ahorra Tiempo",
      descripcion: "No más errores en pedidos telefónicos, todo llega por escrito",
      stat: "Cero errores",
      color: "#FF6B35",
    },
  ];

  return (
    <section className="py-20 px-3 md:px-6 bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A] relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00D9FF]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FF6B35]/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block px-6 py-2 bg-[#00D9FF]/20 border border-[#00D9FF] rounded-full mb-6">
            <span className="text-[#00D9FF] font-bold">⚡ Sistema de Pedidos Inteligente</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white">Recibe Pedidos por</span>{" "}
            <span className="text-[#25D366]">WhatsApp</span>
            <br />
            <span className="text-[#FFE45E]">Sin Complicaciones</span>
          </h2>
          
          <p className="text-gray-300 text-xl max-w-3xl mx-auto mb-8">
            Tu menú online + carrito de compras + pedidos automáticos a WhatsApp.
            <br />
            <span className="text-[#FFE45E] font-semibold">Más ventas, menos errores, clientes felices.</span>
          </p>
        </motion.div>

        {/* Beneficios Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {beneficios.map((beneficio, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div 
                className="relative p-6 rounded-2xl bg-[#0A0A0A] border-2 transition-all duration-300 h-full hover:scale-105"
                style={{
                  borderColor: beneficio.color,
                  boxShadow: `0 0 20px ${beneficio.color}33`,
                }}
              >
                {/* Stat Badge */}
                <div 
                  className="absolute -top-3 -right-3 px-3 py-1 rounded-full text-xs font-bold text-black"
                  style={{ background: beneficio.color }}
                >
                  {beneficio.stat}
                </div>

                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto"
                  style={{
                    background: `${beneficio.color}22`,
                    boxShadow: `0 0 30px ${beneficio.color}44`,
                  }}
                >
                  <span style={{ color: beneficio.color }}>{beneficio.icon}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 text-center">{beneficio.titulo}</h3>
                <p className="text-gray-400 text-sm text-center">{beneficio.descripcion}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cómo Funciona - Simplificado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl text-white font-bold text-center mb-12">
            ¿Cómo <span className="text-[#00D9FF]">Funciona?</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                numero: "1",
                titulo: "Cliente Elige",
                desc: "Navega tu menú, agrega productos al carrito",
                icon: "🛒",
              },
              {
                numero: "2",
                titulo: "Confirma Pedido",
                desc: "Revisa su orden y da clic en 'Ordenar por WhatsApp'",
                icon: "✅",
              },
              {
                numero: "3",
                titulo: "Tú Recibes",
                desc: "Pedido completo llega a tu WhatsApp listo para preparar",
                icon: "📱",
              },
            ].map((paso, i) => (
              <div key={i} className="relative">
                {i < 2 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-1 bg-gradient-to-r from-[#00D9FF] to-transparent"></div>
                )}
                <div className="text-center">
                  <div className="text-6xl mb-4">{paso.icon}</div>
                  <div className="text-[#00D9FF] text-4xl font-bold mb-2">{paso.numero}</div>
                  <h4 className="text-xl font-bold text-white mb-2">{paso.titulo}</h4>
                  <p className="text-gray-400 text-sm">{paso.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Banner de Oferta Especial - Mejorado */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative p-4 md:p-12 rounded-3xl overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #00D9FF22, #FF6B3522)",
            border: "3px solid #00D9FF",
            boxShadow: "0 0 60px rgba(0, 217, 255, 0.4)",
          }}
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00D9FF] opacity-10 rounded-full blur-3xl animate-pulse"></div>

          <div className="relative z-10">
            {/* Badge Animado */}
            <div className="text-center mb-6">
              <div className="inline-block px-6 py-3 bg-gradient-to-r from-[#FF6B35] to-[#FF2CD1] text-white font-bold rounded-full mb-4 animate-pulse shadow-lg">
                🔥 OFERTA ESPECIAL - SOLO RESTAURANTES
              </div>
            </div>

            {/* Título Principal */}
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 text-center leading-tight">
              Sistema de Pedidos por WhatsApp
              <br />
              <span className="text-[#00D9FF]">Listo en 7 Días</span>
            </h3>

            {/* Precio Destacado */}
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="text-center">
                <span className="text-gray-400 text-xl line-through block">Antes $4,499</span>
              </div>
              <div className="text-center">
                <div className="text-6xl md:text-7xl font-black text-[#00D9FF] drop-shadow-[0_0_30px_rgba(0,217,255,0.8)]">
                  $2,999
                </div>
                <span className="text-gray-300 text-xl">MX - Pago único</span>
              </div>
            </div>

            {/* Incluye - Grid */}
            <div className="grid md:grid-cols-2 gap-4 mb-8 max-w-3xl mx-auto">
              {[
                "✅ Menú digital completo",
                "✅ Carrito de compras inteligente",
                "✅ Hasta 30 productos",
                "✅ Pedidos automáticos a WhatsApp",
                "✅ Hosting + Dominio 1 año",
                "✅ Soporte técnico 24/7",
                "✅ Actualizaciones gratis",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-gray-200 bg-[#0A0A0A]/50 p-3 rounded-lg">
                  <CheckCircle2 size={20} className="text-[#00D9FF] flex-shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button
                component={Link}
                to="/contacto"
                sx={{
                  px: { xs: 4, sm: 10 },
                  py: 2.5,
                  borderRadius: 3,
                  fontWeight: 700,
                  fontSize: "1.2rem",
                  whiteSpace: "nowrap",
                  background: "linear-gradient(45deg, #00D9FF, #FF6B35)",
                  color: "white",
                  boxShadow: "0 0 40px rgba(0, 217, 255, 0.6)",
                  "&:hover": {
                    transform: "translateY(-4px) scale(1.02)",
                    boxShadow: "0 15px 50px rgba(0, 217, 255, 0.7)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                ⚡ ¡Lo Quiero Ya!
              </Button>

              <Button
                component="a"
                href="https://pizzerias-eight.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  px: { xs: 4, sm: 10 },
                  py: 2.5,
                  borderRadius: 3,
                  fontWeight: 700,
                  fontSize: "1.2rem",
                  whiteSpace: "nowrap",
                  background: "linear-gradient(45deg, #00D9FF, #FF6B35)",
                  color: "white",
                  boxShadow: "0 0 20px rgba(0, 217, 255, 0.4)",
                  "&:hover": {
                    background: "linear-gradient(45deg, #00C4E6, #E55A30)",
                    transform: "translateY(-4px)",
                    boxShadow: "0 15px 50px rgba(0, 217, 255, 0.7)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                👀 Ver Demo
              </Button>
            </div>

            {/* Urgencia */}
            <div className="text-center">
              <p className="text-[#FFE45E] font-bold text-lg mb-3">
                ⏰ Oferta válida solo hasta el 15 de Junio 2026
              </p>
              <div className="flex justify-center gap-4">
                {[
                  { label: "Días", value: countdown.days },
                  { label: "Horas", value: countdown.hours },
                  { label: "Min", value: countdown.minutes },
                  { label: "Seg", value: countdown.seconds },
                ].map(({ label, value }) => (
                  <div key={label} className="flex flex-col items-center bg-black/40 border border-[#00D9FF]/30 rounded-xl px-4 py-2 min-w-[64px]">
                    <span className="text-3xl font-black text-[#00D9FF]">
                      {String(value).padStart(2, "0")}
                    </span>
                    <span className="text-xs text-gray-400 font-semibold">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
