import React from "react";

export const GlobalContext = React.createContext();

export const ContextComponent = ({ children }) => {
  const [produtos, setProdutos] = React.useState(null);

  React.useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto/")
      .then((produtos) => produtos.json())
      .then((produtos) => setProdutos(produtos));
  }, []);

  const cleanProducts = () => {
    setProdutos(null);
  };

  return (
    <GlobalContext.Provider value={{ produtos, cleanProducts }}>
      {children}
    </GlobalContext.Provider>
  );
};
