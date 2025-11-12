import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

// ✅ Material UI
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Tooltip from "@mui/material/Tooltip";

// ✅ Íconos lucide-react
import {
  Home,
  DollarSign,
  Users,
  MessageSquare,
  Menu,
  X,
} from "lucide-react";

export default function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  // ✅ Detectar tamaño de pantalla
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setMenuOpen(true);
      else setMenuOpen(false);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // ✅ Colores neon bien definidos
  const neonColors = {
    home: "#22E3FF",
    precios: "#FFE45E",
    clientes: "#C084FC",
    contacto: "#FF2CD1",
  };

  // ✅ Ítems del menú (cada uno con su color neon)
  const items = [
    { name: "Home", path: "/", icon: <Home size={28} />, color: neonColors.home },
    { name: "Precios", path: "/precios", icon: <DollarSign size={28} />, color: neonColors.precios },
    { name: "Clientes", path: "/clientes", icon: <Users size={28} />, color: neonColors.clientes },
    { name: "Contacto", path: "/contacto", icon: <MessageSquare size={28} />, color: neonColors.contacto },
  ];

  // ✅ Render de cada opción del menú
  const renderItem = (item) => {
    const active = location.pathname === item.path;

    return (
      <Link
        key={item.path}
        to={item.path}
        onClick={() => isMobile && setMenuOpen(false)}
        className="group flex items-center rounded-full w-14 h-14 hover:w-52 transition-all duration-500 ease-out cursor-pointer overflow-hidden"
        style={{
          background: active
            ? `${item.color}22`
            : "rgba(255, 255, 255, 0.06)",

          // ✅ Borde neon activo
          border: `2px solid ${active ? item.color : "transparent"}`,

          // ✅ Glow neon activo
          boxShadow: active
            ? `0 0 15px ${item.color}, 0 0 5px ${item.color}`
            : "0 0 0 transparent",

          transition: "all 0.25s ease-in-out",
        }}
      >
        {/* Icono */}
        <div className="flex items-center justify-center w-14 h-14 flex-shrink-0">
          <span
            className={`transition-colors duration-300 ${
              active ? "text-white" : "text-gray-300 group-hover:text-white"
            }`}
            style={{
              color: active ? item.color : "",
              filter: active
                ? `drop-shadow(0 0 6px ${item.color})`
                : "none",
            }}
          >
            {item.icon}
          </span>
        </div>

        {/* Label (solo en hover) */}
        <span
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-2 whitespace-nowrap text-lg font-bold"
          style={{ color: item.color }}
        >
          {item.name}
        </span>
      </Link>
    );
  };

  return (
    <div>
      {/* ✅ Botón hamburguesa móvil con glow */}
      {isMobile && (
        <IconButton
          onClick={() => setMenuOpen(true)}
          sx={{
            position: "fixed",
            top: 16,
            right: 16,
            zIndex: 50,
            bgcolor: "rgba(0,0,0,0.6)",
            border: "2px solid #22E3FF",
            boxShadow: "0 0 12px #22E3FF",
            "&:hover": {
              bgcolor: "#0c0f15",
              boxShadow: "0 0 18px #22E3FF",
            },
          }}
        >
          <Menu size={28} color="#22E3FF" />
        </IconButton>
      )}

      {/* ✅ Drawer móvil estilo pro */}
      <Drawer
        anchor="left"
        open={isMobile ? menuOpen : false}
        onClose={() => setMenuOpen(false)}
        PaperProps={{
          style: {
            background: "rgba(0,0,0,0.75)",
            backdropFilter: "blur(16px)",
            borderRight: "1px solid rgba(255,255,255,0.15)",
          },
        }}
      >
        <Box sx={{ width: 260, height: "100%", p: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton onClick={() => setMenuOpen(false)}>
              <X size={28} color="#fff" />
            </IconButton>
          </Box>

          {/* Lista móvil */}
          <Box className="flex flex-col space-y-4 mt-4">
            {items.map(renderItem)}
          </Box>
        </Box>
      </Drawer>

      {/* ✅ Sidebar Desktop NEON PRO */}
      {!isMobile && (
        <Paper
          elevation={12}
          sx={{
            position: "fixed",
            left: 16,
            top: "50%",
            transform: "translateY(-50%)",
            p: 2,
            borderRadius: 4,
            backdropFilter: "blur(22px)",
            bgcolor: "rgba(0,0,0,0.55)",
            border: "2px solid rgba(255,255,255,0.1)",
            boxShadow: "0 0 35px rgba(0,255,255,0.15)",
            zIndex: 40,
          }}
        >
          <Box className="flex flex-col space-y-4">
            {items.map((item) => (
              <Tooltip key={item.path} title={item.name} placement="right">
                {renderItem(item)}
              </Tooltip>
            ))}
          </Box>
        </Paper>
      )}
    </div>
  );
}
