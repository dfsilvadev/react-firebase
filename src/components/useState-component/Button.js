import React from "react";

const Button = ({ setAtivo, state, children }) => {
  return <button onClick={() => setAtivo(!state)}>{children}</button>;
};

export default Button;
