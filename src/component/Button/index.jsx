import React from "react";
import "./index.css"; // Make sure to create a corresponding CSS file

const ButtonPrimary = ({ onClick, style = {}, text = "" }) => {
  return (
    <button className="demoButton" onClick={onClick} style={{ ...style }}>
      {text}
    </button>
  );
};

export default ButtonPrimary;
