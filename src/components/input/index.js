import React from "react";

import "./main.css";

const Input = ({ type, name, value, placeholder, handleChange }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default Input;
