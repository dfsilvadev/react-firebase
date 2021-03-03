import React from "react";
import { ContextComponent } from "./globalContext";
import Produto from "./produto";

const sum = () => {
  let c;
  for (let i = 0; i < 100000000; i++) {
    c = i + i / 1000;
  }
  return c;
};

const UseContextComponent = () => {
  const [val, setVal] = React.useState(0);

  console.time();
  const a = React.useMemo(() => sum(), []);
  console.timeEnd();

  return (
    <ContextComponent>
      <h1>useContext - React Hooks</h1>
      <button onClick={() => setVal(val + 1)}>
        {val} - {a}
      </button>
      <Produto />
    </ContextComponent>
  );
};

export default UseContextComponent;
