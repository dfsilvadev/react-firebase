import { useNavigate } from "react-router-dom";

import Spinner from "../components/Spinner";

import useAuth from "../hooks/useAuth";
import * as S from "../styles/pages/dashboard";

const Dashboard = () => {
  const { loading, user, signOut } = useAuth();
  const navigate = useNavigate();

  async function handleSignOut() {
    navigate("/");
    await signOut();
  }

  return (
    <>
      {loading ? (
        <div className="spinner-content">
          <Spinner />
        </div>
      ) : (
        <S.MainDashboard>
          <h1>Dashboard {user?.email}</h1>
          <button type="button" onClick={handleSignOut}>
            Sair
          </button>
        </S.MainDashboard>
      )}
    </>
  );
};

export default Dashboard;
