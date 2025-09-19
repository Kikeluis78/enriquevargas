import { useState } from "react";
import LoadingScreen from "./Components/Spinner"; 
import Layout from "./Layout/Layout";
import AppRouter from "./Routes/router";

function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <LoadingScreen onComplete={() => setLoading(false)} />;
  }

  return (
    <Layout>
      <AppRouter /> {/* Aquí se muestran tus páginas según la ruta */}
    </Layout>
  );
}

export default App;
