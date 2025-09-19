import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

// Heroicons (outline)
import { HomeIcon, CurrencyDollarIcon, UsersIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  // Detectar tamaño de pantalla
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setMenuOpen(false);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMenuClose = () => {
    if (isMobile) setMenuOpen(false);
  };

  return (
    <div>
      {/* Botón hamburguesa móvil */}
      <button
        className="md:hidden fixed top-4 right-4 z-50 bg-blue-600 text-white p-3 rounded-full shadow-md focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menú de navegación"
        aria-expanded={menuOpen}
      >
        {!menuOpen ? (
          <Bars3Icon className="h-6 w-6" />
        ) : (
          <XMarkIcon className="h-6 w-6" />
        )}
      </button>

      {/* Overlay móvil */}
      {menuOpen && isMobile && (
        <div
          className="fixed inset-0 z-30 bg-gradient-to-br from-black/60 to-gray-800/50 backdrop-blur-sm"
          onClick={handleMenuClose}
        ></div>
      )}

      {/* Menú lateral */}
      {(menuOpen || !isMobile) && (
        <div className="fixed left-4 top-1/2 -translate-y-1/2 flex flex-col space-y-4 z-40 transition-all duration-500 bg-white/10 backdrop-blur-md p-2 rounded-xl shadow-xl">
          {/* Home */}
          <Link
            to="/"
            onClick={handleMenuClose}
            className={`group flex items-center rounded-full w-14 h-14 hover:w-52 transition-all duration-500 ease-out cursor-pointer overflow-hidden ${
              location.pathname === "/" ? "bg-blue-500" : "bg-blue-100 hover:bg-blue-500"
            }`}
          >
            <div className="flex items-center justify-center w-14 h-14 flex-shrink-0">
              <HomeIcon
                className={`h-8 w-8 transition-colors duration-300 ${
                  location.pathname === "/" ? "text-white" : "text-black group-hover:text-white"
                }`}
              />
            </div>
            <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-2 whitespace-nowrap text-lg font-bold">
              Home
            </span>
          </Link>

          {/* Precios */}
          <Link
            to="/precios"
            onClick={handleMenuClose}
            className={`group flex items-center rounded-full w-14 h-14 hover:w-52 transition-all duration-500 ease-out cursor-pointer overflow-hidden ${
              location.pathname === "/precios" ? "bg-blue-500" : "bg-blue-100 hover:bg-blue-500"
            }`}
          >
            <div className="flex items-center justify-center w-14 h-14 flex-shrink-0">
              <CurrencyDollarIcon
                className={`h-8 w-8 transition-colors duration-300 ${
                  location.pathname === "/precios" ? "text-white" : "text-black group-hover:text-white"
                }`}
              />
            </div>
            <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-2 whitespace-nowrap text-lg font-bold">
              Precios
            </span>
          </Link>

          {/* Clientes */}
          <Link
            to="/clientes"
            onClick={handleMenuClose}
            className={`group flex items-center rounded-full w-14 h-14 hover:w-52 transition-all duration-500 ease-out cursor-pointer overflow-hidden ${
              location.pathname === "/clientes" ? "bg-blue-500" : "bg-blue-100 hover:bg-blue-500"
            }`}
          >
            <div className="flex items-center justify-center w-14 h-14 flex-shrink-0">
              <UsersIcon
                className={`h-8 w-8 transition-colors duration-300 ${
                  location.pathname === "/clientes" ? "text-white" : "text-black group-hover:text-white"
                }`}
              />
            </div>
            <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-2 whitespace-nowrap text-lg font-bold">
              Clientes
            </span>
          </Link>

          {/* Contacto */}
          <Link
            to="/contacto"
            onClick={handleMenuClose}
            className={`group flex items-center rounded-full w-14 h-14 hover:w-52 transition-all duration-500 ease-out cursor-pointer overflow-hidden ${
              location.pathname === "/contacto" ? "bg-blue-500" : "bg-blue-100 hover:bg-blue-500"
            }`}
          >
            <div className="flex items-center justify-center w-14 h-14 flex-shrink-0">
              <Bars3Icon
                className={`h-8 w-8 transition-colors duration-300 ${
                  location.pathname === "/contacto" ? "text-white" : "text-black group-hover:text-white"
                }`}
              />
            </div>
            <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-2 whitespace-nowrap text-lg font-bold">
              Contacto
            </span>
          </Link>
        </div>
      )}
    </div>
  );
}
