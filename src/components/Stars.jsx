import React from "react";
import "./Stars.css";
import Star from "../images/icon-star.svg";

const Stars = ({ number }) => {
  return (
    <div className="stars">
      <img src={Star} alt="/" />
    </div>
  );
};

export default Stars;
