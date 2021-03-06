import React from "react";
import Input from "../components/input";
import Radio from "../components/radio";
import "./App.css";

const fields = [
  {
    id: "name",
    name: "name",
    type: "text",
  },
  {
    id: "email",
    name: "email",
    type: "email",
  },
  {
    id: "password",
    name: "password",
    type: "password",
  },
  {
    id: "zipCode",
    name: "zipCode",
    type: "text",
  },
  {
    id: "street",
    name: "street",
    type: "text",
  },
  {
    id: "number",
    name: "number",
    type: "text",
  },
  {
    id: "district",
    name: "district",
    type: "text",
  },
  {
    id: "city",
    name: "city",
    type: "text",
  },
  {
    id: "state",
    name: "state",
    type: "text",
  },
];

const App = () => {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    password: "",
    zipCode: "",
    street: "",
    number: "",
    district: "",
    city: "",
    state: "",
  });

  const [response, setResponse] = React.useState(null);
  const [radio, setRadio] = React.useState("");

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value });
  };

  const handleChangeRaio = ({ target }) => {
    setRadio(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const headers = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    };
    fetch("https://ranekapi.origamid.dev/json/api/usuario", headers).then(
      (response) => {
        setResponse(response);
      }
    );
  };

  return (
    <React.Fragment>
      <h1>Trabalhando com inputs</h1>
      <form onSubmit={handleSubmit} method="GET">
        {fields.map(({ id, name, type }) => {
          return (
            <Input
              key={id}
              type={type}
              name={name}
              value={form[name]}
              placeholder={`Enter with your ${name}`}
              handleChange={handleChange}
            />
          );
        })}
        <label>
          <Radio name="questionario" value="sim" onChange={handleChangeRaio} />
          SIM
        </label>
        <label>
          <Radio name="questionario" value="não" onChange={handleChangeRaio} />
          NÃO
        </label>
        {radio}
        <button className="btn btn-medium btn-dark">Register</button>
      </form>
    </React.Fragment>
  );
};

export default App;
