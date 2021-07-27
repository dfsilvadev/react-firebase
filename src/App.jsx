import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { OnChangeContextProvider } from "./contexts/OnChangeContext";
import MyRoutes from "./routes/Routes";

import { GlobalStyle } from "./styles/global";

const App = () => {
  return (
    <Router>
      <OnChangeContextProvider>
        <GlobalStyle />
        <MyRoutes />
        <ToastContainer autoClose={3000} />
      </OnChangeContextProvider>
    </Router>
  );
};

export default App;
