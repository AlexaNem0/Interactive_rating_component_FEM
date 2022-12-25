import React from "react";
import "./Button.css";

const Button = ({ number, setItems }) => {
  return (
    <button onClick={() => setItems(number)} className="btn-number ">
      {number}
    </button>
  );
};

export default Button;
