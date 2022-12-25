import React, { useState } from "react";
import Back from "./Back";
import Button from "./Button";
import Stars from "./Stars";
import "./Front.css";

const Front = () => {
  const [toggle, setToggle] = useState(false);
  const [items, setItems] = useState("");

  return (
    <>
      {!toggle ? (
        <div className="container">
          <Stars />
          <div className="main_text">
            <h1 className="heading">How did we do?</h1>
            <p className="secondary_text">
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>
          </div>
          <div className="list">
            <ul className="rating">
              <li>
                <Button setItems={setItems} number={1} />
              </li>
              <li>
                <Button setItems={setItems} number={2} />
              </li>
              <li>
                <Button setItems={setItems} number={3} />
              </li>
              <li>
                <Button setItems={setItems} number={4} />
              </li>
              <li>
                <Button setItems={setItems} number={5} />
              </li>
            </ul>
          </div>
          <button className="btn" onClick={() => setToggle(true)}>
            SUBMIT
          </button>
        </div>
      ) : (
        <Back items={items} />
      )}
    </>
  );
};

export default Front;
