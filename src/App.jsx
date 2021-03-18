import React from "react";

import Sidebar from "./components/Sidebar";
import MyRoutes from "./Routes";

import "./styles/global.scss";

const App = () => {
  return (
    <>
      <Sidebar />
      <MyRoutes />
    </>
  );
};

export default App;
