
import { Link } from "react-router-dom";

// ✅ Material UI
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function NoFound() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #111827, #000)",
        color: "white",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          textAlign: "center",
          py: 8,
        }}
      >
        {/* Número grande 404 */}
        <Typography
          variant="h1"
          sx={{
            fontWeight: 800,
            fontSize: {
              xs: "5rem",
              sm: "7rem",
              md: "9rem",
            },
            background: "linear-gradient(to right, #facc15, #22d3ee)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 0 30px rgba(0,0,0,0.4)",
          }}
        >
          404
        </Typography>

        {/* Texto principal */}
        <Typography
          variant="h4"
          sx={{
            color: "green",
            fontWeight: 700,
            mt: 2,
            mb: 2,
            fontSize: {
              xs: "1.6rem",
              md: "4rem",
            },
          }}
        >
          ¡Ups! Página no encontrada
        </Typography>

        {/* Descripción */}
        <Typography
          sx={{
            color: "#9ca3af",
            maxWidth: 500,
            mx: "auto",
            fontSize: {
              xs: "1rem",
              md: "1.2rem",
            },
            mb: 5,
            lineHeight: 1.6,
          }}
        >
          La página que estás buscando no existe ó esta temparamente fuera de Servicio.  
          <br/>
         " No te preocupes, podemos volver al inicio".
        </Typography>

        {/* Imagen opcional */}
        <Box
          component="img"
          src="https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg"
          alt="404"
          sx={{
            width: "100%",
            maxWidth: "420px",
            mx: "auto",
            borderRadius: 3,
            mb: 4,
            boxShadow: "0px 0px 30px rgba(255,255,255,0.2)",
          }}
        />

        {/* Botón volver */}
        <Button
          component={Link}
          to="/"
          sx={{
            mt: 2,
            px: 4,
            py: 1.5,
            fontSize: "1.1rem",
            fontWeight: 700,
            background: "linear-gradient(to right, #2563eb, #1d4ed8)",
            color: "white",
            textTransform: "none",
            borderRadius: "9999px",
            "&:hover": {
              transform: "scale(1.05)",
              background: "linear-gradient(to right, #1d4ed8, #2563eb)",
            },
            transition: "all 0.3s ease",
          }}
        >
          Volver al inicio
        </Button>
      </Container>
    </Box>
  );
}
