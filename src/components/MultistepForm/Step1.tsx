import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useFormContext } from "../../contexts/FormContext";
import "./Step1.css";
import { Alert } from "../Alert/Alert";

type Step1FormData = {
  aviso1: boolean;
  aviso2: boolean;
  aviso3: boolean;
};

export const Step1 = () => {
  const { nextStep } = useFormContext();
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
    if (isDisabled) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
      nextStep();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="formAviso">
      <div className="aviso">
        <h3 className="avisoTitulo">Aviso Legal</h3>
        <p className="avisoConteudo">
          É crime inserir informações ou documentos falsos em sistemas públicos. De acordo com o
          artigo 313-A do Código Penal Brasileiro, fornecer dados falsos para sistemas da
          Administração Pública pode resultar em pena de reclusão de 2 a 12 anos e multa. Ao
          utilizar este sistema, você declara que todas as informações fornecidas são verdadeiras,
          estando ciente das responsabilidades legais aplicáveis.
        </p>
        <div className="check">
          <input type="checkbox" {...register("aviso1")} />
          <label>
            Estou ciente de que oferecer dados falsos é crime e pode resultar em pena de reclusão de
            2 a 12 anos e multa.
          </label>
        </div>
      </div>

      <div className="aviso">
        <h3 className="avisoTitulo">Aviso sobre Documentos Digitalizados</h3>
        <p className="avisoConteudo">
          Todos os documentos inseridos neste sistema serão considerados cópias simples
          digitalizadas. O usuário é responsável por manter os documentos originais, pois eles podem
          ser exigidos futuramente para comprovação. A apresentação do documento original poderá ser
          necessária em caso de auditoria, conferência ou solicitação por parte dos órgãos
          competentes.
        </p>
        <div className="check">
          <input type="checkbox" {...register("aviso2")} />
          <label>
            Estou ciente de que os documentos digitalizados são considerados cópias simples e é
            minha responsabilidade apresentar o original quando necessário.
          </label>
        </div>
      </div>

      <div className="aviso">
        <h3 className="avisoTitulo">Aviso sobre Documentos com Assinatura Digital</h3>
        <p className="avisoConteudo">
          Apenas documentos assinados digitalmente com certificados ICP-Brasil serão considerados
          originais, desde que atendam aos seguintes requisitos: A assinatura digital deve estar
          dentro do prazo de validade. O documento não pode ter sido alterado após a assinatura,
          incluindo procedimentos como combinação de vários documentos em um único arquivo PDF. Caso
          o documento não atenda a esses critérios, será tratado como cópia simples digitalizada,
          sendo necessária a apresentação do original quando solicitado.
        </p>
        <div className="check">
          <input type="checkbox" {...register("aviso3")} />
          <label>
            Estou ciente das condições para aceitação de documento digital como original.
          </label>
        </div>
      </div>

      <button type="submit" className="botaoProximo primario">
        Próximo
      </button>
      <Alert
        message="É necessário aceitar todos os avisos para prosseguir."
        onClose={() => setIsOpen(false)}
        isOpen={isOpen}
        type="error"
      />
    </form>
  );
};
