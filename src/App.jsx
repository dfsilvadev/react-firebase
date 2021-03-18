import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import "./styles/global.css";

const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Home />
      </div>
    </>
  );
};

export default App;
