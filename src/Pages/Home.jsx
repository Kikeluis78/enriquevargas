import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Biografia from "../Components/Biografia";
import Logo from "../Components/Logo";

const phrases = [
  "Desarrollo de sitios web modernos 🌐",
  "Aplicaciones Android 📱",
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

    const typeEffect = async () => {
      while (isMounted) {
        const phrase = phrases[phraseIndex];

        // escribe
        for (let i = 0; i <= phrase.length; i++) {
          if (!isMounted) return;
          setCurrentText(phrase.substring(0, i));
          await delay(120 + Math.random() * 40);
        }

        await delay(1500); // mantener texto completo

        // desaparecer de golpe
        setCurrentText("");
        await delay(400);

        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    };

    typeEffect();

    return () => {
      isMounted = false;
    };
  }, [phraseIndex]);

  return (
    <main className="flex-grow w-full">
      <Logo />

      {/* BANNER */}
      <section
        className="relative min-h-[50vh] md:min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/banner 1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 py-10 h-full">
          {/* Título principal */}
          <h1
            data-aos="fade-down"
            className="text-center font-extrabold leading-tight mt-12 drop-shadow-md"
          >
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-yellow-400 mt-16">
              Web's que impactan  💻
            </span>
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-cyan-400 mt-8">
              App's que enamoran   📱
            </span>
            <span className="block text-2xl sm:text-3xl md:text-4xl mt-4">❤️</span>
          </h1>

          {/* Texto animado */}
          <p
            className="text-lg sm:text-xl md:text-2xl font-mono mt-8"
          >
            <span>{currentText}</span>
            <span className="animate-pulse">|</span>
          </p>

          {/* Subtítulo */}
          <h2
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-center text-xl sm:text-2xl md:text-2xl lg:text-3xl text-yellow-300 font-semibold mt-22"
          >
            Revolucionando la manera de hacer <span className="text-cyan-400">publicidad</span> en México
          </h2>
        </div>
      </section>

      {/* Biografía */}
      <Biografia />
    </main>
  );
}
