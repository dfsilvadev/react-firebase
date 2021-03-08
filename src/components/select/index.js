import React from "react";

import "./main.css";

const options = ["São Paulo", "Los Angeles", "New York"];

const SelectComponent = ({ value, onChange }) => {
  return (
    <select name="city" value={value} onChange={onChange}>
      <option disabled>Select your city</option>
      {options.map((city) => {
        return (
          <option key={city} value={city}>
            {city}
          </option>
        );
      })}
    </select>
  );
};

export default SelectComponent;
