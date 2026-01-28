import { useNavigate } from "react-router-dom";

// ✅ Material UI
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";

export default function PoliticaPrivacidad() {
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
          {/* Título principal */}
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              color: "#facc15",
              fontWeight: 700,
              mb: 3,
              fontSize: { xs: "2rem", md: "2.6rem" },
            }}
          >
            Política de Privacidad
          </Typography>

          <Divider sx={{ mb: 4, borderColor: "rgba(255,255,255,0.1)" }} />

          {/* CONTENIDO */}
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
              ¡Hola! Soy <strong>Enrique Vargas</strong>, programador freelance
              apasionado por la tecnología y comprometido con la transparencia.
              Esta política de privacidad explica cómo trato tus datos cuando
              decides confiar en mis servicios de desarrollo web, apps o
              formación tecnológica.
            </Typography>

            {/* ✅ Título de sección */}
            <Typography
              variant="h5"
              sx={{ color: "#fb923c", fontWeight: 700, mt: 2 }}
            >
              1. Información que recopilo
            </Typography>

            <ul style={{ marginLeft: "1.5rem" }}>
              <li>Tu nombre completo</li>
              <li>Correo electrónico</li>
              <li>Teléfono de contacto</li>
              <li>Detalles de tu proyecto</li>
              <li>Datos de facturación (si aplica)</li>
            </ul>

            <Typography
              variant="h5"
              sx={{ color: "#fb923c", fontWeight: 700, mt: 2 }}
            >
              2. ¿Para qué uso tus datos?
            </Typography>

            <Typography>
              La información se usa exclusivamente para brindarte un servicio
              eficiente y personalizado:
            </Typography>

            <ul style={{ marginLeft: "1.5rem" }}>
              <li>Contactarte y coordinar el proyecto</li>
              <li>Crear propuestas o presupuestos</li>
              <li>Enviar avances o actualizaciones</li>
              <li>Emitir facturación</li>
              <li>Brindar soporte técnico</li>
            </ul>

            <Typography
              variant="h5"
              sx={{ color: "#fb923c", fontWeight: 700, mt: 2 }}
            >
              3. Protección de tu información
            </Typography>

            <Typography>
              Cuido tus datos con responsabilidad. Nunca vendo ni comparto tu
              información con terceros sin tu autorización expresa.
            </Typography>

            <Typography
              variant="h5"
              sx={{ color: "#fb923c", fontWeight: 700, mt: 2 }}
            >
              4. Herramientas externas
            </Typography>

            <Typography>
              Utilizo herramientas como Google Forms o PayPal, solo cuando es
              necesario y siempre con tu consentimiento informado.
            </Typography>

            <Typography
              variant="h5"
              sx={{ color: "#fb923c", fontWeight: 700, mt: 2 }}
            >
              5. Tus derechos
            </Typography>

            <Typography>Puedes solicitar:</Typography>

            <ul style={{ marginLeft: "1.5rem" }}>
              <li>Acceso a tus datos personales</li>
              <li>Corrección o actualización</li>
              <li>Eliminación total de tu información</li>
            </ul>

            <Typography
              variant="h5"
              sx={{ color: "#fb923c", fontWeight: 700, mt: 2 }}
            >
              6. Cambios a esta política
            </Typography>

            <Typography>
              Si se actualiza esta política, se mostrará una nueva fecha de
              modificación al final del documento.
            </Typography>

            <Typography
              variant="h5"
              sx={{ color: "#fb923c", fontWeight: 700, mt: 2 }}
            >
              7. Contacto
            </Typography>

            <Typography>
              Si tienes preguntas o deseas ejercer tus derechos:
            </Typography>

            <Typography sx={{ color: "#facc15", fontWeight: 600 }}>
              📧 enriquegv078@gmail.com <br />
              📱 WhatsApp: +52 56 1100 1627
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

          {/* ✅ BOTÓN */}
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
              Cerrar
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
