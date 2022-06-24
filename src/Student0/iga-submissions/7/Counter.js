import React from "react";
import "./Counter.scss";
import { useState } from "react";

export const Counter = () => {
  let [count, setCount] = useState(0);

  const onHandleClick = (command) => {
    if (command === "add") {
      setCount(++count);
    }
  };

  const onHandleClick2 = (command) => {
    if (command === "ten") {
      setCount(count + 10);
    }
  };

  const onHandleClick3 = (command) => {
    if (command === "reset") {
      setCount(0);
    }
  };

  return (
    <div>
      <button className="Buttons" onClick={() => onHandleClick("add")}>
        Increment By 1
      </button>
      <br />
      <button className="Buttons" onClick={() => onHandleClick2("ten")}>
        Increment By 10
      </button>
      <br />
      <button className="Buttons" onClick={() => onHandleClick3("reset")}>
        Reset
      </button>
      <br />
      Counter: {count}
    </div>
  );
};
