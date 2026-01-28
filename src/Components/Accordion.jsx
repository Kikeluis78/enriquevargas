import React from "react";

// ✅ Material UI
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function CustomAccordion({ question, answer }) {
  return (
    <Accordion
      sx={{
        backgroundColor: "transparent",
        borderBottom: "1px solid #1f2937", // border-gray-800
        color: "white",
        boxShadow: "none",
        py: 1.5,
        "&::before": { display: "none" }, // 🔥 Quita línea gris de MUI
      }}
    >
      {/* Título */}
      <AccordionSummary
        expandIcon={
          <ExpandMoreIcon
            sx={{
              color: "#facc15", // amarillo tipo text-yellow-400
              fontSize: "2rem",
            }}
          />
        }
        sx={{
          "& .MuiAccordionSummary-content": {
            margin: 0,
            "&:hover": { color: "#fbbf24" }, // text-yellow-300
          },
        }}
      >
        <Typography
          sx={{
            fontWeight: 600,
            color: "#e5e7eb", // text-gray-200
            fontSize: "1rem",
          }}
        >
          {question}
        </Typography>
      </AccordionSummary>

      {/* Contenido */}
      <AccordionDetails>
        <Typography
          sx={{
            color: "#9ca3af", // text-gray-400
            lineHeight: 1.7,
          }}
        >
          {answer}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}
