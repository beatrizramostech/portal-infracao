import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormContext } from "../../contexts/FormContext";

// Esquema de validação
const schema = z.object({
  orgaoAutuador: z.string().min(3, "Órgão Autuador obrigatório"),
  numeroAIT: z.string().min(1, "Número do AIT obrigatório"),
});

type Step2FormData = z.infer<typeof schema>;

export const Step2 = () => {
  const { data, setData, nextStep, prevStep } = useFormContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Step2FormData>({
    resolver: zodResolver(schema),
    defaultValues: data as Step2FormData,
  });

  const onSubmit = (values: Step2FormData) => {
    setData({ ...data, ...values });
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Validar AIT</h2>

      <label>Órgão Autuador:</label>
      <input type="text" {...register("orgaoAutuador")} />
      {errors.orgaoAutuador && <p>{errors.orgaoAutuador.message}</p>}

      <label>Nº do AIT:</label>
      <input type="text" {...register("numeroAIT")} />
      {errors.numeroAIT && <p>{errors.numeroAIT.message}</p>}

      <button type="button" onClick={() => prevStep()}>
        Voltar
      </button>
      <button type="submit">Próximo</button>
    </form>
  );
};
