import { useEffect, useState } from "react";
import Logo from "../Components/Logo";

// ✅ Material UI
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";
import Paper from "@mui/material/Paper";

// ✅ Constantes afuera → NO causan warnings de ESLint
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

  // ✅ EFECTO CORREGIDO — SIN WARNINGS
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
  }, [onComplete]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #111827, #1f2937, #000)",
        color: "white",
      }}
    >
      {/* Logo */}
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
        {/* Título principal */}
        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            animation: "pulse 2s infinite",
            background: "linear-gradient(to right, #facc15, #f472b6, #a855f7)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 0 12px rgba(0,0,0,0.5)",
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

        {/* Imagen rotativa */}
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
            transition: "0.5s",
            "&:hover": {
              transform: "scale(1.08)",
            },
          }}
        >
          <img
            src={images[imageIndex]}
            alt="Tecnología"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              transition: "opacity 0.7s",
            }}
          />
        </Paper>

        {/* Barra de progreso */}
        <Box
          sx={{
            width: { xs: "75%", md: "45%" },
            mt: 2,
          }}
        >
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{
              height: 12,
              borderRadius: 6,
              backgroundColor: "#374151",
              "& .MuiLinearProgress-bar": {
                background:
                  "linear-gradient(to right, #ec4899, #22d3ee, #3b82f6)",
              },
            }}
          />
        </Box>

        {/* Porcentaje */}
        <Typography
          sx={{
            mt: 1,
            fontWeight: 700,
            fontSize: { xs: "1.5rem", md: "2rem" },
            background: "linear-gradient(to right,#22d3ee,#3b82f6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: "pulse 2s infinite",
          }}
        >
          {progress}%
        </Typography>

        {/* Frase dinámica */}
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
