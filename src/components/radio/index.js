import React from "react";

const Radio = ({ options, value, setValue, ...props }) => {
  return (
    <>
      {options.map((option) => (
        <label key={option}>
          <input
            type="radio"
            value={option}
            onChange={({ target }) => setValue(target.value)}
            {...props}
          />
          <span style={{ textTransform: "capitalize", marginLeft: "5px" }}>
            {option}
          </span>
        </label>
      ))}
    </>
  );
};

export default Radio;
