import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link 
      to="/" 
      aria-label="Enrique Vargas Soluciones Digitales — Inicio" 
      className="inline-flex items-center max-w-full select-none rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00D9FF]"
    >
      {/* Texto */}
      <div className="flex flex-col">
        <span
          className="text-[23px] min-[360px]:text-[24px] min-[390px]:text-[25px] min-[430px]:text-[26px] md:text-[28px] lg:text-[30px] min-[1440px]:text-[32px] font-bold tracking-tight leading-[1.1]"
          style={{ fontFamily: "'Stack Sans Notch', sans-serif" }}
        >
          <span className="text-white">Enrique</span>
          <span className="text-[#00D9FF]"> Vargas</span>
        </span>
        <span className="text-[11px] min-[360px]:text-[12px] min-[430px]:text-[12px] md:text-[13px] min-[1440px]:text-[14px] text-[#FFE45E] mt-[3px] tracking-normal leading-[1.25]">
          Soluciones Digitales
        </span>
      </div>
    </Link>
  );
}
