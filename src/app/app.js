import React from "react";
import UseStateComponent from "../components/useState-component";
import Produto from "../components/useState-component/Produto";
import "./App.css";

const App = () => {
  const [ativo, setAtivo] = React.useState(false);
  const [produtos, setData] = React.useState(null);

  function getApiUrl(produto) {
    return `https://ranekapi.origamid.dev/json/api/produto/${produto.toLowerCase()}`;
  }

  function getProduto(innerText) {
    return fetch(getApiUrl(innerText)).then((data) => data.json());
  }

  function setProduto(data) {
    setData(data);
  }

  async function handleClick(e) {
    setProduto(await getProduto(e.target.innerText));
  }

  return (
    <React.Fragment>
      <UseStateComponent state={ativo} setAtivo={setAtivo} />
      <button onClick={handleClick}>Notebook</button>
      <button onClick={handleClick}>Smartphone</button>
      <button onClick={handleClick}>Tablet</button>
      <Produto dados={produtos} />
    </React.Fragment>
  );
};

export default App;
