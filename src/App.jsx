import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import LoadingScreen from "./Components/Spinner";
import Layout from "./Layout/Layout";
import AppRouter from "./Routes/router";
import ScrollToTop from "./Components/ScrollToTop"; // ← Importa el nuevo componente

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula carga inicial SOLO la primera vez
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 segundos para la carga inicial

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <CssBaseline />
      {loading ? (
        <LoadingScreen />
      ) : (
        <Layout>
          <ScrollToTop /> {/* ← Agrega esto aquí */}
          <AppRouter />
        </Layout>
      )}
    </>
  );
}

export default App;