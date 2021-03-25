import headerDevImg from "../../assets/dev.svg";

const HeaderHome = () => {
  return (
    <header>
      <div className="title">
        <h1>Hi, Daniel Silva!</h1>
        <h4>welcome to git.app</h4>
        <p>
          An application developed in react that, integrated with the github
          API, allows you to view your profile data. Want to know more?
        </p>
      </div>
      <div className="wrap-image">
        <img src={headerDevImg} alt="Developer" />
      </div>
    </header>
  );
};

export default HeaderHome;
