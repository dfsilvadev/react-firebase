import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Repos from "./Repos";
import Starred from "./Starred";

const Home = () => {
  return (
    <div className="container">
      <h1>Profile</h1>
      <Link to="repos">Repos</Link>
      <Link to="starred">Starreds</Link>

      <Routes>
        <Route path="repos" element={<Repos />} />
        <Route path="starred" element={<Starred />} />
      </Routes>
    </div>
  );
};

export default Home;
