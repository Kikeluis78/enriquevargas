/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Material UI
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

// Framer Motion
import { motion } from "framer-motion";
import ModalMisionVision from "./ModalMisionVision";

export default function Biografia() {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <>
      <section className="py-20 px-6 bg-[#1A1A1A]" id="biografia">
        <Container maxWidth="xl" disableGutters>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-14 items-start"
          >
            {/* 📷 FOTO */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <div className="relative group w-60 md:w-80">
                <img
                  src="/fotomia.png"
                  alt="Foto de Enrique Vargas"
                  className="rounded-3xl w-full shadow-2xl border-4 border-[#00D9FF]/30 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-3xl"></div>
              </div>
            </motion.div>

            {/* 🧠 TEXTO */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              className="text-center md:text-left"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Sobre <span className="text-[#00D9FF]">Mí</span>
              </h2>


      {/* 🟦 CONTENEDOR DE TEXTO RESPONSIVE */}
<div
  className="
    bg-[#0A0A0A]
    w-full
    p-4 md:p-8
    rounded-3xl
    border border-gray-800
    shadow-xl
    mx-0
    md:max-w-2xl
  "
>
  <p className="text-base md:text-lg text-gray-300 mb-5 leading-relaxed md:leading-loose">
    Hola, soy 
    <span className="text-[#00D9FF] font-semibold"> Enrique Vargas</span>.<br/>Trabajo con entusiasmo y dedicación para ayudarte a construir tu presencia digital desde cero.
    Ofrezco soluciones digitales innovadoras para pequeños y grandes negocios, enfocadas en crear una imagen sólida y conectar con tus usuarios.
    No importa si tu presupuesto es grande o pequeño: lo importante es que tu idea llegue a miles de personas en internet.
  </p>

  <p className="text-base md:text-lg text-gray-300 mb-5 leading-relaxed md:leading-loose">
    Mi experiencia en publicidad impresa y trato directo con clientes me ha llevado a transformar la manera de comunicar en el mundo digital.
    Hoy combino esa visión tradicional con estrategias modernas para crear publicidad efectiva, clara y atractiva.
    Lo más importante es generar una verdadera conexión entre tus usuarios y tu negocio.
    <br />
    <span className="text-[#00D9FF] font-semibold">“Platícame tu idea y juntos la pondremos en línea 🚀”</span>
  </p>
 <span className="text-[rgb(251,255,0)] font-semibold"> Te Ofresco:</span>
  <ul className="text-base md:text-lg text-gray-300 leading-relaxed md:leading-loose list-disc pl-6 space-y-2">
  <li><span className="text-[#FF6B35] font-semibold">Diseño 100% responsivo</span></li>
  <li><span className="text-[#FF6B35] font-semibold">Aplicaciones Android</span></li>
  <li><span className="text-[#FF6B35] font-semibold">Precios Accesibles sin perder Calidad</span></li>
   <li><span className="text-[#FF6B35] font-semibold">Asesoria Gratuita.</span></li>
</ul>



                {/* BOTÓN */}
             <div className="w-full flex justify-center mt-8">
<button
onClick={() => setModalOpen(true)}
className="
px-6
py-3
rounded-full
font-semibold
text-base
text-black
bg-gradient-to-r from-[#00D9FF] to-[#FF6B35]
shadow-lg
transition-all
duration-300
hover:opacity-90
hover:-translate-y-1
"
>
Misión <span className="ml-1">y Visión</span>
</button>


                </div>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      <ModalMisionVision
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
