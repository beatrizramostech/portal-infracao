import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormContext } from "../../contexts/FormContext";
import "./Step4.css";

const schema = z.object({
  nomeCompleto: z.string().min(2, "O nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Digite um email válido"),
  celular: z.string().min(10, "Celular inválido"),
  cpf: z.string().length(11, "CPF deve ter 11 dígitos"),
  cnh: z.string().min(1, "CNH é obrigatória"),

  cep: z.string().length(8, "CEP deve ter 8 dígitos"),
  logradouro: z.string().min(3, "Logradouro inválido"),
  numero: z.string().min(1, "Nº obrigatório"),
  bairro: z.string().min(3, "Bairro inválido"),
  municipio: z.string().min(2, "Município inválido"),
  uf: z.enum([
    "AC",
    "AL",
    "AP",
    "AM",
    "BA",
    "CE",
    "DF",
    "ES",
    "GO",
    "MA",
    "MT",
    "MS",
    "MG",
    "PA",
    "PB",
    "PR",
    "PE",
    "PI",
    "RJ",
    "RN",
    "RS",
    "RO",
    "RR",
    "SC",
    "SP",
    "SE",
    "TO",
  ]),
  pais: z.string().min(2, "País inválido"),
  complemento: z.string().optional(),
  pontoReferencia: z.string().optional(),
});

type Step4FormData = z.infer<typeof schema>;

export const Step4 = () => {
  const { data, setData, nextStep, prevStep } = useFormContext();

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

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-container">
      <h2>Dados Pessoais</h2>
      <div className="row">
        <div className="input-group">
          <label>Nome Completo:</label>
          <input type="text" {...register("nomeCompleto")} className="medInfo" />
          {errors.nomeCompleto && <p>{errors.nomeCompleto.message}</p>}
        </div>
        <div className="input-group">
          <label>Email:</label>
          <input type="email" {...register("email")} className="medInfo" />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div className="input-group">
          <label>CNH:</label>
          <input type="text" {...register("cnh")} />
          {errors.cnh && <p>{errors.cnh.message}</p>}
        </div>
      </div>
      <div className="row">
        <div className="input-group-2">
          <label>CPF:</label>
          <input type="text" {...register("cpf")} />
          {errors.cpf && <p>{errors.cpf.message}</p>}
        </div>
        <div className="input-group-2">
          <label>Celular:</label>
          <input type="tel" {...register("celular")} />
          {errors.celular && <p>{errors.celular.message}</p>}
        </div>
      </div>

      <h2>Endereço</h2>
      <div className="row">
        <div className="input-group-2">
          <label>CEP:</label>
          <input type="text" {...register("cep")} />
          {errors.cep && <p>{errors.cep.message}</p>}
        </div>
      </div>
      <div className="row">
        <div className="input-group">
          <label>Logradouro:</label>
          <input type="text" {...register("logradouro")} />
          {errors.logradouro && <p>{errors.logradouro.message}</p>}
        </div>

        <div className="input-group-3">
          <label>Número:</label>
          <input type="text" {...register("numero")} />
          {errors.numero && <p>{errors.numero.message}</p>}
        </div>

        <div className="input-group">
          <label>Bairro:</label>
          <input type="text" {...register("bairro")} />
          {errors.bairro && <p>{errors.bairro.message}</p>}
        </div>
      </div>

      <div className="row">
        <div className="input-group">
          <label>Município:</label>
          <input type="text" {...register("municipio")} />
          {errors.municipio && <p>{errors.municipio.message}</p>}
        </div>
        <div className="input-group-2">
          <label>UF:</label>
          <select {...register("uf")}>
            <option value="AC">Acre (AC)</option>
            <option value="AL">Alagoas (AL)</option>
            <option value="AP">Amapá (AP)</option>
            <option value="AM">Amazonas (AM)</option>
            <option value="BA">Bahia (BA)</option>
            <option value="CE">Ceará (CE)</option>
            <option value="DF">Distrito Federal (DF)</option>
            <option value="ES">Espírito Santo (ES)</option>
            <option value="GO">Goiás (GO)</option>
            <option value="MA">Maranhão (MA)</option>
            <option value="MT">Mato Grosso (MT)</option>
            <option value="MS">Mato Grosso do Sul (MS)</option>
            <option value="MG">Minas Gerais (MG)</option>
            <option value="PA">Pará (PA)</option>
            <option value="PB">Paraíba (PB)</option>
            <option value="PR">Paraná (PR)</option>
            <option value="PE">Pernambuco (PE)</option>
            <option value="PI">Piauí (PI)</option>
            <option value="RJ">Rio de Janeiro (RJ)</option>
            <option value="RN">Rio Grande do Norte (RN)</option>
            <option value="RS">Rio Grande do Sul (RS)</option>
            <option value="RO">Rondônia (RO)</option>
            <option value="RR">Roraima (RR)</option>
            <option value="SC">Santa Catarina (SC)</option>
            <option value="SP">São Paulo (SP)</option>
            <option value="SE">Sergipe (SE)</option>
            <option value="TO">Tocantins (TO)</option>
          </select>
          {errors.uf && <p>{errors.uf.message}</p>}
        </div>

        <div className="input-group">
          <label>País:</label>
          <input type="text" {...register("pais")} />
          {errors.pais && <p>{errors.pais.message}</p>}
        </div>
      </div>

      <label>Complemento (Opcional):</label>
      <input type="text" {...register("complemento")} />

      <label>Ponto de Referência (Opcional):</label>
      <input type="text" {...register("pontoReferencia")} />

      <div className="buttons-form">
        <button type="button" onClick={prevStep} className="info">
          Voltar
        </button>
        <button type="submit" className="primario">
          Próximo
        </button>
      </div>
    </form>
  );
};
