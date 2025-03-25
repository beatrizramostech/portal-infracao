import React from "react";
import { Step1 } from "../MultistepForm/Step1";
import { Step2 } from "../MultistepForm/Step2";
import { Step3 } from "../MultistepForm/Step3";
import { useFormContext } from "../../contexts/FormContext";
import { Step4 } from "../MultistepForm/Step4";
import { Step5 } from "../MultistepForm/Step5";
import "./Progress.css";

export const Stepper = () => {
  const { step } = useFormContext();

  return (
    <div>
      <progress value={step + 1} max={5} />
      {step === 0 && <Step1 />}
      {step === 1 && <Step2 />}
      {step === 2 && <Step3 />}
      {step === 3 && <Step4 />}
      {step === 4 && <Step5 />}
    </div>
  );
};
