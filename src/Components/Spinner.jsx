import { useEffect, useRef, useState } from "react";
import Logo from "../Components/Logo";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";
import Paper from "@mui/material/Paper";

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

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [phraseIndex, setPhraseIndex] = useState(0);

  const onCompleteCalled = useRef(false);

  // Guardamos intervalos PARA QUE NO SE REINICIEN EN CADA RENDER
  const progressInterval = useRef(null);
  const imageInterval = useRef(null);
  const phraseInterval = useRef(null);

  useEffect(() => {
    // Progreso estable
    progressInterval.current = setInterval(() => {
      setProgress((p) => (p < 100 ? p + 1 : 100));
    }, 50);

    // Rota imágenes
    imageInterval.current = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % images.length);
    }, 1500);

    // Rota frases
    phraseInterval.current = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 2000);

    return () => {
      clearInterval(progressInterval.current);
      clearInterval(imageInterval.current);
      clearInterval(phraseInterval.current);
    };
  }, []);

  // Detecta final SIN cortar los intervalos
  useEffect(() => {
    if (progress === 100 && !onCompleteCalled.current) {
      onCompleteCalled.current = true;
      setTimeout(() => {
        onComplete?.();
      }, 500);
    }
  }, [progress, onComplete]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #111827, #1f2937, #000)",
        color: "white",
      }}
    >
      <Box sx={{ p: 3 }}>
        <Logo />
      </Box>

      <Box
        sx={{
          height: "80vh",
          px: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          gap: 4,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            background: "linear-gradient(to right, #facc15, #f472b6, #a855f7)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: {
              xs: "2rem",
              sm: "3rem",
              md: "4.5rem",
              lg: "5rem",
            },
            mb: 4,
          }}
        >
          Diseño y Desarrollo Web
        </Typography>

        <Paper
          elevation={10}
          sx={{
            width: { xs: 110, md: 150 },
            height: { xs: 110, md: 150 },
            borderRadius: "50%",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: 2,
            background: "rgba(255,255,255,0.05)",
          }}
        >
          <img
            src={images[imageIndex]}
            alt="Tecnología"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </Paper>

        <Box sx={{ width: { xs: "75%", md: "45%" } }}>
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{
              height: 12,
              borderRadius: 6,
              backgroundColor: "#374151",
            }}
          />
        </Box>

        <Typography
          sx={{
            mt: 1,
            fontWeight: 700,
            fontSize: { xs: "1.5rem", md: "2rem" },
            background: "linear-gradient(to right,#22d3ee,#3b82f6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {progress}%
        </Typography>

        <Typography
          sx={{
            mt: 2,
            fontWeight: 600,
            fontSize: { xs: "1.1rem", md: "1.3rem" },
            transition: "color 0.5s ease",
            color:
              phraseIndex % 3 === 0
                ? "#22d3ee"
                : phraseIndex % 3 === 1
                ? "#60a5fa"
                : "#a78bfa",
          }}
        >
          {phrases[phraseIndex]}
        </Typography>
      </Box>
    </Box>
  );
}
