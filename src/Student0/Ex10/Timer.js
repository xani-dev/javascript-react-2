import React from "react";

import { useState } from "react";

export const Timer = () => {
  let [time1, setTime1] = useState(null);
  let [result, setResult] = useState();
  let [text, setText] = useState("Stopped");

  const onHandleClick = () => {
    if (time1 == null) {
      setResult("");
      setTime1(new Date());
      setText("Started...");
    } else {
      let delta = (new Date().getTime() - time1.getTime()) / 1000;
      setResult(delta + " seconds");
      setTime1(null);
      setText("Stopped");
    }
  };

  return (
    <div className="Main">
      <button onClick={() => onHandleClick()}>{text}</button>
      <br />
      Elasped Time: {result}
    </div>
  );
};
