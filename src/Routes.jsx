import React from "react";
import { Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
// import Starred from "./pages/Starred";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="profile/*" element={<Profile />} />
    </Routes>
  );
};

export default MyRoutes;
