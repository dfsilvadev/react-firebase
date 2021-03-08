import React from "react";

import "./main.css";

const Textarea = ({ placeholder }) => {
  return (
    <textarea
      name=""
      id=""
      cols="30"
      rows="10"
      placeholder={placeholder}
    ></textarea>
  );
};

export default Textarea;
