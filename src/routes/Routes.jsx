import { Route, Routes } from "react-router-dom";

import history from "../utils/history";

import SignIn from "../pages";
import Dashboard from "../pages/dashboard";
import { AuthContextProvider } from "../contexts/AuthContext";

const MyRoutes = () => {
  return (
    <AuthContextProvider>
      <Routes history={history}>
        <Route path="/" element={<SignIn />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </AuthContextProvider>
  );
};

export default MyRoutes;
