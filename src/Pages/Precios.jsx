import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { BASIC_SOLUTION_ORDER, SOLUTION_DETAILS } from "../utils/constants";
import { BASIC_PLANS, PREMIUM_PLANS, ANDROID_PLAN } from "../data/pricingPlans";
import SolutionPriceCard from "../Components/SolutionPriceCard";
import ProjectConfigurator from "../Components/Contact/ProjectConfigurator";
import ModalPromocion from "../Components/ModalPromocion";
import { getAdditionalFeatures } from "../data/projectFeatures";
import { useSolutionConfig } from "../Hooks/useSolutionConfig";
import { useSEOMetadata } from "../Hooks/useSEOMetadata";
import { motion as Motion } from "framer-motion";

// ✅ Material UI
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// ✅ Accordion personalizado
import Accordion from "../Components/Accordion";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Precios() {
  useSEOMetadata({
    title: "Planes y Precios | Soluciones Digitales | Enrique Vargas",
    description: "Descubre nuestros planes: desde tarjeta digital hasta soluciones Android. Precios claros desde el inicio. Consulta detalles sin compromiso.",
    canonical: "https://enriquevargas.com.mx/precios",
    ogTitle: "Planes y Precios | Enrique Vargas",
    ogDescription: "Descubre nuestros planes: desde tarjeta digital hasta soluciones Android. Precios claros desde el inicio.",
  });

  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [expandedSolution, setExpandedSolution] = useState(searchParams.get("configurar") === "1" ? searchParams.get("solucion") : null);

  const requestedSolution = searchParams.get("solucion");
  const selectedSolution = Object.prototype.hasOwnProperty.call(SOLUTION_DETAILS, requestedSolution) ? requestedSolution : null;
  const configuratorOpen = Boolean(selectedSolution && searchParams.get("configurar") === "1");
  const activeTab = selectedSolution ? (BASIC_SOLUTION_ORDER.includes(selectedSolution) ? 0 : 1) : searchParams.get("categoria") === "premium" ? 1 : 0;
  const setActiveTab = (tab) => {
    const next = new URLSearchParams(searchParams);
    next.delete("solucion");
    next.delete("configurar");
    setExpandedSolution(null);
    next.set("categoria", tab === 1 ? "premium" : "basicos");
    setSearchParams(next, { replace: true });
  };

  const { getDraft, toggleFeature, setPackageDecision } = useSolutionConfig();

  useEffect(() => {
    if (!selectedSolution) return;
    const frame = requestAnimationFrame(() => document.getElementById(`solucion-${selectedSolution}`)?.scrollIntoView({ block: "start", behavior: "instant" }));
    return () => cancelAnimationFrame(frame);
  }, [selectedSolution, activeTab]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleOpenConfigurator = (solution) => {
    setExpandedSolution(solution);
    const next = new URLSearchParams(searchParams);
    next.set("solucion", solution);
    next.set("configurar", "1");
    setSearchParams(next, { replace: true });
  };
  const handleCloseConfigurator = () => {
    setExpandedSolution(selectedSolution);
    const next = new URLSearchParams(searchParams);
    next.delete("configurar");
    setSearchParams(next, { replace: true });
  };
  const continueToContact = (solution, decision) => {
    setPackageDecision(solution, decision);
    navigate(`/contacto?solucion=${solution}`);
  };
  const cardProps = (solution) => ({
    selected: selectedSolution === solution,
    open: (configuratorOpen ? selectedSolution : expandedSolution) === solution,
    onToggle: () => setExpandedSolution((current) => current === solution ? null : solution),
    onCloseJourney: () => setExpandedSolution(null),
    onOpenConfigurator: handleOpenConfigurator,
    onContinueInitial: () => continueToContact(solution, "inicial"),
  });
  const applicableFeatures = selectedSolution ? getAdditionalFeatures(selectedSolution) : [];
  const currentDraft = getDraft(selectedSolution);

  return (
    <>
      {/* ✅ Sección de Precios */}
      <section id="precios" className="py-4 px-3 sm:px-2 bg-[#1A1A1A] rounded-2xl">
        <div className="container mx-auto">
          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-[#00D9FF]">
              Mis Precios
            </h1>

          </Motion.div>

          {/* ✅ SELECTOR SEGMENTADO MODERNO */}
          <div className="flex justify-center mb-8 px-0 sm:px-4">
            <div className="flex bg-[#0A0A0A] border border-gray-700 rounded-xl p-1 w-full max-w-md">
              <button
                onClick={() => setActiveTab(0)}
                aria-pressed={activeTab === 0}
                aria-label="Básicos y funcionales"
                className={`flex-1 py-3 px-2 sm:px-6 rounded-lg font-semibold text-xs min-[375px]:text-sm sm:text-base transition-all duration-300 ease-in-out whitespace-normal min-w-0 ${
                  activeTab === 0
                    ? "bg-[#00D9FF] text-black shadow-lg shadow-[#00D9FF]/50"
                    : "text-gray-400 hover:text-gray-300"
                }`}
              >
                Básicos y funcionales
              </button>
              <button
                onClick={() => setActiveTab(1)}
                aria-pressed={activeTab === 1}
                aria-label="Premium"
                className={`flex-1 py-3 px-2 sm:px-6 rounded-lg font-semibold text-xs min-[375px]:text-sm sm:text-base transition-all duration-300 ease-in-out whitespace-normal min-w-0 ${
                  activeTab === 1
                    ? "bg-[#00D9FF] text-black shadow-lg shadow-[#00D9FF]/50"
                    : "text-gray-400 hover:text-gray-300"
                }`}
              >
                Premium
              </button>
            </div>
          </div>
            <p className="text-gray-400 text-center mb-4 text-lg">
              Soluciones practicas para <span className="text-[#FFE45E] font-semibold">tu negocio</span>
            </p>
          {/* ✅ CONTENIDO DE TABS */}
          {activeTab === 0 && (
            <>
              <Motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >

                <div className="grid md:grid-cols-2 gap-5 items-start">
                  {BASIC_SOLUTION_ORDER.map((id) => <SolutionPriceCard key={id} plan={BASIC_PLANS.find((plan) => plan.solution === id)} {...cardProps(id)} />)}
                </div>
              </Motion.div>
            </>
          )}

          {activeTab === 1 && (
            <>
              <Motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-gray-400 text-center mb-12 text-lg">
                  Proyectos que requieren mayor definición de alcance. Podemos hablar de tu idea sin que tengas que elegir funciones técnicas.
                </p>
                <div className="grid md:grid-cols-2 gap-5 items-start">
                  {[...PREMIUM_PLANS, ANDROID_PLAN].map((plan) => <SolutionPriceCard key={plan.solution} plan={plan} {...cardProps(plan.solution)} />)}
                </div>
              </Motion.div>
            </>
          )}

          <section aria-labelledby="proceso-contratacion" className="mt-16 max-w-6xl mx-auto">
            <h2 id="proceso-contratacion" className="text-3xl font-bold text-center text-[#00D9FF] mb-8">
              ¿Cómo trabajaremos?
            </h2>
            <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: "Elige tu solución", description: "Selecciona la solución que mejor se adapte a tu negocio." },
                { title: "Envía tus datos", description: "Puedes explicar tu necesidad ahora o dejarla para nuestra conversación." },
                { title: "Definimos tu proyecto", description: "Revisamos contigo el alcance, precio final y condiciones antes de comenzar." },
                { title: "Comenzamos", description: "Después de aprobar tu propuesta y convenio y realizar el anticipo, iniciamos el proyecto." },
              ].map((step, index) => (
                <li key={step.title} className="min-w-0 bg-[#0A0A0A] border border-gray-800 rounded-2xl p-5">
                  <span aria-hidden="true" className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#00D9FF]/15 text-[#00D9FF] font-bold mb-4">
                    {index + 1}
                  </span>
                  <h3 className="text-base font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
                </li>
              ))}
            </ol>
          </section>

          {/* 📝 Aclaración comercial discreta */}
          <div className="mt-16 pt-8 border-t border-gray-800/50">
            <p className="text-center text-gray-400 text-sm leading-relaxed max-w-3xl mx-auto px-4">
              Los precios mostrados corresponden a la configuración base de cada solución. Funciones, integraciones o requerimientos adicionales se cotizan por separado.
            </p>
            <p className="text-center text-gray-400 text-sm leading-relaxed max-w-3xl mx-auto px-4 mt-3">
              Renovaciones, mantenimiento y servicios posteriores al periodo incluido se cotizan por separado.
            </p>
          </div>
        </div>
      </section>

      {/* ✅ Preguntas frecuentes */}
      <Box
        sx={{ maxWidth: "650px", mx: "auto", mt: 10, mb: 10 }}
        data-aos="fade-up"
      >
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: { xs: "1.8rem", md: "2.2rem" },
            textAlign: "center",
            mb: 4,
            color: "#fbbf24",
          }}
        >
          Preguntas <span style={{ color: "#60a5fa" }}>Frecuentes</span>
        </Typography>

        <Accordion
          question="⏳ ¿Cuándo estará lista mi solución?"
          answer="El tiempo de entrega se define según el alcance y la información necesaria para configurar tu solución."
        />
        <Accordion
          question="💳 ¿El precio incluye dominio y hosting?"
          answer="E-Commerce PRO, Web Corporativa y Web + App Android incluyen dominio y hosting por 1 año. En las demás soluciones, las condiciones se confirman antes de contratar. Renovaciones, mantenimiento y servicios posteriores al periodo incluido se cotizan por separado."
        />
        <Accordion
          question="🔄 ¿Puedo ampliar mi solución en el futuro?"
          answer="Sí. Las modificaciones posteriores, funciones nuevas e integraciones se evalúan y cotizan por separado."
        />
        <Accordion
          question="📱 ¿Puedo usar estas soluciones desde el celular?"
          answer="Los diseños se adaptan a celulares. Las funciones específicas de Android se revisan según viabilidad y alcance."
        />
        <Accordion
          question="🔧 ¿Para qué profesiones son estos planes?"
          answer="Perfectos para oficios, tiendas locales, consultorios, salones de belleza y todo tipo de pequeños negocios."
        />
        <Accordion question="¿Qué sucede después de enviar mi solicitud?" answer="Me pondré en contacto contigo para revisar tu necesidad, alcance y precio final. El desarrollo comienza después de aprobar propuesta y convenio y realizar el anticipo." />
        <Accordion question="¿Qué significa el precio Desde?" answer="Es el precio inicial del alcance base descrito. Más productos, funciones o integraciones pueden modificar el precio final, que revisaremos antes de contratar." />
        <Accordion question="¿Qué pasa si no sé cuál elegir?" answer="Puedes solicitar una llamada de orientación con tu nombre, teléfono y horario preferido. Acordaremos contigo la llamada; no necesitas definir un proyecto técnico." />
      </Box>
      <section className="my-10 p-6 rounded-2xl border border-cyan-400/30 text-white text-center" aria-labelledby="precios-cierre">
        <h2 id="precios-cierre" className="text-2xl font-bold mb-3">¿Ya sabes qué necesita tu negocio?</h2>
        <p className="text-gray-300 mb-5">Elige una solución o solicita orientación si todavía tienes dudas.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="#precios" className="inline-flex min-h-12 items-center px-5 py-3 rounded-xl border border-cyan-400 text-cyan-300">Elegir solución</a>
          <Link to="/contacto?solucion=general" className="inline-flex min-h-12 items-center px-5 py-3 rounded-xl bg-cyan-400 text-slate-950 font-bold">Solicitar orientación</Link>
        </div>
      </section>
      <ModalPromocion />

      <ProjectConfigurator
        open={configuratorOpen}
        onClose={handleCloseConfigurator}
        features={applicableFeatures}
        selectedIds={currentDraft.ids}
        onToggle={(id) => toggleFeature(selectedSolution, id)}
        onContinue={() => continueToContact(selectedSolution, "personalizado")}
        onExited={() => document.getElementById(`explore-${selectedSolution}`)?.focus()}
        key={selectedSolution || "none"}
      />
    </>
  );
}
