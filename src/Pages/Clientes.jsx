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
      category: "Diseño Web",
      image:
        "https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "App Fitness Tracker",
      category: "Android App",
      image:
        "https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Restaurant Booking",
      category: "Diseño Web",
      image:
        "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Banking App",
      category: "Android App",
      image:
        "https://images.pexels.com/photos/6120214/pexels-photo-6120214.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Portfolio Creativo",
      category: "Diseño Web",
      image:
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Social Media App",
      category: "Android App",
      image:
        "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
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
              Echa Un Vistazo   <span className="text-[#00D9FF]">A mi Trabajo</span>
            </h2>
            <p className="text-gray-400 text-lg">
               Mis primeros Clientes que Confiaron en mi Capacidad. 
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {proyectos.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
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
        </Container>
      </section>
    </>
  );
}
