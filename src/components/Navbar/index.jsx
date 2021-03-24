import { NavLink } from "react-router-dom";
import {
  TiHomeOutline,
  TiUserOutline,
  TiArrowBackOutline,
} from "react-icons/ti";

const Navbar = () => {
  return (
    <div className="header">
      <div className="logo">git.app</div>
      <nav>
        <ul>
          <li className="link">
            <NavLink to="/" end>
              <TiHomeOutline /> <span>Home</span>
            </NavLink>
          </li>
          <li className="link">
            <NavLink to="/profile">
              <TiUserOutline /> <span> Profile</span>
            </NavLink>
          </li>
          <li className="link">
            <NavLink to="/login">
              <TiArrowBackOutline /> <span>Logout</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
