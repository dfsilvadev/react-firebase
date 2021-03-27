import { Header } from "./components/Header";
import { WeatherResume } from "./components/WeatherResume";
import MyRoutes from "./Routes";
import { GlobalStyle } from "./styles/global";

const App = () => {
  return (
    <div className="container">
      <WeatherResume />
      <div>
        <Header />
        <MyRoutes />
      </div>
      <GlobalStyle />
    </div>
  );
};

export default App;
