import React from "react";

import "../styles/components/Header.scss";

const Header = () => {
  return (
    <header>
      <div className="logo">git.app</div>
      <div className="avatar-content">
        <div className="circle">
          <img
            src="https://avatars.githubusercontent.com/u/16245261?v=4"
            alt="User"
            title="User Photo"
          />
        </div>
        <h4>Daniel Silva</h4>
      </div>
    </header>
  );
};

export default Header;
