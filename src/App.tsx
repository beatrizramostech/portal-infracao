import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { FormProvider } from "./contexts/FormProvider";
import { Stepper } from "./components/FormICO/Stepper";
function App() {
  return (
    <>
      <Header />
      <FormProvider>
        <div className="container">
          <h1>Cadastro</h1>
          <Stepper />
        </div>
      </FormProvider>
    </>
  );
}

export default App;
