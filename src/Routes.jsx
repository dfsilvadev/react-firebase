import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Repos from "./pages/Repos";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="repos" element={<Repos />} />
    </Routes>
  );
};

export default MyRoutes;
