import Typography from "@mui/material/Typography";

export default function Logo() {
  return (
    <Typography
      variant="h4"
      sx={{
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: 900,
        letterSpacing: "-0.5px",
        userSelect: "none",
        display: "flex",
        alignItems: "center",
        gap: "6px",
      }}
    >
      {/* ENRIQUE */}
      <span
        style={{
          color: "#00D9FF",
          fontWeight: 900,
        }}
      >
        Enrique
      </span>

      {/* VARGAS */}
      <span
        style={{
          color: "#FFFFFF", // blanco puro
          fontWeight: 900,
        }}
      >
        Vargas
      </span>
    </Typography>
  );
}
