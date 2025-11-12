import { useState } from "react";

// ✅ Material UI
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

export default function InfoContrato() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 420,
        mt: 3,
        mb: 3,
        borderRadius: 3,
        overflow: "hidden",
        border: "1px solid #374151", // border-gray-700
      }}
    >
      {/* Botón superior */}
      <Button
        fullWidth
        onClick={() => setIsOpen((prev) => !prev)}
        sx={{
          backgroundColor: "#3b82f6", // blue-500
          color: "#facc15", // yellow-400
          fontWeight: 600,
          px: 2,
          py: 1.5,
          display: "flex",
          justifyContent: "space-between",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#2563eb", // blue-600
          },
        }}
      >
        <span>NOTA: Tu Contrato disponible tras enviar tus datos</span>

        <span
          style={{
            transition: "transform 0.3s",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          ▼
        </span>
      </Button>

      {/* Contenido colapsable */}
      <Collapse in={isOpen}>
        <Paper
          elevation={0}
          sx={{
            backgroundColor: "#111827", // bg-gray-900
            color: "#d1d5db", // gray-300
            px: 2,
            py: 1.5,
            fontSize: "0.8rem",
            textAlign: "justify",
            borderRadius: 0,
          }}
        >
          <Typography sx={{ fontSize: "0.75rem", lineHeight: 1.5 }}>
            Nota: Al enviar tus datos, podrás <strong>descargar tu contrato</strong> para leerlo y firmarlo.
          </Typography>
        </Paper>
      </Collapse>
    </Box>
  );
}
