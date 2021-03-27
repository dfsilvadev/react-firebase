import { FaSistrix } from "react-icons/fa";
import ClearDay from "../../assets/icons/clear_day.svg";
import { WatherResumeContent } from "./styles";

export function WeatherResume() {
  return (
    <WatherResumeContent>
      <div className="search">
        <input type="text" placeholder="Search by: City,State" />
        <span>
          <FaSistrix />
        </span>
      </div>
      <div className="data-temp">
        <img src={ClearDay} alt="Clear Day" />
        <div className="temperature">
          <strong>28°C</strong>
          <p>
            Monday, <span>16:00</span>
          </p>
        </div>
      </div>
      <div className="data-info-city">
        <ul className="currently">
          <li>
            <img src={ClearDay} alt="" /> <span>Dia</span>
          </li>
          <li>
            <img src={ClearDay} alt="" /> <span>Tempo limpo</span>
          </li>
        </ul>
        <h1>São Paulo, SP</h1>
      </div>
    </WatherResumeContent>
  );
}
