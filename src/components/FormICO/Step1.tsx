import React from "react";
import { useForm } from "react-hook-form";
import { useFormContext } from "../../contexts/FormContext";

type Step1FormData = {
  aviso1: boolean;
  aviso2: boolean;
  aviso3: boolean;
};

export const Step1 = () => {
  const { nextStep } = useFormContext();

  const { register, handleSubmit, watch } = useForm<Step1FormData>({
    defaultValues: {
      aviso1: false,
      aviso2: false,
      aviso3: false,
    },
  });

  const values = watch();

  const isDisabled = !(values.aviso1 && values.aviso2 && values.aviso3);

  const onSubmit = () => {
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input type="checkbox" {...register("aviso1")} />
        <label>Estou ciente de que meus dados serão armazenados.</label>
      </div>

      <div>
        <input type="checkbox" {...register("aviso2")} />
        <label>Entendo que posso cancelar minha inscrição a qualquer momento.</label>
      </div>

      <div>
        <input type="checkbox" {...register("aviso3")} />
        <label>Aceito os termos e condições.</label>
      </div>

      <button type="submit" disabled={isDisabled}>
        Próximo
      </button>
    </form>
  );
};
