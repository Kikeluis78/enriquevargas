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
<<<<<<< HEAD
      category: "PWA",
      description: "Tienda online responsiva con carrito de compras",
      image: "https://images.unsplash.com/photo-1460925895917-adf4e565db18?auto=format&fit=crop&w=800&q=80",
      url: "https://vercel.com", // Reemplazar con URL real
=======
      category: "Diseño Web",
      image:
        "https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=800",
>>>>>>> 667f29b77d5f478d3953a3784b3b9355338575ad
    },
    {
      title: "App Fitness Tracker",
      category: "Android App",
<<<<<<< HEAD
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
=======
      image:
        "https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Restaurant Booking",
      category: "Diseño Web",
      image:
        "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=800",
>>>>>>> 667f29b77d5f478d3953a3784b3b9355338575ad
    },
    {
      title: "Banking App",
      category: "Android App",
<<<<<<< HEAD
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
=======
      image:
        "https://images.pexels.com/photos/6120214/pexels-photo-6120214.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Portfolio Creativo",
      category: "Diseño Web",
      image:
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
>>>>>>> 667f29b77d5f478d3953a3784b3b9355338575ad
    },
    {
      title: "Social Media App",
      category: "Android App",
<<<<<<< HEAD
      description: "Red social con mensajería en tiempo real",
      image: "https://images.unsplash.com/photo-1611532736579-6b16e2b50449?auto=format&fit=crop&w=800&q=80",
      url: "https://vercel.com", // Reemplazar con URL real
=======
      image:
        "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
>>>>>>> 667f29b77d5f478d3953a3784b3b9355338575ad
    },
  ];

  return (
    <>
      <ModalConstruccion />

<<<<<<< HEAD
=======

>>>>>>> 667f29b77d5f478d3953a3784b3b9355338575ad
      {/* ✅ Sección de Proyectos */}
      <section id="clientes" className="py-20 px-6 bg-[#0A0A0A]">
        <Container>
          <div data-aos="fade-up" className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
<<<<<<< HEAD
              Echa Un Vistazo <span className="text-[#00D9FF]">A Mi Trabajo</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Proyectos realizados con PWA y Aplicaciones Android. Soluciones modernas y escalables.
=======
              Echa Un Vistazo   <span className="text-[#00D9FF]">A mi Trabajo</span>
            </h2>
            <p className="text-gray-400 text-lg">
               Mis primeros Clientes que Confiaron en mi Capacidad. 
>>>>>>> 667f29b77d5f478d3953a3784b3b9355338575ad
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {proyectos.map((project, index) => (
<<<<<<< HEAD
              <a
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 block"
=======
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
>>>>>>> 667f29b77d5f478d3953a3784b3b9355338575ad
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
<<<<<<< HEAD
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
=======
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-[#00D9FF] text-sm font-semibold mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
>>>>>>> 667f29b77d5f478d3953a3784b3b9355338575ad
        </Container>
      </section>
    </>
  );
}
