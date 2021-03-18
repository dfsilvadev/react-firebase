import React from "react";
import {
  TiUserOutline,
  TiFolderOpen,
  TiArrowBackOutline,
} from "react-icons/ti";

import "../styles/components/Sidebar.scss";

const Sidebar = () => {
  return (
    <aside>
      <div className="logo">git.app</div>
      <nav>
        <ul>
          <li className="link">
            <TiUserOutline />
          </li>
          <li className="link">
            <TiFolderOpen />
          </li>
          <li className="link">
            <TiArrowBackOutline />
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
