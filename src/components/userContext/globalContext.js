import React from "react";

export const GlobalContext = React.createContext();

export const ContextComponent = ({ children }) => {
  const user = {
    nome: "Daniel",
    sobrenome: "Silva",
    idade: 33,
    endereco: {
      logradouro: "R R A D L",
      numero: 100,
      cidade: "São Paulo",
      uf: "SP",
    },
  };
  return (
    <GlobalContext.Provider value={user}>{children}</GlobalContext.Provider>
  );
};
