import React from "react";
import { NavLink } from "react-router-dom";
import {
  TiHomeOutline,
  TiUserOutline,
  TiArrowBackOutline,
} from "react-icons/ti";

import "../styles/components/Sidebar.scss";

const Sidebar = () => {
  return (
    <aside>
      <div className="logo">git.app</div>
      <nav>
        <ul>
          <NavLink to="/" end>
            <li>
              <TiHomeOutline />
            </li>
          </NavLink>
          <NavLink to="/profile">
            <li className="link active">
              <TiUserOutline />
            </li>
          </NavLink>
          <li className="link">
            <TiArrowBackOutline />
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
