import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import LoadingScreen from "./Components/Spinner";
import Layout from "./Layout/Layout";
import AppRouter from "./Routes/router";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <CssBaseline />

      {loading ? (
        <LoadingScreen onComplete={() => setLoading(false)} />
      ) : (
        <Layout>
          <ScrollToTop />
          <AppRouter />
        </Layout>
      )}
    </>
  );
}

export default App;
