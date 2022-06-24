import React from "react";
import { useState } from "react";
import "./Counter.scss";

export const Counter = () => {
  let [counter1, setCounter1] = useState(0);
  let [counter2, setCounter2] = useState(0);

  const onClick1 = () => {
    setCounter1(counter1 + 1);
  };

  const onClick2 = () => {
    setCounter2(counter2 + 10);
  };

  const reset1 = () => {
    setCounter1(0);
  };
  const reset2 = () => {
    setCounter2(0);
  };

  return (
    <div className="Counter">
      <button className="button" onClick={() => onClick1()}>
        Increment by 1
      </button>
      <br></br>
      <button className="button" onClick={() => onClick2()}>
        Increment by 10
      </button>
      <br></br>
      <button
        className="button"
        onClick={() => {
          reset1();
          reset2();
        }}
      >
        Reset
      </button>
      <div>Counter:{counter1 + counter2}</div>
    </div>
  );
};
