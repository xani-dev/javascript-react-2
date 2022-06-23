import React from "react";

import { useState } from "react";

export const Timer = () => {
  let [result, setResult] = useState("");
  let [text, setText] = useState("Stopped");
  let [startTime, setStartTime] = useState(null);

  const onHandleClick = () => {
    if (startTime == null) {
      setResult("");
      setStartTime(new Date());
      setText("Started...");
    } else {
      let endTime = new Date();
      let delta = (endTime.getTime() - startTime.getTime()) / 1000;
      setResult(delta + " seconds");
      setStartTime(null);
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
