import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

// ✅ Componentes
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BotonWhatsApp from "../Components/BotonWhatsApp";
import Logo from "../Components/Logo";
import ModalPromocion from "../Components/ModalPromocion";

export default function Layout({ children }) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
   background: "linear-gradient(135deg, #0f172a, #1e293b, #0a0f1c)",

        color: "#111",
      }}
    >
      {/* HEADER */}
      <Header />

      {/* LOGO */}
      <Box sx={{ py: 2, px: 3 }}>
        <Logo />
      </Box>

      {/* DIVISOR DECORATIVO */}
      <Divider sx={{ my: 1 }} />

      {/* CONTENIDO PRINCIPAL */}
      <Container maxWidth="lg" sx={{ flexGrow: 1, py: 4 }}>
        {children}
      </Container>

      {/* WHATSAPP FLOAT BUTTON */}
      <BotonWhatsApp />

      {/* MODAL DE PROMOCIÓN */}
      <ModalPromocion />

      {/* FOOTER */}
      <Divider sx={{ my: 2 }} />
      <Footer />
    </Box>
  );
}
