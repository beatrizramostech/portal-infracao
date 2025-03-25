import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormContext } from "../../contexts/FormContext";
import "./Step2n3.css";

const schema = z.object({
  orgaoAutuador: z.enum(["DETRAN-ES", "PRF", "PREFEITURA", "Polícia Militar"]),
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
    console.log(errors);

    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="formAIT">
      <h2>Validar AIT</h2>

      <label>Órgão Autuador:</label>
      <select {...register("orgaoAutuador")}>
        <option value="DETRAN-ES">DETRAN-ES</option>
        <option value="PRF">PRF</option>
        <option value="PREFEITURA">PREFEITURA</option>
        <option value="Polícia Militar">Polícia Militar</option>
      </select>
      {errors.orgaoAutuador && <p>{errors.orgaoAutuador.message}</p>}

      <label>Nº do AIT:</label>
      <input type="text" {...register("numeroAIT")} className="teste" />
      {errors.numeroAIT && <p>{errors.numeroAIT.message}</p>}

      <div className="buttons-form">
        <button type="button" onClick={() => prevStep()} className="info">
          Voltar
        </button>
        <button type="submit" className="primario">
          Próximo
        </button>
      </div>
    </form>
  );
};
