import React from "react";
import { Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
// import Repos from "./pages/Repos";
// import Starred from "./pages/Starred";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<Profile />} />
      {/* <Route path="repos" element={<Repos />} />
      <Route path="starred" element={<Starred />} /> */}
    </Routes>
  );
};

export default MyRoutes;
