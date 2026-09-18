import { useReducer, useRef } from "react";
import { SolutionConfigContext } from "./SolutionConfigContext.js";
import { getSolutionDraft, initialConfigState, solutionConfigReducer } from "./solutionConfigReducer.js";

export function SolutionConfigProvider({ children }) {
  const [state, dispatch] = useReducer(solutionConfigReducer, initialConfigState);
  // Mantiene la referencia de un reintento al ir a editar y volver al formulario.
  const attemptRef = useRef(null);
  const value = {
    fields: state.fields,
    attemptRef,
    getDraft: (solution) => getSolutionDraft(state, solution),
    setField: (name, value) => dispatch({ type: "SET_FIELD", name, value }),
    setComment: (solution, comment) => dispatch({ type: "SET_COMMENT", solution, comment }),
    toggleFeature: (solution, id) => dispatch({ type: "TOGGLE_FEATURE", solution, id }),
    setPackageDecision: (solution, decision) => dispatch({ type: "SET_PACKAGE_DECISION", solution, decision }),
  };
  return <SolutionConfigContext.Provider value={value}>{children}</SolutionConfigContext.Provider>;
}
