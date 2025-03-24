import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormContext } from "../../contexts/FormContext";

const schema = z.object({
  nomeCompleto: z.string().min(2, "O nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Digite um email válido"),
  celular: z.string().min(10, "Celular inválido"),
  cpf: z.string().length(11, "CPF deve ter 11 dígitos"),
  cnh: z.string().min(1, "CNH é obrigatória"),

  cep: z.string().length(8, "CEP deve ter 8 dígitos"),
  logradouro: z.string().min(3, "Logradouro inválido"),
  numero: z.string().min(1, "Número obrigatório"),
  bairro: z.string().min(3, "Bairro inválido"),
  municipio: z.string().min(2, "Município inválido"),
  uf: z.string().length(2, "UF inválida"),
  pais: z.string().min(2, "País inválido"),
  complemento: z.string().optional(),
  pontoReferencia: z.string().optional(),
});

type Step4FormData = z.infer<typeof schema>;

export const Step4 = () => {
  const { data, setData, nextStep, prevStep } = useFormContext();
  const [openOne, setOpenOne] = useState<boolean>(false);
  const [openTwo, setOpenTwo] = useState<boolean>(false);
  const [openThree, setOpenThree] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Step4FormData>({
    resolver: zodResolver(schema),
    defaultValues: data as Step4FormData,
  });

  const onSubmit = (values: Step4FormData) => {
    setData(values);
    nextStep();
  };

  const setOpen = (value: number) => {
    switch (value) {
      case 1:
        setOpenOne(true);
        setOpenTwo(false);
        setOpenThree(false);
        break;
      case 2:
        setOpenOne(false);
        setOpenTwo(true);
        setOpenThree(false);
        break;
      case 3:
        setOpenOne(false);
        setOpenTwo(false);
        setOpenThree(true);
        break;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Dados Pessoais</h2>
      <section
        onClick={() => {
          setOpen(1);
        }}
      >
        <label>Nome Completo:</label>
        <input {...register("nomeCompleto")} />
        {errors.nomeCompleto && <p>{errors.nomeCompleto.message}</p>}

        <label>Email:</label>
        <input type="email" {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}

        <label>Celular:</label>
        <input type="tel" {...register("celular")} />
        {errors.celular && <p>{errors.celular.message}</p>}

        <label>CPF:</label>
        <input type="text" {...register("cpf")} />
        {errors.cpf && <p>{errors.cpf.message}</p>}

        <label>CNH:</label>
        <input type="text" {...register("cnh")} />
        {errors.cnh && <p>{errors.cnh.message}</p>}
      </section>
      <section>
        <h2>Endereço</h2>
        <label>CEP:</label>
        <input type="text" {...register("cep")} />
        {errors.cep && <p>{errors.cep.message}</p>}

        <label>Logradouro:</label>
        <input type="text" {...register("logradouro")} />
        {errors.logradouro && <p>{errors.logradouro.message}</p>}

        <label>Número:</label>
        <input type="text" {...register("numero")} />
        {errors.numero && <p>{errors.numero.message}</p>}

        <label>Bairro:</label>
        <input type="text" {...register("bairro")} />
        {errors.bairro && <p>{errors.bairro.message}</p>}

        <label>Município:</label>
        <input type="text" {...register("municipio")} />
        {errors.municipio && <p>{errors.municipio.message}</p>}

        <label>UF:</label>
        <input type="text" {...register("uf")} />
        {errors.uf && <p>{errors.uf.message}</p>}

        <label>País:</label>
        <input type="text" {...register("pais")} />
        {errors.pais && <p>{errors.pais.message}</p>}

        <label>Complemento (Opcional):</label>
        <input type="text" {...register("complemento")} />

        <label>Ponto de Referência (Opcional):</label>
        <input type="text" {...register("pontoReferencia")} />
      </section>

      <button type="button" onClick={prevStep}>
        Voltar
      </button>
      <button type="submit">Próximo</button>
    </form>
  );
};
