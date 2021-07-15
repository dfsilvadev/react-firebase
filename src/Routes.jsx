import { Routes, Route } from "react-router-dom";

import SignIn from "./pages";
import Dashboard from "./pages/dashboard";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default MyRoutes;
