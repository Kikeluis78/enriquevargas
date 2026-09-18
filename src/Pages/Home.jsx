import { Link } from "react-router-dom";
import { BASIC_SOLUTION_ORDER, SOLUTION_DETAILS } from "../utils/constants";
import { CONTACT_SOLUTIONS } from "../utils/contact";
import Biografia from "../Components/Biografia";
import { useSEOMetadata } from "../Hooks/useSEOMetadata";

const secondary =
  "inline-flex items-center justify-center min-h-12 px-4 py-3 rounded-xl border border-cyan-400 text-cyan-300 font-semibold text-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white hover:bg-cyan-950";

export default function Home() {
  useSEOMetadata({
    title: "Enrique Vargas | Soluciones digitales para pequeños negocios",
    description: "Soluciones para presentar tu negocio, recibir pedidos y organizar citas. Atención directa con Enrique; alcance y precio acordados antes de comenzar.",
    canonical: "https://enriquevargas.com.mx/",
    ogTitle: "Enrique Vargas | Soluciones Digitales",
    ogDescription: "Recibe pedidos, organiza citas y presenta tu negocio en línea. Soluciones digitales con atención directa de Enrique.",
  });

  return (
    <div id="home" className="text-white pb-4">
      <section
        aria-labelledby="soluciones-titulo"
        className="grid md:grid-cols-2 gap-6 items-center pt-3 md:pt-2"
      >
        <div className="text-center md:text-left">
          <h1
            id="soluciones-titulo"
            className="text-4xl font-bold mb-4 text-center md:text-left"
          >
            Tengo una solución para{" "}
            <span className="text-cyan-400">lo que necesitas resolver</span>
          </h1>

          <div className="text-gray-300 max-w-3xl mb-8 text-center md:text-left">
            <p className="text-yellow-400">
              Tal vez necesitas organizar citas o
            </p>

            <p>Recibir pedidos a tu WhatsApp.</p>

            <p className="text-yellow-400">Ya es "Tiempo de Mostrar" tus servicios en línea,</p>
          </div>
        </div>

        <img
          src="/home-soluciones-digitales.webp"
          alt="Soluciones digitales para pequeños negocios"
          className="rounded-3xl border border-cyan-400/30 w-full max-w-lg mx-auto"
          loading="eager"
        />
      </section>

      <section
        id="productos-inicio"
        aria-labelledby="soluciones-titulo"
        className="mt-16 scroll-mt-8"
      >
        <h2
          id="hero-title"
          className="text-2xl sm:text-2xl lg:text-3xl font-bold leading-tight mb-5 text-center md:text-left"
        >
          Puedes comenzar con una solución practica,economica y concreta {" "}
          <span className="text-cyan-400">
            y revisar ampliaciones cuando tu negocio las necesite.
          </span>
        </h2>

        <p className="text-lg text-gray-300 mb-6 text-center md:text-left">
          Estas soluciones digitales están pensadas para cualquier tipo de
          negocio.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {BASIC_SOLUTION_ORDER.map((id) => {
            const solution = SOLUTION_DETAILS[id];
            return (
              <article
                key={id}
                className="flex flex-col min-w-0 p-5 rounded-2xl bg-[#0a0a0a] border border-cyan-400/30"
              >
                <h3 className="text-lg font-bold text-cyan-300 mb-3">
                  {CONTACT_SOLUTIONS[id]}
                </h3>
                <img
                  src={solution.image}
                  alt={`Vista ilustrativa de ${CONTACT_SOLUTIONS[id]}`}
                  className="w-full h-auto rounded-lg mb-4"
                  loading="lazy"
                />
                <ul className="text-gray-300 text-sm mb-4 space-y-2">
                  {(Array.isArray(solution.summary)
                    ? solution.summary
                    : [solution.summary]
                  ).map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span aria-hidden="true" className="text-green-400 font-bold shrink-0">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="font-bold text-cyan-300 mb-4"></p>
                <Link
                  to={`/precios?solucion=${id}`}
                  aria-label={`Ver precio y alcance de ${CONTACT_SOLUTIONS[id]}`}
                  className={`${secondary} mt-auto`}
                >
                  Más Información
                </Link>
              </article>
            );
          })}
        </div>

      </section>

<section aria-labelledby="avanzamos-title" className="mt-16">
  <div className="text-center md:text-left mb-8">
    <p className="text-yellow-400 font-semibold text-sm uppercase tracking-widest mb-2">
      Simple, claro y paso a paso
    </p>

    <h2
      id="avanzamos-title"
      className="text-3xl lg:text-4xl font-bold mb-3"
    >
      Así ponemos en marcha{" "}
      <span className="text-cyan-400">tu proyecto</span>
    </h2>

    <p className="text-gray-300 max-w-2xl mx-auto md:mx-0">
      Desde que eliges una solución hasta que comenzamos a trabajar,
      sabrás qué sigue en cada etapa.
    </p>
  </div>

  <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
    {[
      {
        number: "01",
        title: "Elige tu solución",
        description:
          "Revisa las opciones o solicita orientación si todavía no sabes cuál necesitas.",
        color: "text-cyan-400",
        border: "border-cyan-400/40",
        glow: "shadow-cyan-400/10",
      },
      {
        number: "02",
        title: "Cuéntame qué necesitas",
        description:
          "Envíame tus datos y me pondré en contacto contigo para conocer mejor tu proyecto.",
        color: "text-yellow-400",
        border: "border-yellow-400/40",
        glow: "shadow-yellow-400/10",
      },
      {
        number: "03",
        title: "Definimos los detalles",
        description:
          "Revisamos juntos el alcance, precio y condiciones antes de comenzar.",
        color: "text-purple-400",
        border: "border-purple-400/40",
        glow: "shadow-purple-400/10",
      },
      {
        number: "04",
        title: "¡Comenzamos!",
        description:
          "Con la propuesta y el convenio aprobados, y realizado el anticipo, ponemos en marcha tu proyecto.",
        color: "text-green-400",
        border: "border-green-400/40",
        glow: "shadow-green-400/10",
      },
    ].map((step) => (
      <li
        key={step.number}
        className={`
          relative overflow-hidden
          p-6 pt-8
          rounded-2xl
          bg-linear-to-b from-[#111827] to-[#070707]
          border ${step.border}
          shadow-lg ${step.glow}
          transition-all duration-300
          hover:-translate-y-1
          hover:shadow-xl
        `}
      >
        {/* Número decorativo */}
        <span
          aria-hidden="true"
          className={`
            absolute -top-3 right-3
            text-7xl font-black
            opacity-10
            ${step.color}
          `}
        >
          {step.number}
        </span>

        {/* Número principal */}
        <div
          className={`
            relative
            w-12 h-12
            flex items-center justify-center
            rounded-xl
            bg-white/5
            border border-white/10
            text-xl font-black
            mb-5
            ${step.color}
          `}
        >
          {step.number}
        </div>

        <h3 className={`text-lg font-bold mb-3 ${step.color}`}>
          {step.title}
        </h3>

        <p className="text-sm text-gray-300 leading-relaxed">
          {step.description}
        </p>
      </li>
    ))}
  </ol>
</section>
      <div className="mt-16">
        <Biografia />
      </div>

    </div>
  );
}
