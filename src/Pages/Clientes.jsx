import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Container from "@mui/material/Container";
import ModalConstruccion from "../Components/ModalConstruccion";

export default function Clientes() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const proyectos = [
    {
      title: "E-Commerce Fashion",
      category: "PWA",
      description: "Tienda online responsiva con carrito de compras",
      image: "https://images.unsplash.com/photo-1460925895917-adf4e565db18?auto=format&fit=crop&w=800&q=80",
      url: "https://vercel.com", // Reemplazar con URL real
    },
    {
      title: "App Fitness Tracker",
      category: "Android App",
      description: "Aplicación nativa para seguimiento de ejercicio",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
      url: "https://vercel.com", // Reemplazar con URL real
    },
    {
      title: "Restaurant Booking",
      category: "PWA",
      description: "Sistema de reservas para restaurantes",
      image: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&w=800&q=80",
      url: "https://vercel.com", // Reemplazar con URL real
    },
    {
      title: "Banking App",
      category: "Android App",
      description: "Aplicación bancaria segura y rápida",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
      url: "https://vercel.com", // Reemplazar con URL real
    },
    {
      title: "Portfolio Creativo",
      category: "PWA",
      description: "Portafolio interactivo para diseñadores",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
      url: "https://vercel.com", // Reemplazar con URL real
    },
    {
      title: "Social Media App",
      category: "Android App",
      description: "Red social con mensajería en tiempo real",
      image: "https://images.unsplash.com/photo-1611532736579-6b16e2b50449?auto=format&fit=crop&w=800&q=80",
      url: "https://vercel.com", // Reemplazar con URL real
    },
  ];

  return (
    <>
      <ModalConstruccion />

      {/* ✅ Sección de Proyectos */}
      <section id="clientes" className="py-20 px-6 bg-[#0A0A0A]">
        <Container>
          <div data-aos="fade-up" className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Echa Un Vistazo <span className="text-[#00D9FF]">A Mi Trabajo</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Proyectos realizados con PWA y Aplicaciones Android. Soluciones modernas y escalables.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {proyectos.map((project, index) => (
              <a
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 block"
              >
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
                  <p className="text-gray-300 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex items-center text-[#FF6B35] font-semibold text-sm">
                    Ver Proyecto <span className="ml-2">→</span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* 📝 Nota sobre URLs */}
          <div className="mt-16 p-6 bg-[#1A1A1A] rounded-2xl border border-gray-800">
            <p className="text-gray-400 text-center">
              <span className="text-[#00D9FF] font-semibold">Nota:</span> Las URLs de los proyectos serán reemplazadas con los enlaces reales de Vercel cuando estén disponibles.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
