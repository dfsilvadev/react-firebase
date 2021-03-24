import Navbar from "./components/Navbar";
import MyRoutes from "./Routes";
import { GlobalStyle } from "./styles/global";

const App = () => {
  return (
    <>
      <Navbar />
      <MyRoutes />
      <GlobalStyle />
    </>
  );
};

export default App;
