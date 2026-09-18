import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import Layout from "./Layout/Layout";
import AppRouter from "./Routes/router";
import ScrollToTop from "./Components/ScrollToTop";
import { useSchemaOrg } from "./Hooks/useSchemaOrg";

function App() {
  // Schema.org Organization
  useSchemaOrg({
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Enrique Vargas",
    "url": "https://enriquevargas.com.mx",
    "image": "https://enriquevargas.com.mx/luis3.png",
    "description": "Soluciones digitales para pequeños negocios. Desarrollo web, aplicaciones Android, menús digitales y sistemas de pedidos por WhatsApp.",
    "areaServed": "MX",
    "priceRange": "$$",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "availableLanguage": "es"
    }
  });

  return (
    <>
      <CssBaseline />

      <GlobalStyles styles={{
        "@keyframes pageEntrance": {
          from: { opacity: 0.85 },
          to: { opacity: 1 },
        },
        "@media (prefers-reduced-motion: no-preference)": {
          "#root": { animation: "pageEntrance 200ms ease-out" },
        },
      }} />
      <Layout>
        <ScrollToTop />
        <AppRouter />
      </Layout>
    </>
  );
}

export default App;
