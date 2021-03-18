import React from "react";
import { NavLink } from "react-router-dom";
import {
  TiUserOutline,
  TiFolderOpen,
  TiStarOutline,
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
            <li className="link active">
              <TiUserOutline />
            </li>
          </NavLink>
          <NavLink to="repos">
            <li className="link">
              <TiFolderOpen />
            </li>
          </NavLink>
          <NavLink to="starred">
            <li className="link">
              <TiStarOutline />
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
