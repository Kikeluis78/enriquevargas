import { useState } from "react";

// ✅ Material UI
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function ModalConstruccion() {
  const [show, setShow] = useState(true); // true = visible al inicio

  return (
    <Dialog
      open={show}
      onClose={() => setShow(false)}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          background: "linear-gradient(to bottom, #111827, #1f2937, #000)",
          borderRadius: 4,
          border: "1px solid #374151",
          height: { xs: "70vh", md: "70vh" },
          display: "flex",
          flexDirection: "column",
          p: { xs: 2, sm: 4 },
        },
      }}
      BackdropProps={{
        sx: { backgroundColor: "rgba(0,0,0,0.8)" },
      }}
    >
      <DialogContent
        sx={{
          flex: 1,
          overflowY: "auto",
          textAlign: "center",
          px: { xs: 1, sm: 4 },
        }}
      >
        {/* TÍTULO */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: 800,
            color: "#fbbf24", // amber-400
            textShadow: "0 0 12px rgba(0,0,0,0.8)",
            mb: 3,
            mt: 2,
            fontSize: { xs: "1.8rem", sm: "2.5rem" },
          }}
        >
          🚧 Estamos en Construcción 🚧
        </Typography>

        {/* TEXTO */}
        <Typography
          sx={{
            color: "#d1d5db",
            fontSize: { xs: "1rem", sm: "1.15rem", md: "1.25rem" },
            maxWidth: "650px",
            mx: "auto",
            lineHeight: 1.7,
            mb: 8,
          }}
        >
          Esta sección aún no está disponible.  
          <span style={{ color: "#60a5fa", fontWeight: 600 }}>
            {" "}¡Estamos trabajando{" "}
          </span>
          <span style={{ color: "#facc15", fontWeight: 600 }}>
            para que esté lista muy pronto! 🚀
          </span>
        </Typography>
      </DialogContent>

      {/* BOTÓN */}
      <Box sx={{ textAlign: "center", pb: 3 }}>
        <Button
          onClick={() => setShow(false)}
          sx={{
            px: 6,
            py: 1.5,
            borderRadius: "9999px",
            fontWeight: 700,
            fontSize: { xs: "0.85rem", sm: "1rem" },
            background: "linear-gradient(45deg, #00D9FF, #FF6B35)",
            color: "white",
            boxShadow: "0 0 20px rgba(0, 217, 255, 0.4)",
            textTransform: "none",
            "&:hover": {
              background: "linear-gradient(45deg, #00C4E6, #E55A30)",
              transform: "scale(1.05)",
              boxShadow: "0 10px 30px rgba(0, 217, 255, 0.5)",
            },
            transition: "all 0.2s ease",
          }}
        >
          Cerrar
        </Button>
      </Box>
    </Dialog>
  );
}
