import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";

export default function TerminosServicio() {
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
              color: "#60a5fa",
              fontWeight: 700,
              mb: 3,
              fontSize: { xs: "2rem", md: "2.6rem" },
            }}
          >
            Términos de Servicio
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
              Bienvenido a los servicios digitales de{" "}
              <strong>Enrique Vargas</strong>. Al utilizar este sitio o
              contratar mis servicios, aceptas los siguientes términos.
            </Typography>

            <Typography variant="h5" sx={{ color: "#38bdf8", fontWeight: 700 }}>
              1. Uso del sitio
            </Typography>
            <Typography>
              El contenido de este sitio es únicamente informativo. No se
              permite copiar, redistribuir o modificar sin autorización previa.
            </Typography>

            <Typography variant="h5" sx={{ color: "#38bdf8", fontWeight: 700 }}>
              2. Servicios
            </Typography>
            <Typography>
              Ofrezco servicios de desarrollo web, aplicaciones móviles y
              asesoría tecnológica personalizada. Cada proyecto incluye un
              acuerdo específico que define el alcance y las condiciones.
            </Typography>

            <Typography variant="h5" sx={{ color: "#38bdf8", fontWeight: 700 }}>
              3. Propiedad intelectual
            </Typography>
            <Typography>
              Todo el contenido y el código desarrollado permanecen bajo
              derechos reservados, salvo acuerdo explícito con el cliente.
            </Typography>

            <Typography variant="h5" sx={{ color: "#38bdf8", fontWeight: 700 }}>
              4. Limitación de responsabilidad
            </Typography>
            <Typography>
              No soy responsable de daños indirectos o pérdidas derivadas del
              uso indebido del software o servicios entregados.
            </Typography>

            <Typography variant="h5" sx={{ color: "#38bdf8", fontWeight: 700 }}>
              5. Cambios en los términos
            </Typography>
            <Typography>
              Estos términos pueden actualizarse ocasionalmente. Cualquier
              cambio importante se reflejará con una nueva fecha de
              actualización.
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
                background: "linear-gradient(to right, #2563eb, #1d4ed8)",
                color: "white",
                borderRadius: "9999px",
                textTransform: "none",
                fontSize: "1.1rem",
                "&:hover": {
                  transform: "scale(1.05)",
                  background: "linear-gradient(to right, #1d4ed8, #2563eb)",
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
