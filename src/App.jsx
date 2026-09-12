import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import Layout from "./Layout/Layout";
import AppRouter from "./Routes/router";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
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
