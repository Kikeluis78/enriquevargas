import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Home from "../Pages/Home";
import Precios from "../Pages/Precios";
import Contacto from "../Pages/Contacto";
import NoFound404 from "../Pages/NoFound404";
import Politica from "../Pages/Politica";
import TerminosServicio from "../Pages/TerminosServicio";
import PoliticaCookies from "../Pages/PoliticaCookies";
import Proximamente from "../Pages/Proximamente";

import { SolutionConfigProvider } from "../Context/SolutionConfigContext.jsx";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<SolutionConfigProvider><Outlet /></SolutionConfigProvider>}>
        <Route path="/precios" element={<Precios />} />
        <Route path="/contacto" element={<Contacto />} />
      </Route>
      <Route path="/precios2" element={<Navigate to="/precios" replace />} />
      <Route path="/proximamente" element={<Proximamente />} />
      <Route path="/politica" element={<Politica />} />
      <Route path="/terminosServicio" element={<TerminosServicio />} />
      <Route path="/cookies" element={<PoliticaCookies />} />
      <Route path="*" element={<NoFound404 />} />
    </Routes>
  );
}

export default AppRouter;
