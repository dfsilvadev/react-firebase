import React from "react";
import { FaSearch } from "react-icons/fa";

import "../styles/components/reactUseEffect.css";

const ReactUseEffect = () => {
  const [count, setCount] = React.useState(0);
  const [search, setSearch] = React.useState("");
  const [product, setProduct] = React.useState(null);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    if (product !== null)
      localStorage.setItem("products", JSON.stringify(product));
  }, [product]);

  React.useEffect(() => {
    const data = localStorage.getItem("products");
    setProduct(JSON.parse(data));
  }, []);

  const handleSearch = (product, e) => {
    e.preventDefault();
    if (!product) {
      setError("Preencha o campo com um dos produtos acima");
      return;
    }
    fetch(`https://ranekapi.origamid.dev/json/api/produto/${product}`)
      .then((response) => response.json())
      .then((data) => {
        const keys = Object.keys(data);
        if (keys.includes("code")) {
          setError(data.message);
        } else {
          setProduct(data);
          setError("");
        }
      });
  };

  return (
    <>
      <div className="wrap">
        <button
          type="button"
          className="btn btn-medium btn-dark"
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
        <span className="count">{count}</span>
        <button
          type="button"
          className="btn btn-medium btn-dark"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
      </div>
      <form onSubmit={(e) => handleSearch(search, e)}>
        <h1>
          Produtos:{" "}
          <small>Notebook, Smartphone, Smartwatch, Tablet, Smartspeaker</small>
        </h1>
        <div className="input-group">
          <input
            type="search"
            name="search"
            value={search}
            onChange={({ target }) => setSearch(target.value)}
            autoFocus
            placeholder="Search"
          />
          <button type="submit">
            <FaSearch />
          </button>
        </div>
        {error && <p className="error">{error}</p>}
      </form>
      {product && <h1>{product.nome}</h1>}
    </>
  );
};

export default ReactUseEffect;
