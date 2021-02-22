import React from "react";
import Button from "./Button";

const Modal = ({ setAtivo, state }) => {
  if (state)
    return (
      <div>
        <p>MODAL ABERTO</p>
        <Button setAtivo={setAtivo}>Fechar</Button>
      </div>
    );

  return null;
};

export default Modal;
