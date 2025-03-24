export type FormICOData = {
  nome: string;
};

export type FormContextType = {
  data: unknown;
  setData: (values: Partial<unknown>) => void;
  step: number;
  nextStep: () => void;
  prevStep: () => void;
  personType: string;
  setPersonType: (type: string) => void;
};
