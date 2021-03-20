import React from "react";

import "../styles/pages/Home.scss";

const Home = () => {
  return (
    <section className="container">
      <div className="content">
        <div className="display-count">
          <div className="repos-count box-count">
            <strong>Repositories</strong>
            <span>10</span>
          </div>
          <div className="starred-count box-count">
            <strong>Starreds</strong>
            <span>10</span>
          </div>
          <div className="fallowers-count box-count">
            <strong>Fallowers</strong>
            <span>10</span>
          </div>
          <div className="fallowing-count box-count">
            <strong>Fallowing</strong>
            <span>10</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
