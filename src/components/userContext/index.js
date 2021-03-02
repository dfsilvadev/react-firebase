import React from "react";
import { ContextComponent } from "./globalContext";
import Produto from "./produto";

const UseContextComponent = () => {
  return (
    <ContextComponent>
      <h1>useContext - React Hooks</h1>
      <Produto />
    </ContextComponent>
  );
};

export default UseContextComponent;
