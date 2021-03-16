import React from "react";
import ReactUseEffect from "./components/ReactUseEffect";
import "./styles/global.css";

const App = () => {
  return (
    <main className="main display-flex align-items-center justify-content-center flex-direction-column">
      <h1>useEffect</h1>
      <ReactUseEffect />
    </main>
  );
};

export default App;
