import { NavLink } from "react-router-dom";
import { HeaderContent } from "./styles";

export function Header() {
  return (
    <HeaderContent>
      <nav>
        <ul>
          <li>
            <NavLink to="/" end>
              Today
            </NavLink>
          </li>
          <li>
            <NavLink to="week">Week</NavLink>
          </li>
        </ul>
      </nav>
      <div className="temperature">
        <ul>
          <li>°C</li>
          <li>°F</li>
        </ul>
      </div>
    </HeaderContent>
  );
}
