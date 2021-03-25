import headerDevImg from "../../assets/dev.svg";
import { Header } from "./styles";

const HeaderHome = () => {
  return (
    <Header>
      <div className="title">
        <h1>Hi, Daniel Silva!</h1>
        <h4>welcome to git.app</h4>
        <p>
          An application developed in react and integrated with the github API
        </p>
      </div>
      <div className="wrap-image">
        <img src={headerDevImg} alt="Developer" />
      </div>
    </Header>
  );
};

export default HeaderHome;
