import React from "react";
import { GlobalContext } from "./globalContext";

import "./main.css";

const Produto = () => {
  const { produtos, cleanProducts } = React.useContext(GlobalContext);
  console.log(produtos);
  return (
    <>
      {produtos &&
        produtos.map((produto) => {
          return (
            <div key={produto.id} className="thumb">
              <img src={produto.fotos[0].src} alt="" />
              <h1>{produto.nome}</h1>
              <p>{produto.descricao}</p>
              <p>
                {Number(produto.preco).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </div>
          );
        })}
      <button onClick={cleanProducts}>Limpar</button>
    </>
  );
};

export default Produto;
