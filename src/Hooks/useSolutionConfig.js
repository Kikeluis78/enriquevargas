import { useContext } from "react";
import { SolutionConfigContext } from "../Context/SolutionConfigContext.js";

export function useSolutionConfig() {
  const context = useContext(SolutionConfigContext);
  if (!context) {
    throw new Error("useSolutionConfig must be used within SolutionConfigProvider");
  }
  return context;
}
