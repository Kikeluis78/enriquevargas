import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Precios from "../Pages/Precios";
import Precios2 from "../Pages/Precios2";
import Clientes from "../Pages/Clientes";
import Contacto from "../Pages/Contacto";
import NoFound404 from "../Pages/NoFound404";
import Politica from "../Pages/Politica";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/precios" element={<Precios />} />
      <Route path="/precios2" element={<Precios2 />} />
      <Route path="/clientes" element={<Clientes />} />
      <Route path="/contacto" element={<Contacto />} />
       <Route path="/politica" element={<Politica />} />
      <Route path="*" element={<NoFound404 />} />
    </Routes>
  );
}

export default AppRouter;
