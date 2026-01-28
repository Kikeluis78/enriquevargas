/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { HOME_PHRASES } from "../utils/constants";

// Material UI
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

// Framer Motion
import { motion } from "framer-motion";

import Biografia from "../Components/Biografia";

const phrases = [
  "Desarrollo de sitios web modernos 🌐",
  "Transformo ideas en experiencias digitales 📱",
];

export default function Home() {
  const [currentText, setCurrentText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    let isMounted = true;
    const delay = (ms) => new Promise((res) => setTimeout(res, ms));

    const write = async () => {
      while (isMounted) {

        const text = HOME_PHRASES[phraseIndex];

      

        for (let i = 0; i <= text.length; i++) {
          if (!isMounted) return;
          setCurrentText(text.slice(0, i));
          await delay(90);
        }

        await delay(1300);

        setCurrentText("");
        await delay(300);

        setPhraseIndex((p) => (p + 1) % HOME_PHRASES.length);

        setPhraseIndex((p) => (p + 1) % phrases.length);

      }
    };

    write();
    return () => (isMounted = false);
  }, [phraseIndex]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      id="home"
      sx={{
        pt: { xs: 10, md: 14 },
        pb: 10,
        minHeight: "100vh",          
        display: "flex",
        alignItems: "center",        
        backgroundColor: "#0a0a0a",
      }}
    >
      <Container maxWidth="xl">    
        
        <div className="grid md:grid-cols-2 gap-16 items-center w-full">

          {/* ------------ TEXTO ------------ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white text-left md:text-left">
              Diseño Web &<br />
              <span className="text-[#00D9FF]">Android</span>
            </h1>

            <p className="text-xl text-gray-400 mb-8 max-w-md">
              "Cambiando la manera de hacer Publicidad en México".
            </p>

            <p className="text-lg text-[#00D9FF] mb-8 font-mono h-7">
              {currentText}
              <span className="animate-pulse">|</span>
            </p>
          </motion.div>

          {/* ------------ IMAGEN ------------ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full flex justify-center"
          >
            <div className="relative z-10 bg-gradient-to-br from-[#00D9FF]/20 to-[#FF6B35]/20 p-4 rounded-3xl backdrop-blur-sm border border-[#00D9FF]/30 w-full max-w-lg">
              <img
                src="https://images.pexels.com/photos/7988086/pexels-photo-7988086.jpeg"
                alt="Diseñador trabajando"
                className="rounded-2xl w-full h-auto shadow-2xl"
                loading="lazy"
              />
            </div>

            <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-[#00D9FF]/20 rounded-full blur-3xl"></div>
          </motion.div>

        </div>

        {/* ------------ BIO ------------ */}
        <Box sx={{ mt: 16 }}>
          <Biografia />
        </Box>

      </Container>
    </Box>
  );
}
