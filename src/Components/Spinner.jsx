import { useEffect, useState } from "react";
import Logo from "../Components/Logo";

function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [phraseIndex, setPhraseIndex] = useState(0);

  const images = [
    "/img/Flutter.png",
    "/img/Vite.png",
    "/img/css.png",
    "/img/Android.png",
    "/img/Firebase.png",
    "/img/python.png",
  ];

  const phrases = [
    " interfaces modernas ⚡",
    " UI increíble 🎨",
    "Desarrollo Android  📱",
    "Optimizacion 💻",
    "Rendimiento 🚀",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((old) => {
        if (old >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return old + 1;
      });
    }, 50);

    const imageInterval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % images.length);
    }, 1500);

    const phraseInterval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearInterval(imageInterval);
      clearInterval(phraseInterval);
    };
  }, [onComplete, images.length, phrases.length]);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <Logo />

      <div className=" px-4 flex flex-col items-center justify-center h-screen">
        {/* Título principal */}
        <h1
          className="text-center font-extrabold animate-pulse mb-12 md:mb-16
                     text-4xl sm:text-5xl md:text-7xl lg:text-8xl
                     bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-500
                     bg-clip-text text-transparent drop-shadow-lg"
        >
          Diseño y Desarrollo Web
        </h1>

        {/* Imagen rotativa */}
        <div className="mt-4 w-28 h-28 md:w-36 md:h-36 transition-transform duration-500 transform hover:scale-105">
          <img
            src={images[imageIndex]}
            alt="Tecnología"
            className="w-full h-full object-contain transition-opacity duration-700"
          />
        </div>

        {/* Barra de progreso */}
        <div className="w-3/4 md:w-1/2 h-5 bg-gray-700 rounded-full mt-10 overflow-hidden shadow-lg">
          <div
            className="h-full bg-gradient-to-r from-pink-400 via-cyan-400 to-blue-600 transition-all duration-100"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Porcentaje */}
        <span
          className="mt-3 text-xl md:text-2xl font-bold
                       bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent
                       animate-pulse"
        >
          {progress}%
        </span>

        {/* Frases motivacionales */}
        <p
          className="mt-6 text-center text-lg md:text-xl font-semibold transition-colors duration-700"
          style={{
            color:
              phraseIndex % 3 === 0
                ? "#22d3ee"
                : phraseIndex % 3 === 1
                ? "#60a5fa"
                : "#a78bfa",
          }}
        >
          {phrases[phraseIndex]}
        </p>
      </div>
    </div>
  );
}

export default LoadingScreen;
