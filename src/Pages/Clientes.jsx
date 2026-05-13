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
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const proyectos = [
    {
      title: "E-Commerce Fashion",
      category: "PWA",
      description: "Tienda online responsiva con carrito de compras",
      image:
        "https://images.unsplash.com/photo-1460925895917-adf4e565db18?auto=format&fit=crop&w=800&q=80",
      url: "https://vercel.com",
    },
    {
      title: "App Fitness Tracker",
      category: "Android App",
      description: "Aplicación nativa para seguimiento de ejercicio",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
      url: "https://vercel.com",
    },
    {
      title: "Restaurant Booking",
      category: "PWA",
      description: "Sistema de reservas para restaurantes",
      image:
        "https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=800",
      url: "https://vercel.com",
    },
    {
      title: "Restaurant Booking",
      category: "Diseño Web",
      description: "Landing page moderna para restaurantes",
      image:
        "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Banking App",
      category: "Android App",
      description: "Aplicación bancaria segura y rápida",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
      url: "https://vercel.com",
    },
    {
      title: "Portfolio Creativo",
      category: "PWA",
      description: "Portafolio interactivo para diseñadores",
      image:
        "https://images.pexels.com/photos/6120214/pexels-photo-6120214.jpeg?auto=compress&cs=tinysrgb&w=800",
      url: "https://vercel.com",
    },
    {
      title: "Portfolio Creativo",
      category: "Diseño Web",
      description: "Sitio web creativo y minimalista",
      image:
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Social Media App",
      category: "Android App",
      description: "Red social con mensajería en tiempo real",
      image:
        "https://images.unsplash.com/photo-1611532736579-6b16e2b50449?auto=format&fit=crop&w=800&q=80",
      url: "https://vercel.com",
    },
  ];

  return (
    <>
      {showModal && <ModalRemodelacion onClose={() => setShowModal(false)} />}
      <section id="clientes" className="py-20 px-6 bg-[#0A0A0A]">
        <Container>
          <div data-aos="fade-up" className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Echa Un Vistazo <span className="text-[#00D9FF]">A Mi Trabajo</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Proyectos realizados con PWA y aplicaciones Android. Soluciones modernas y escalables.
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

          <div className="mt-16 p-6 bg-[#1A1A1A] rounded-2xl border border-gray-800">
            <p className="text-gray-400 text-center">
              <span className="text-[#00D9FF] font-semibold">Nota:</span> Las URLs de los proyectos
              serán reemplazadas con enlaces reales cuando estén disponibles.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}