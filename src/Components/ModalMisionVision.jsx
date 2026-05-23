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
              Ayudar a pequeños y medianos negocios a modernizarse mediante
              soluciones digitales accesibles, funcionales y profesionales.
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.1rem" },
              }}
            >
              Mi objetivo es crear páginas web, sistemas de pedidos y
              herramientas digitales que mejoren la atención al cliente,
              aumenten la presencia online y ayuden a cada negocio a crecer.
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
              Construir un entorno donde cualquier negocio, sin importar su
              tamaño, pueda competir digitalmente de manera profesional.
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.1rem" },
              }}
            >
              Busco aprovechar la tecnología actual y la inteligencia artificial
              para ofrecer soluciones rápidas, modernas y accesibles,
              facilitando la transformación digital de negocios reales.
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
              Tecnología moderna, soluciones reales y atención personalizada
              para ayudarte a llevar tu negocio al siguiente nivel.
            </Typography>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}