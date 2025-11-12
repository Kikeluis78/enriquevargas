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

// ✅ Icono (ya tienes lucide-react instalado)
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
          backgroundColor: "#111827", // bg-gray-900
          color: "white",
          borderRadius: 4,
          p: { xs: 2, sm: 4 },
          position: "relative",
        },
      }}
      BackdropProps={{
        sx: {
          backgroundColor: "rgba(0,0,0,0.6)",
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
          fontSize: { xs: "1.8rem", md: "2.2rem" },
          fontWeight: 700,
          color: "#facc15", // yellow-300
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
            gap: 4,
            fontSize: { xs: "1rem", md: "1.2rem" },
            color: "#e5e7eb",
            lineHeight: 1.7,
          }}
        >
          {/* Misión */}
          <Box>
            <Typography
              variant="h6"
              sx={{ color: "#60a5fa", fontWeight: 600, mb: 1 }}
            >
              Misión
            </Typography>

            <Typography sx={{ mb: 1 }}>
              Ayudar a pequeños y medianos negocios a posicionarse en el mundo
              digital conectando con sus clientes de manera efectiva y profesional.
              Entrego aplicaciones web funcionales y accesibles, creando una sinergia
              entre cliente y usuario.
            </Typography>

            <Typography>
              Para negocios con servicio a domicilio, busco agilizar la atención al
              cliente mediante páginas web automatizadas, optimizando tiempos de
              respuesta y mejorando la experiencia del usuario.
            </Typography>
          </Box>

          {/* Visión */}
          <Box>
            <Typography
              variant="h6"
              sx={{ color: "#60a5fa", fontWeight: 600, mb: 1 }}
            >
              Visión
            </Typography>

            <Typography sx={{ mb: 1 }}>
              Revolucionar la publicidad digital reduciendo el impacto ambiental
              de volantes y papelería innecesaria. Transformo estos elementos en
              estrategias digitales efectivas para tu negocio.
            </Typography>

            <Typography>
              Busco que cada cliente tenga presencia online de manera profesional,
              accesible y responsable con el medio ambiente, aumentando la visibilidad
              y la eficiencia de su negocio.
            </Typography>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
