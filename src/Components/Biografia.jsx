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
                  md:max-w-2xl">
                <p className="text-base md:text-lg text-gray-300 mb-5 leading-relaxed md:leading-loose">
                  Soy{" "}
                  <span className="text-[#00D9FF] font-semibold">
                    Enrique Vargas
                  </span>
                  , diseñador web y desarrollador Android con más de 8 años de
                  experiencia creando soluciones digitales innovadoras.
                </p>

                <p className="text-base md:text-lg text-gray-300 mb-5 leading-relaxed md:leading-loose">
                  He trabajado con empresas de diversos sectores, desde startups
                  hasta corporaciones, ayudándoles a materializar su visión
                  digital con enfoque en rendimiento y experiencia de usuario.
                </p>

                <p className="text-base md:text-lg text-gray-300 leading-relaxed md:leading-loose">
                  Especializado en{" "}
                  <span className="text-[#FF6B35] font-semibold">
                    diseño web responsivo
                  </span>
                  ,{" "}
                  <span className="text-[#FF6B35] font-semibold">
                    aplicaciones Android nativas
                  </span>{" "}
                  y <span className="text-[#FF6B35] font-semibold">UX/UI</span>.
                </p>

                {/* BOTÓN */}
                <div className="mt-6">
                  <Button
                    onClick={() => setModalOpen(true)}
                    sx={{
                      fontWeight: 700,
                      fontSize: "1rem",
                      textTransform: "none",
                      color: "#facc15",
                      borderBottom: "2px solid transparent",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        color: "#60a5fa",
                        borderBottom: "2px solid #60a5fa",
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    Misión{" "}
                    <span style={{ color: "#60a5fa", marginLeft: 4 }}>
                      y Visión
                    </span>
                  </Button>
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
