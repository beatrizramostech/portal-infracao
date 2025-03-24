import { createContext, useContext } from "react";
import { FormContextType } from "../types/FormTypes";

export const FormContext = createContext<FormContextType | undefined>(undefined);

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) throw new Error("useFormContext deve ser usado dentro de FormProvider");
  return context;
};
