import { Link } from "react-router-dom";

export default function Biografia() {
  return (
    <section id="biografia" aria-labelledby="sobre-enrique" className="grid md:grid-cols-[1fr_2fr] gap-8 items-center p-5 sm:p-8 rounded-3xl bg-[#1a1a1a] text-white">
      <h2 id="sobre-enrique" className="text-3xl font-bold mb-4">Enrique <span className="text-cyan-400"> Vargas</span></h2>
      <div className="w-full max-w-xs mx-auto aspect-square rounded-[50%] overflow-hidden border border-cyan-400/30">

        <img src="/luis3.png" alt="Enrique Vargas" loading="lazy" className="w-full h-full object-cover object-top" />
      </div>
      <div>

        <p className="text-gray-300 mb-4">Te escucho para entender qué necesita tu negocio y revisar contigo una solución práctica, sin intermediarios.</p>
        <p className="text-gray-300 mb-5">Podemos partir de una solución existente o definir un proyecto especial. Antes de comenzar, acordamos alcance, precio y condiciones.</p>
        <Link to="/contacto?solucion=general" className="inline-flex items-center min-h-12 px-5 py-3 rounded-xl bg-cyan-400 text-slate-950 font-bold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white hover:bg-cyan-300">Programar Cita</Link>
      </div>
    </section>
  );
}
