import React from "react";
import { GlobalContext } from "./globalContext";

const Produto = () => {
  const user = React.useContext(GlobalContext);
  return (
    <div>
      <p>{user.nome}</p>
    </div>
  );
};

export default Produto;
