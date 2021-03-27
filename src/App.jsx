import { WeatherResume } from "./components/WeatherResume";
import MyRoutes from "./Routes";
import { GlobalStyle } from "./styles/global";

const App = () => {
  return (
    <div className="container">
      <WeatherResume />
      <MyRoutes />
      <GlobalStyle />
    </div>
  );
};

export default App;
