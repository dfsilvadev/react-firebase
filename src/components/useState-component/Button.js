import React from "react";

const Button = ({ setAtivo, children }) => {
  const handleClick = () => {
    setAtivo((state) => !state);
  };
  return <button onClick={handleClick}>{children}</button>;
};

export default Button;
