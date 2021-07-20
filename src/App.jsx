import { AuthContextProvider } from "./contexts/AuthContext";
import { ChangeContextProvider } from "./contexts/ChangeContext";
import MyRoutes from "./Routes";
import { GlobalStyle } from "./styles/global";

const App = () => {
  return (
    <AuthContextProvider>
      <ChangeContextProvider>
        <MyRoutes />
        <GlobalStyle />
      </ChangeContextProvider>
    </AuthContextProvider>
  );
};

export default App;
