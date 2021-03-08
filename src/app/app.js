import React from "react";
import Button from "../components/button";
import Checkbox from "../components/checkbox";
import Input from "../components/input/input";
import Radio from "../components/radio";
import SelectComponent from "../components/select";
import Textarea from "../components/textarea/input";
import "./App.css";

const App = () => {
  const technology = ["Javascript", "Reactjs", "React Native", "Nodejs"];

  const [inputValues, setInputValues] = React.useState({
    name: "",
    email: "",
    password: "",
    city: "Select your city",
    gender: "",
    technology: [],
    message: "",
  });

  const [radioValue, setRadioValue] = React.useState("");
  const [checkboxValue, setCheckboxValue] = React.useState([]);

  const handleInputChange = ({ target }) => {
    setInputValues({ ...inputValues, [target.name]: target.value });
    console.log(inputValues);
  };

  return (
    <main className="main display-flex align-items-center justify-content-center flex-direction-column">
      <h1>Welcome</h1>
      <div className="content-form">
        <form>
          <Input
            type="text"
            name="name"
            value={inputValues.name}
            onChange={handleInputChange}
            placeholder="Enter with your name"
          />
          <Input
            type="email"
            name="email"
            value={inputValues.email}
            onChange={handleInputChange}
            placeholder="Enter with your email"
          />
          <Input
            type="password"
            name="password"
            value={inputValues.password}
            onChange={handleInputChange}
            placeholder="Enter with your password"
          />
          <SelectComponent
            value={inputValues.city}
            onChange={handleInputChange}
          />
          <Radio
            value={radioValue}
            name="gender"
            options={["sim", "não"]}
            setValue={setRadioValue}
          />
          <Checkbox
            options={technology}
            value={checkboxValue}
            setValue={setCheckboxValue}
          />

          <Textarea placeholder="Enter with your message" />
          <Button>Submit</Button>
        </form>
      </div>
    </main>
  );
};

export default App;
