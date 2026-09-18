import { createElement, useRef } from "react";
import Collapse from "@mui/material/Collapse";
import useMediaQuery from "@mui/material/useMediaQuery";
import { FiCalendar, FiCheck, FiCheckCircle, FiChevronDown, FiChevronUp, FiGlobe, FiGrid, FiLogIn, FiMessageCircle, FiSettings, FiSliders, FiShoppingBag, FiShoppingCart, FiSmartphone, FiX, FiZap } from "react-icons/fi";
import { SiWhatsapp } from "react-icons/si";
import { SOLUTION_DETAILS } from "../utils/constants";

const stageIcons = { access: FiLogIn, store: FiShoppingBag, catalog: FiGrid, contact: FiMessageCircle, calendar: FiCalendar, cart: FiShoppingCart, whatsapp: SiWhatsapp, settings: FiSettings, FiSliders, mobile: FiSmartphone, globe: FiGlobe, check: FiCheckCircle };
const focus = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300";

export default function SolutionPriceCard({ plan, selected, open, onToggle, onCloseJourney, onOpenConfigurator, onContinueInitial }) {
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const detail = SOLUTION_DETAILS[plan.solution];
  const panelId = `journey-${plan.solution}`;
  const buttonId = `journey-button-${plan.solution}`;
  const limits = [...new Set([detail.limit, plan.clarification].filter(Boolean))];
  const buttonRef = useRef(null);

  const handleCloseJourney = () => {
    onCloseJourney();
    buttonRef.current?.focus();
  };

  return (
    <article id={`solucion-${plan.solution}`} aria-label={plan.name}
      className={`scroll-mt-6 min-w-0 rounded-2xl bg-[#0a0a0a] border p-5 sm:p-6 text-gray-300 break-words transition-all duration-200 ${selected ? "border-cyan-300 ring-2 ring-cyan-300/40" : "border-cyan-400/30"}`}>
      <h3 className="text-xl font-bold text-cyan-300 mb-3 text-center sm:text-left">{plan.name}</h3>
      <p className="text-sm leading-relaxed mb-4">{plan.description}</p>
      <p className="text-2xl font-bold text-cyan-300 mb-3">{plan.price}{plan.solution !== "android" && <span className="text-sm text-gray-300 ml-2">MXN</span>}</p>
      <p className="text-xs leading-relaxed mb-4">{plan.solution === "android" ? "Funciones y precio según el alcance acordado." : "Precio del paquete inicial. Las ampliaciones se cotizan por separado."}</p>
      <button
        ref={buttonRef}
        id={buttonId}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
        className={`w-full min-h-14 flex items-center gap-3 p-3 rounded-xl border border-cyan-400/30 bg-cyan-400/5 text-left text-cyan-200 hover:bg-cyan-400/10 transition-colors ${focus}`}>
        <FiZap aria-hidden="true" className="shrink-0 text-yellow-300" size={20} />
        <span className="min-w-0 flex-1 text-sm font-semibold">Conoce todo el potencial de esta solución<span className="sr-only">: {plan.name}</span></span>
        {open ? <FiChevronUp aria-hidden="true" className="shrink-0" size={20} /> : <FiChevronDown aria-hidden="true" className="shrink-0" size={20} />}
      </button>

      <div id={panelId} role="region" aria-labelledby={buttonId} aria-hidden={!open} inert={!open}>
        <Collapse in={open} timeout={reducedMotion ? 0 : 180}>
        <div className="pt-5">
          <p className="text-xs uppercase tracking-wider text-cyan-300 mb-4">Así funciona el paquete inicial</p>
          {plan.bestFor.length > 0 && <p className="text-sm mb-4 leading-relaxed">Ideal para: {plan.bestFor.join(", ")}.</p>}

          <ol className="space-y-0">
            {plan.journey.map((stage, index) => (
              <li key={stage.title} className="min-w-0 relative">
                {index < plan.journey.length - 1 && (
                  <div className="absolute left-4 sm:left-5 top-8 bottom-0 w-px bg-cyan-400/20" aria-hidden="true" />
                )}

                <div className="flex gap-2 sm:gap-3 pb-4">
                  <div className="flex-shrink-0">
                    <span className="flex items-center justify-center relative w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#102128] text-cyan-300 border border-cyan-400/20">
                      {createElement(stageIcons[stage.icon], { size: 20, "aria-hidden": true })}
                    </span>
                  </div>

                  <section className="min-w-0 flex-1 p-3 sm:p-4 rounded-xl border border-gray-700 bg-[#111827]/60">
                    <div className="mb-2">
                      <span className="text-cyan-400 text-xs font-semibold mr-2">{String(index + 1).padStart(2, "0")}</span>
                      <h4 className="inline text-base font-semibold text-white">{stage.title}</h4>
                    </div>
                    <p className="text-sm leading-relaxed mb-3 text-gray-300">{stage.description}</p>
                    <ul className="space-y-2">
                      {stage.items.map((item) => <li key={item} className="flex items-start gap-2 text-sm leading-relaxed"><FiCheck aria-hidden="true" className="shrink-0 text-green-400 mt-0.5 flex-shrink-0" size={16} /><span className="min-w-0">{item}</span></li>)}
                    </ul>
                  </section>
                </div>
              </li>
            ))}
          </ol>

          <section className="mt-6 p-4 rounded-xl border border-yellow-400/20 bg-yellow-400/5">
            <p className="text-xs uppercase tracking-wider text-yellow-300 font-semibold mb-3">Alcance y límites</p>
            <ul className="space-y-2">
              {limits.map((limit, idx) => (
                <li key={idx} className="text-sm text-gray-300 leading-relaxed">• {limit}</li>
              ))}
            </ul>
          </section>

          {plan.plus && plan.plus.length > 0 && (
            <section className="mt-4 p-4 rounded-xl border border-yellow-400/20 bg-yellow-400/5">
              <p className="text-xs uppercase tracking-wider text-yellow-300 font-semibold mb-3">Incluido</p>
              <ul className="space-y-2">
                {plan.plus.map((item, idx) => (
                  <li key={idx} className="text-sm text-gray-300 leading-relaxed">✓ {item}</li>
                ))}
              </ul>
            </section>
          )}

          <section className="mt-6 p-4 rounded-xl border border-purple-400/30 bg-purple-400/5">
            <h4 className="text-base font-semibold text-purple-200 mb-2">¿Necesitas llevarlo más lejos?</h4>
            <p className="text-sm leading-relaxed mb-3">Personaliza esta solución con funciones adicionales según las necesidades de tu proyecto.</p>
            <button id={`explore-${plan.solution}`} type="button" onClick={() => onOpenConfigurator(plan.solution)}
              className={`w-full min-h-12 flex items-center justify-center gap-2 px-3 py-3 rounded-xl border border-purple-400/50 text-purple-200 hover:bg-purple-400/10 ${focus}`}>
              <FiSliders aria-hidden="true" className="shrink-0" />Explorar adicionales
            </button>
          </section>

          <button
            type="button"
            onClick={handleCloseJourney}
            className={`w-full min-h-12 mt-3 flex items-center justify-center gap-2 text-sm text-gray-400 hover:text-gray-300 transition-colors py-2 ${focus}`}
          >
            <FiX size={16} aria-hidden="true" />
            Cerrar recorrido
          </button>
        </div>
        </Collapse>
      </div>
      <div className="mt-4 flex flex-col gap-3">
        {plan.hasDemo && plan.demoUrl && <a href={plan.demoUrl} target="_blank" rel="noopener noreferrer" className={`min-h-12 flex items-center justify-center px-4 py-3 rounded-xl border border-cyan-400/40 text-cyan-300 ${focus}`}>Probar demo</a>}
        <button type="button" onClick={onContinueInitial} className={`min-h-12 px-4 py-3 rounded-xl bg-cyan-400 text-slate-950 font-semibold ${focus}`}>Continuar con el paquete inicial</button>
      </div>
    </article>
  );
}
