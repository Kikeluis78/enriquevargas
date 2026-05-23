/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Material UI
import Container from "@mui/material/Container";

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
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-3xl" />
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

              {/* 🟦 CONTENEDOR */}
              <div className="bg-[#0A0A0A] w-full p-4 md:p-8 rounded-3xl border border-gray-800 shadow-xl md:max-w-2xl">
                <p className="text-base md:text-lg mb-5 leading-relaxed md:leading-loose">
                  <span className="text-white font-semibold">Mucho gusto, soy </span>
                  <span className="text-[#00D9FF] font-bold">Enrique Vargas</span>
                  <span className="text-white font-semibold">.<br />No soy una agencia enorme… y esa es precisamente </span>
                  <span className="text-[#FFE45E] font-bold">mi ventaja.</span>
                </p>

                <p className="text-base md:text-lg text-gray-300 mb-5 leading-relaxed md:leading-loose">
                  Trabajo directamente contigo y con{" "}
                  <span className="text-[#FF6B35] font-semibold">negocios reales</span>{" "}
                  que necesitan soluciones prácticas, modernas y funcionales. Mi objetivo es ayudarte a{" "}
                  <span className="text-[#00D9FF] font-semibold">competir al nivel de grandes empresas</span>
                  , pero sin pagar los precios exagerados de una agencia.
                </p>

                <p className="text-base md:text-lg text-gray-300 mb-5 leading-relaxed md:leading-loose">
                  Gracias a la{" "}
                  <span className="text-[#C084FC] font-semibold">tecnología e IA actuales</span>
                  , puedo desarrollar sitios web, sistemas de pedidos y soluciones digitales de forma{" "}
                  <span className="text-[#FF6B35] font-semibold">rápida, profesional</span>{" "}
                  y a un{" "}
                  <span className="text-[#FFE45E] font-bold">precio justo.</span>
                </p>

                <p className="text-base md:text-lg mb-5 leading-relaxed md:leading-loose">
                  <span className="text-white font-semibold">¿Tienes dudas o una idea para tu negocio?<br /></span>
                  <span className="text-[#00D9FF] font-semibold">Contáctame. </span>
                  <span className="text-gray-300">La asesoría es </span>
                  <span className="text-[#FFE45E] font-bold">gratuita y personalizada.</span>
                </p>

                {/* BOTÓN */}
                <div className="w-full flex justify-center mt-8">
                  <button
                    onClick={() => setModalOpen(true)}
                    className="px-6 py-3 rounded-full font-semibold text-black bg-gradient-to-r from-[#00D9FF] to-[#FF6B35] shadow-lg transition-all duration-300 hover:opacity-90 hover:-translate-y-1"
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