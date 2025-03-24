import React from "react";
import { useState } from "react";
import { useFormContext } from "../../contexts/FormContext";

export const Step5 = () => {
  const { data, setData, nextStep, prevStep } = useFormContext();
  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const newFiles = Array.from(event.target.files);
      const validFiles = newFiles.filter((file) => file.size <= 5 * 1024 * 1024); // Máx 5MB
      setFiles((prevFiles) => [...prevFiles, ...validFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const handleNext = () => {
    setData({ ...data, files });
    nextStep();
  };

  return (
    <div>
      <h2>Upload de Arquivos</h2>

      <input type="file" multiple accept=".pdf,.jpg,.png" onChange={handleFileChange} />

      <ul>
        {files.map((file, index) => (
          <li key={index}>
            {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
            <button type="button" onClick={() => removeFile(index)}>
              Remover
            </button>
          </li>
        ))}
      </ul>

      <button type="button" onClick={prevStep}>
        Voltar
      </button>
      <button type="button" onClick={handleNext} disabled={files.length === 0}>
        Próximo
      </button>
    </div>
  );
};
