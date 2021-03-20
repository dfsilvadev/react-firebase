import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { TiFolderOpen, TiStarOutline } from "react-icons/ti";

import Button from "../components/Button";
import Starred from "../pages/Starred";

import "../styles/components/ProfileUser.scss";

const ProfileUser = () => {
  return (
    <div className="profile-content">
      <div className="wrap">
        <img src="https://github.com/daniel-silva-dxp.png" alt="Profile" />
        <div className="profile-user">
          <strong>Daniel Silva</strong>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <p>daniel-silva-dxp</p>
          </a>
          <nav>
            <ul>
              <li>
                <Link to="repos">
                  <TiFolderOpen />
                  <span>Repos</span>
                </Link>
              </li>
              <li>
                <Link to="starred">
                  <TiStarOutline />
                  <span>Starreds</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <p>
        Developing has become a favorite hobby and eventually like to
        philosophize about life with a beer (🍺).
      </p>

      <Routes>
        <Route path="repos" element={<Button>REPOS</Button>} />
        <Route path="starred" element={<Starred />} />
      </Routes>
    </div>
  );
};

export default ProfileUser;
