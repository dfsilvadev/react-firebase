import { NavLink } from "react-router-dom";
import {
  TiHomeOutline,
  TiUserOutline,
  TiArrowBackOutline,
} from "react-icons/ti";

import githubImg from "../../assets/github.png";
import { Nav } from "./styles";

const Navbar = () => {
  return (
    <Nav className="header">
      <div className="logo">
        <img src={githubImg} alt="Github Icon" />
      </div>
      <nav>
        <ul>
          <li className="link">
            <NavLink to="/" end>
              <TiHomeOutline />
            </NavLink>
          </li>
          <li className="link">
            <NavLink to="/profile">
              <TiUserOutline />
            </NavLink>
          </li>
          <li className="link">
            <NavLink to="/login">
              <TiArrowBackOutline />
            </NavLink>
          </li>
        </ul>
      </nav>
    </Nav>
  );
};

export default Navbar;
