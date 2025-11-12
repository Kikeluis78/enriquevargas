import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";

export default function PoliticaCookies() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "black",
        color: "white",
        py: 6,
        px: 2,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="md">
        <Paper
          sx={{
            p: { xs: 3, sm: 5 },
            borderRadius: 4,
            background: "linear-gradient(145deg, #2d2d2d, #1a1a1a)",
            boxShadow:
              "10px 10px 30px #0e0e0e, -10px -10px 30px #2e2e2e, inset 0 1px 1px rgba(255,255,255,0.05), 0 0 0 2px rgba(255,255,255,0.04)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              color: "#22d3ee",
              fontWeight: 700,
              mb: 3,
              fontSize: { xs: "2rem", md: "2.6rem" },
            }}
          >
            Política de Cookies
          </Typography>

          <Divider sx={{ mb: 4, borderColor: "rgba(255,255,255,0.1)" }} />

          <Box
            sx={{
              color: "#d1d5db",
              fontSize: "1rem",
              lineHeight: 1.7,
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <Typography>
              Este sitio utiliza cookies para mejorar tu experiencia y analizar
              el tráfico de manera anónima. Las cookies son pequeños archivos
              que se almacenan temporalmente en tu dispositivo.
            </Typography>

            <Typography variant="h5" sx={{ color: "#06b6d4", fontWeight: 700 }}>
              1. Tipos de cookies
            </Typography>
            <ul style={{ marginLeft: "1.5rem" }}>
              <li>Cookies esenciales: necesarias para el funcionamiento.</li>
              <li>Cookies analíticas: ayudan a entender cómo se usa el sitio.</li>
              <li>Cookies funcionales: mejoran la experiencia del usuario.</li>
            </ul>

            <Typography variant="h5" sx={{ color: "#06b6d4", fontWeight: 700 }}>
              2. Control de cookies
            </Typography>
            <Typography>
              Puedes eliminar o bloquear las cookies desde la configuración de
              tu navegador en cualquier momento.
            </Typography>

            <Typography variant="h5" sx={{ color: "#06b6d4", fontWeight: 700 }}>
              3. Consentimiento
            </Typography>
            <Typography>
              Al continuar navegando en este sitio, aceptas el uso de cookies
              conforme a esta política.
            </Typography>

            <Typography
              sx={{
                color: "#6b7280",
                mt: 4,
                textAlign: "center",
                fontSize: "0.85rem",
              }}
            >
              Última actualización: 18 de julio de 2025
            </Typography>
          </Box>

          <Box sx={{ textAlign: "center", mt: 5 }}>
            <Button
              onClick={() => navigate("/")}
              sx={{
                px: 5,
                py: 1.5,
                fontWeight: 700,
                background: "linear-gradient(to right, #0891b2, #0e7490)",
                color: "white",
                borderRadius: "9999px",
                textTransform: "none",
                fontSize: "1.1rem",
                "&:hover": {
                  transform: "scale(1.05)",
                  background: "linear-gradient(to right, #0e7490, #0891b2)",
                },
              }}
            >
              Volver al inicio
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
