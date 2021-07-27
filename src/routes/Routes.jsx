import { Navigate, Route, Routes } from "react-router-dom";

import history from "../utils/history";

import SignIn from "../pages";
import Dashboard from "../pages/dashboard";
import { AuthContextProvider } from "../contexts/AuthContext";
import storage from "../utils/storage";

function CustomRoute({ isPrivate, ...parms }) {
  const { "app.refreshToken": refreshToken } = storage.get("app.refreshToken");

  if (isPrivate && !!!refreshToken) {
    return <Navigate to="/" />;
  }

  return <Route {...parms} />;
}

const MyRoutes = () => {
  return (
    <AuthContextProvider>
      <Routes history={history}>
        <CustomRoute path="/" element={<SignIn />} />
        <CustomRoute isPrivate path="dashboard" element={<Dashboard />} />
      </Routes>
    </AuthContextProvider>
  );
};

export default MyRoutes;
