import React from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/Sidebar";
import MyRoutes from "./Routes";

import "./styles/global.scss";

const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <div className="container">
          <MyRoutes />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
