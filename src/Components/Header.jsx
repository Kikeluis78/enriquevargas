import { useState } from "react";
import { NavLink } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Home, DollarSign, MessageSquare, Menu, X } from "lucide-react";
import { MENU_ITEMS } from "../utils/constants";

const icons = [Home, DollarSign, MessageSquare];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const renderItems = () => MENU_ITEMS.map((item, index) => {
    const Icon = icons[index];
    return (
      <NavLink
        key={item.path}
        to={item.path}
        end={item.path === "/"}
        onClick={() => setMenuOpen(false)}
        className="flex items-center gap-3 min-h-14 px-4 py-3 rounded-2xl font-bold text-base focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white hover:bg-white/10"
        style={({ isActive }) => ({
          color: item.color,
          border: `2px solid ${isActive ? item.color : "transparent"}`,
          backgroundColor: isActive ? `${item.color}22` : undefined,
          boxShadow: isActive ? `0 0 12px ${item.color}33` : undefined,
        })}
      >
        <Icon size={24} aria-hidden="true" className="shrink-0" />
        <span>{item.name}</span>
      </NavLink>
    );
  });

  return (
    <header className="sticky top-0 z-40 w-full">
      {isDesktop ? (
        <nav aria-label="Navegación principal" className="flex flex-wrap justify-center gap-3 p-4 bg-black/60 border-b border-white/10 shadow-lg">
          {renderItems()}
        </nav>
      ) : (
        <>
          <div className="flex justify-end p-3 bg-black/40">
            <IconButton aria-label="Abrir menú de navegación" aria-expanded={menuOpen} aria-controls={menuOpen ? "navegacion-movil" : undefined} onClick={() => setMenuOpen(true)} sx={{ color: "#22E3FF", border: "2px solid #22E3FF", "&.Mui-focusVisible": { outline: "2px solid white", outlineOffset: 4 } }}>
              <Menu size={28} aria-hidden="true" />
              <span className="ml-2 text-base font-bold">Menú</span>
            </IconButton>
          </div>
          <Drawer anchor="right" open={menuOpen} onClose={() => setMenuOpen(false)} slotProps={{ paper: { sx: { width: 300, maxWidth: "100vw", bgcolor: "#0c0f15", color: "white", p: 2, zIndex: 41 } } }}>
            <div className="flex items-center justify-between mb-4">
              <span className="font-bold">Menú</span>
              <IconButton aria-label="Cerrar menú de navegación" onClick={() => setMenuOpen(false)} sx={{ color: "white", "&.Mui-focusVisible": { outline: "2px solid #22E3FF" } }}><X size={28} /></IconButton>
            </div>
            <nav id="navegacion-movil" aria-label="Navegación principal" className="flex flex-col gap-4">{renderItems()}</nav>
          </Drawer>
        </>
      )}
    </header>
  );
}
