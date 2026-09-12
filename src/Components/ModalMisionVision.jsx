import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// ✅ Material UI
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

// ✅ Icono
import { X } from "lucide-react";

export default function ModalMisionVision({ isOpen, onClose }) {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        "data-aos": "zoom-in",
        sx: {
          backgroundColor: "#111827",
          color: "white",
          borderRadius: 4,
          p: { xs: 2, sm: 4 },
          position: "relative",
        },
      }}
      BackdropProps={{
        sx: {
          backgroundColor: "rgba(0,0,0,0.65)",
          backdropFilter: "blur(4px)",
        },
      }}
    >
      {/* BOTÓN CERRAR */}
      <IconButton
        onClick={onClose}
        sx={{
          position: "absolute",
          top: 16,
          right: 16,
          color: "#d1d5db",
          "&:hover": { color: "white" },
        }}
        aria-label="Cerrar"
      >
        <X size={28} />
      </IconButton>

      {/* TÍTULO */}
      <DialogTitle
        sx={{
          textAlign: "center",
          fontSize: { xs: "1.9rem", md: "2.4rem" },
          fontWeight: 700,
          color: "#facc15",
          mb: 2,
        }}
      >
        Misión y Visión
      </DialogTitle>

      {/* CONTENIDO */}
      <DialogContent
        sx={{
          overflowY: "auto",
          px: { xs: 1, sm: 3 },
          pb: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 5,
            color: "#e5e7eb",
            lineHeight: 1.8,
          }}
        >
          {/* MISIÓN */}
          <Box>
            <Typography
              variant="h6"
              sx={{
                color: "#60a5fa",
                fontWeight: 700,
                mb: 1,
                fontSize: "1.3rem",
              }}
            >
              Misión
            </Typography>

            <Typography
              sx={{
                mb: 2,
                fontSize: { xs: "1rem", md: "1.1rem" },
              }}
            >
              Acercar herramientas digitales modernas y accesibles a pequeños
              negocios, con soluciones prácticas que se adapten a sus
              necesidades sin procesos complicados ni costos difíciles de
              alcanzar.
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.1rem" },
              }}
            >
              Mi propósito es que la tecnología sea una herramienta útil para
              vender, organizar y conectar con sus clientes de una manera más
              práctica.
            </Typography>
          </Box>

          {/* VISIÓN */}
          <Box>
            <Typography
              variant="h6"
              sx={{
                color: "#60a5fa",
                fontWeight: 700,
                mb: 1,
                fontSize: "1.3rem",
              }}
            >
              Visión
            </Typography>

            <Typography
              sx={{
                mb: 2,
                fontSize: { xs: "1rem", md: "1.1rem" },
              }}
            >
              Aprovechar la evolución de la tecnología y la inteligencia
              artificial para crear soluciones cada vez más útiles, accesibles
              e innovadoras.
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.1rem" },
              }}
            >
              Mi visión es seguir desarrollando herramientas que permitan a
              pequeños negocios incorporar tecnología moderna de una forma
              sencilla y a un precio justo, sin necesitar grandes inversiones
              para comenzar.
            </Typography>
          </Box>

          {/* CIERRE */}
          <Box
            sx={{
              mt: 1,
              p: 3,
              borderRadius: 3,
              background:
                "linear-gradient(135deg, rgba(59,130,246,0.15), rgba(250,204,21,0.08))",
              border: "1px solid rgba(255,255,255,0.08)",
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.1rem" },
                fontWeight: 500,
                color: "#f9fafb",
              }}
            >
              Tecnología moderna, soluciones prácticas y atención directa,
              pensadas para pequeños negocios.
            </Typography>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}