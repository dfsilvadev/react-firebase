import React from "react";
import { BrowserRouter } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import MyRoutes from "./Routes";

import "./styles/global.scss";

const App = () => {
  return (
    <>
      <Sidebar />
      <BrowserRouter>
        <div className="container">
          <MyRoutes />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
