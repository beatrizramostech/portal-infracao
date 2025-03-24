import React from "react";
import { useState } from "react";
import { FormContext } from "./FormContext";

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setDataState] = useState<object>({});

  const [step, setStep] = useState(0);

  const [personType, setPersonType] = useState("");

  const setData = (values: Partial<object>) => {
    setDataState((prev: object) => ({ ...prev, ...values }));
  };

  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => s - 1);

  return (
    <FormContext.Provider
      value={{ data, setData, step, nextStep, prevStep, personType, setPersonType }}
    >
      {children}
    </FormContext.Provider>
  );
};
