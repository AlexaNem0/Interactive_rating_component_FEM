import React from "react";
import Star from "../images/icon-star.svg";
import "./Front.css";
const Front = () => {
  return (
    <div className="container">
      <div className="stars">
        <img src={Star} alt="/" />
      </div>
      <div className="main_text">
        <h1 className="heading">How did we do?</h1>
        <p className="secondary_text">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>
      <div className="list">
        <ul className="rating">
          <li className="list_item">1</li>
          <li className="list_item">2</li>
          <li className="list_item">3</li>
          <li className="list_item">4</li>
          <li className="list_item">5</li>
        </ul>
      </div>
      <button className="btn">SUBMIT</button>
    </div>
  );
};

export default Front;
