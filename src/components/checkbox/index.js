import React from "react";

const Checkbox = ({ options, value, setValue }) => {
  const handleChange = ({ target }) => {
    return target.checked
      ? setValue([...value, target.value])
      : setValue(value.filter((option) => option !== target.value));
  };

  return (
    <>
      {options.map((option) => (
        <label key={option}>
          <input
            type="checkbox"
            value={option}
            checked={value.includes(option)}
            onChange={handleChange}
          />
          {option}
        </label>
      ))}
    </>
  );
};

export default Checkbox;
