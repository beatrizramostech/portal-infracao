export type FormICOData = {
  nome: string;
};

export type FormContextType = {
  data: object;
  setData: (values: Partial<unknown>) => void;
  step: number;
  nextStep: () => void;
  prevStep: () => void;
  personType: string;
  setPersonType: (type: string) => void;
};
