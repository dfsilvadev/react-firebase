import React from "react";
import Header from "./components/Sidebar";
import Home from "./pages/Home";
import "./styles/global.scss";

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
