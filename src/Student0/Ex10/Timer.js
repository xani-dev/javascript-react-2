import React from "react";

import { useState } from "react";

export const Timer = () => {
  let [result, setResult] = useState("");
  let [buttonText, setButtonText] = useState("Stopped");
  let [startTime, setStartTime] = useState(null);

  const onHandleClick = () => {
    if (startTime == null) {
      setResult("");
      setStartTime(new Date());
      setButtonText("Started...");
    } else {
      let endTime = new Date();
      let delta = (endTime.getTime() - startTime.getTime()) / 1000;
      setResult(delta + " seconds");
      setStartTime(null);
      setButtonText("Stopped");
    }
  };

  return (
    <div className="Main">
      <button onClick={() => onHandleClick()}>{buttonText}</button>
      <br />
      Elasped Time: {result}
    </div>
  );
};
