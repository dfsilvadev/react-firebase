import React from "react";
import UseEffectComponent from "../components/useEffect-component";
import UseRefComponent from "../components/useRef-component";
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

  function saveToLocalStorage(data) {
    localStorage.setItem("produtos", JSON.stringify(data));
  }

  function getToLocalStorage(data) {
    return localStorage.getItem(data);
  }

  React.useEffect(() => {
    setProduto(JSON.parse(getToLocalStorage("produtos")));
  }, []);

  async function handleClick(e) {
    const data = await getProduto(e.target.innerText);
    setProduto(data);
    saveToLocalStorage(data);
  }

  return (
    <React.Fragment>
      <UseStateComponent state={ativo} setAtivo={setAtivo} />
      <br />
      <UseEffectComponent />
      <button onClick={handleClick}>Notebook</button>
      <button onClick={handleClick}>Smartphone</button>
      <button onClick={handleClick}>Tablet</button>
      <Produto dados={produtos} />
      <UseRefComponent />
    </React.Fragment>
  );
};

export default App;
