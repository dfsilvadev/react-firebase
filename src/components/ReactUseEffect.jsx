import React from "react";

import "../styles/components/reactUseEffect.css";

const ReactUseEffect = () => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    document.title = count;
  }, [count]);

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
    </>
  );
};

export default ReactUseEffect;
