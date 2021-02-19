import React from "react";
import UseStateComponent from "../components/useState-component";
import "./App.css";

const App = () => {
  const [ativo, setAtivo] = React.useState(false);

  return (
    <React.Fragment>
      <UseStateComponent state={ativo} setAtivo={setAtivo} />
    </React.Fragment>
  );
};

export default App;
