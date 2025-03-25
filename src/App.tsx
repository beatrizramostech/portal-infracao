import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { FormProvider } from "./contexts/FormProvider";
import FormIco from "./components/FormICO/FormIco";
function App() {
  return (
    <>
      <Header />
      <FormProvider>
        <div className="container">
          <h1>Cadastro</h1>
          <FormIco />
        </div>
      </FormProvider>
    </>
  );
}

export default App;
