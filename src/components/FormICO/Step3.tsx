import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormContext } from "../../contexts/FormContext";

const schema = z.object({
  tipoPessoa: z.enum([
    "Responsável Pessoa Jurídica",
    "Procurador",
    "Condutor AIT",
    "Condutor Real",
  ]),
});

type Step3FormData = z.infer<typeof schema>;

export const Step3 = () => {
  const { data, nextStep, prevStep, setPersonType } = useFormContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Step3FormData>({
    resolver: zodResolver(schema),
    defaultValues: data as Step3FormData,
  });

  const onSubmit = (values: Step3FormData) => {
    setPersonType(values.tipoPessoa);
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Tipo de Pessoa</h2>
      <label>Escolha a opção:</label>
      <select {...register("tipoPessoa")}>
        <option value="Responsável Pessoa Jurídica">Responsável Pessoa Jurídica</option>
        <option value="Procurador">Procurador</option>
        <option value="Condutor AIT">Condutor AIT</option>
        <option value="Condutor Real">Condutor Real</option>
      </select>
      {errors.tipoPessoa && <p>{errors.tipoPessoa.message}</p>}

      <button type="button" onClick={prevStep}>
        Voltar
      </button>
      <button type="submit">Próximo</button>
    </form>
  );
};
