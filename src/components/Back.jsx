import React from "react";
import "./Back.css";
import POS from "../images/illustration-thank-you.svg";
const Back = ({ items }) => {
  return (
    <div className="container back">
      <div className="img">
        <img src={POS} alt="/" />
      </div>
      <div className="back_text">
        <p className="selected">You selected {items} out of 5</p>
        <h1 className="heading">Thank you!</h1>
        <p className="secondary_text bottom">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </div>
  );
};

export default Back;
