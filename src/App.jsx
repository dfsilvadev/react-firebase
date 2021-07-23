import { BrowserRouter as Router } from "react-router-dom";

import { OnChangeContextProvider } from "./contexts/OnChangeContext";
import MyRoutes from "./routes/Routes";

import { GlobalStyle } from "./styles/global";

const App = () => {
  return (
    <OnChangeContextProvider>
      <Router>
        <MyRoutes />
        <GlobalStyle />
      </Router>
    </OnChangeContextProvider>
  );
};

export default App;
