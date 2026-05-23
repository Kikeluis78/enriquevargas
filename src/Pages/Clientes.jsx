import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Container from "@mui/material/Container";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const tools = ["🎨", "💻", "📱", "⚡", "🚀", "🛠️"];

function ModalRemodelacion({ onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center px-4"
        style={{ backdropFilter: "blur(8px)", backgroundColor: "rgba(0,0,0,0.85)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Íconos flotantes */}
        {tools.map((tool, i) => (
          <motion.span
            key={i}
            className="absolute text-2xl pointer-events-none select-none"
            style={{ left: `${8 + i * 15}%`, top: `${10 + (i % 3) * 25}%` }}
            animate={{ y: [0, -14, 0], rotate: [0, 8, -8, 0] }}
            transition={{ duration: 2.5 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
          >
            {tool}
          </motion.span>
        ))}

        <motion.div
          className="relative bg-[#0d1117] border border-[#00D9FF]/30 rounded-3xl p-8 md:p-12 max-w-lg w-full text-center shadow-2xl"
          style={{ boxShadow: "0 0 60px rgba(0,217,255,0.15)" }}
          initial={{ scale: 0.85, opacity: 0, y: 40 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Personaje */}
          <motion.div
            className="text-7xl mb-4 select-none"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            👷‍♂️
          </motion.div>

          {/* Badge */}
          <span className="inline-block bg-[#00D9FF]/10 border border-[#00D9FF]/40 text-[#00D9FF] text-xs font-bold px-4 py-1 rounded-full mb-4 tracking-widest uppercase">
            Actualizando portafolio
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3 leading-tight">
            Estamos construyendo<br />
            <span className="text-[#00D9FF]">algo increíble</span>
          </h2>

          <p className="text-gray-400 text-base mb-2 leading-relaxed">
            Nuestro portafolio de clientes está en proceso de actualización .
          </p>
          <p className="text-gray-500 text-sm mb-6">
            Mientras tanto, puedes ver un demo en vivo de nuestro trabajo o contactarnos directamente.
          </p>

          {/* Demos */}
          <div className="flex justify-center mb-6">
            <a
              href="https://podologos-ten.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full font-bold text-[#FF6B35] border border-[#FF6B35]/50 hover:bg-[#FF6B35]/10 transition text-sm"
            >
              🦶 Demo
              
            </a>
          </div>

          {/* Barra de progreso */}
          <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden mb-8">
            <motion.div
              className="h-full bg-gradient-to-r from-[#00D9FF] to-[#FF6B35] rounded-full"
              animate={{ width: ["30%", "85%", "30%"] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/contacto"
              className="px-6 py-3 rounded-full font-bold text-black bg-gradient-to-r from-[#00D9FF] to-[#FF6B35] hover:opacity-90 transition"
            >
              📞 Contáctame
            </Link>
            <button
              onClick={onClose}
              className="px-6 py-3 rounded-full font-bold text-[#00D9FF] border border-[#00D9FF]/50 hover:bg-[#00D9FF]/10 transition"
            >
              Ver de todas formas
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Clientes() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const proyectos = [
    {
      title: "Pizza Express MX",
      category: "Diseño Web",
      description: "Sitio web profesional para pizzería con menú digital y pedidos por WhatsApp.",
      image: "/capturas/Pizza Express MX.png",
      url: "https://pizzerias-eight.vercel.app/",
    },
    {
      title: "Tarjeta Digital Oficios",
      category: "Tarjeta Digital",
      description: "Presencia online profesional para plomeros, electricistas y más oficios.",
      image: "/capturas/tarjeta-oficios.png",
      url: "https://web-oficios.vercel.app/",
    },
    {
      title: "CRM Pagos",
      category: "Sistema Web",
      description: "Sistema de gestión de pagos y clientes para negocios.",
      image: "/capturas/CRM Pagos.png",
      url: "https://coy-rho.vercel.app/",
    },
    {
      title: "Sistema Universal de Citas",
      category: "Diseño Web",
      description: "Plataforma de agendamiento de citas para cualquier giro de negocio.",
      image: "/capturas/Sistema Universal de Citas.png",
      url: "https://podologos-ten.vercel.app/",
    },
    {
      title: "Mini App World",
      category: "App",
      description: "Aplicación publicada en World — plataforma global de mini apps.",
      image: "/capturas/pagina1.png",
      url: "https://world.org/mini-app?app_id=app_975134dd4e44462f3a9d043e50afac5e&path=&draft_id=meta_d7511074a6b5fdb80815b92a5a85d8b3",
    },
  ];

  return (
    <>
      <section id="clientes" className="py-20 px-6 bg-[#0A0A0A]">
        <Container>
          <div data-aos="fade-up" className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Echa Un Vistazo <span className="text-[#00D9FF]">A Mi Trabajo</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Proyectos realizados con <span className="text-[#00D9FF] font-semibold">PWA</span> y <span className="text-[#FF6B35] font-semibold">aplicaciones Android</span>. Soluciones <span className="text-[#FFE45E] font-semibold">modernas y escalables</span>.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {proyectos.map((project, index) => {
              const Card = (
                <>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-[#00D9FF] text-sm font-semibold mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {project.description}
                    </p>
                  </div>
                </>
              );

              return project.url ? (
                <a
                  key={index}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 block"
                >
                  {Card}
                </a>
              ) : (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  {Card}
                </div>
              );
            })}
          </div>

          <div className="mt-16 p-8 bg-gradient-to-r from-[#00D9FF]/10 to-[#FF6B35]/10 rounded-2xl border border-[#00D9FF]/30 text-center">
            <p className="text-2xl font-bold text-white mb-2">
              ¿Tu negocio podría ser el próximo?
            </p>
            <p className="text-gray-400 mb-6">
              Cada proyecto que ves aquí empezó con una llamada. <span className="text-[#FFE45E] font-semibold">El tuyo puede ser el siguiente.</span>
            </p>
            <Link
              to="/contacto"
              className="inline-block px-8 py-3 rounded-full font-bold text-black bg-gradient-to-r from-[#00D9FF] to-[#FF6B35] hover:opacity-90 transition"
            >
              🚀 Quiero mi sitio web
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}