import React from "react";
import { Routes, Route } from "react-router-dom";
import { Today } from "./pages/Today";
import { Week } from "./pages/Week";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Today />} />
      <Route path="week" element={<Week />} />
    </Routes>
  );
};

export default MyRoutes;
