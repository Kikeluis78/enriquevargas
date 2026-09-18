import { CONTACT_SOLUTIONS } from "../utils/contact.js";
import { getAdditionalFeatures } from "../data/projectFeatures.js";

export const EMPTY_DRAFT = { ids: [], comment: "", decidedPackage: null };
export const initialConfigState = {
  drafts: {},
  fields: { nombre: "", telefono: "", correo: "", negocio: "", cupon: "", horarioPreferido: "", horarioOtro: "" },
};

export function filterSolutionIds(solution, ids) {
  const allowed = new Set(getAdditionalFeatures(solution).map((feature) => feature.id));
  return Array.isArray(ids) ? [...new Set(ids)].filter((id) => allowed.has(id)) : [];
}

export function getSolutionDraft(state, solution) {
  const draft = state.drafts[solution] || EMPTY_DRAFT;
  return { ...draft, ids: draft.decidedPackage === "inicial" ? [] : filterSolutionIds(solution, draft.ids) };
}

export function solutionConfigReducer(state, action) {
  if (action.type === "SET_FIELD") {
    if (!Object.hasOwn(state.fields, action.name) || typeof action.value !== "string") return state;
    return { ...state, fields: { ...state.fields, [action.name]: action.value } };
  }
  const { solution } = action;
  if (!Object.hasOwn(CONTACT_SOLUTIONS, solution)) return state;
  const draft = getSolutionDraft(state, solution);
  let next;
  switch (action.type) {
    case "SET_COMMENT":
      if (solution === "general" || typeof action.comment !== "string") return state;
      next = { ...draft, comment: action.comment };
      break;
    case "TOGGLE_FEATURE": {
      if (!filterSolutionIds(solution, [action.id]).length) return state;
      next = {
        ...draft,
        ids: draft.ids.includes(action.id) ? draft.ids.filter((id) => id !== action.id) : [...draft.ids, action.id],
        decidedPackage: "personalizado",
      };
      break;
    }
    case "SET_PACKAGE_DECISION":
      if (solution === "general" || !["inicial", "personalizado"].includes(action.decision)) return state;
      next = { ...draft, decidedPackage: action.decision, ids: action.decision === "inicial" ? [] : draft.ids };
      break;
    default:
      return state;
  }
  return { ...state, drafts: { ...state.drafts, [solution]: next } };
}
