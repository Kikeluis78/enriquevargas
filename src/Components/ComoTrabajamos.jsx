import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Zap, TrendingUp, Clock, MessageCircle } from "lucide-react";

export default function ComoTrabajamos() {
  const beneficios = [
    {
      icon: <Zap size={48} />,
      titulo: "Menú digital",
      descripcion: "Consulta los productos desde el navegador",
      stat: "Menú",
      color: "#00D9FF",
    },
    {
      icon: <MessageCircle size={48} />,
      titulo: "Todo por WhatsApp",
      descripcion: "Prepara un mensaje con el pedido para enviarlo por WhatsApp",
      stat: "Mensaje",
      color: "#FFE45E",
    },
    {
      icon: <TrendingUp size={48} />,
      titulo: "Carrito de compras",
      descripcion: "Agrega productos y revisa tu selección",
      stat: "Carrito",
      color: "#C084FC",
    },
    {
      icon: <Clock size={48} />,
      titulo: "Revisión del pedido",
      descripcion: "Revisa los productos antes de continuar a WhatsApp",
      stat: "Resumen",
      color: "#FF6B35",
    },
  ];

  return (
    <section className="py-20 px-3 md:px-6 bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A] relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00D9FF]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FF6B35]/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Hero Section */}
        <Motion.div
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
            Explora un menú online con carrito de compras. La selección se prepara
            como mensaje para WhatsApp; el usuario revisa y envía el mensaje.
            La atención y confirmación del pedido corresponden al negocio.
          </p>
        </Motion.div>

        {/* Beneficios Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {beneficios.map((beneficio, index) => (
            <Motion.div
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
            </Motion.div>
          ))}
        </div>

        {/* Cómo Funciona - Simplificado */}
        <Motion.div
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
                desc: "El usuario envía el mensaje desde WhatsApp; el negocio debe confirmar el pedido",
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
        </Motion.div>
      </div>
    </section>
  );
}
