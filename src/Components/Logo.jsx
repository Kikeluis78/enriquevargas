import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/" aria-label="Enrique Vargas — Inicio" className="inline-flex items-center select-none rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00D9FF]">
      <span
        className="text-3xl md:text-4xl font-bold tracking-wide"
        style={{ fontFamily: "'Stack Sans Notch', sans-serif" }}
      >
        <span className="text-white">Enrique</span>
        <span className="text-[#00D9FF]"> Vargas</span>
      </span>
    </Link>
  );
}
