import React from "react";

const Produto = ({ dados }) => {
  return <div>{dados && <div>{dados.nome}</div>}</div>;
};

export default Produto;
