import React from "react";
import Button from "./Button";
import Modal from "./Modal";

const UseStateComponent = ({ setAtivo, state }) => {
  return (
    <React.Fragment>
      <h1>useState - React Hooks</h1>
      <br></br>
      {!state && (
        <Button setAtivo={setAtivo} state={state}>
          Abrir
        </Button>
      )}

      <Modal setAtivo={setAtivo} state={state} />
    </React.Fragment>
  );
};

export default UseStateComponent;
