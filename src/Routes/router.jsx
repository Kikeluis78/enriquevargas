import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../Pages/Home";
import Precios from "../Pages/Precios";
import Clientes from "../Pages/Clientes";
import Contacto from "../Pages/Contacto";
import NoFound404 from "../Pages/NoFound404";
import Politica from "../Pages/Politica";
import TerminosServicio from "../Pages/TerminosServicio";
import PoliticaCookies from "../Pages/PoliticaCookies";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/precios" element={<Precios />} />
      <Route path="/precios2" element={<Navigate to="/precios" replace />} />
      <Route path="/clientes" element={<Clientes />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/politica" element={<Politica />} />
      <Route path="/terminosServicio" element={<TerminosServicio />} />
      <Route path="/cookies" element={<PoliticaCookies />} />
      <Route path="*" element={<NoFound404 />} />
    </Routes>
  );
}

export default AppRouter;
