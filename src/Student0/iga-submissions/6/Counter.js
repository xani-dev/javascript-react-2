import { React, useState } from 'react'
import './Counter.scss'

export const Counter = () => {
  let [button1, setButton1] = useState(0);
  let [button2, setButton2] = useState(0);
  let [counter, setCounter] = useState(0);

  const Add1 = () => {
    setButton1(++button1);
    setCounter(++counter);
  }

  const Add10 = () => {
    setButton2(button2 + 10);
    setCounter(counter + 10);
  }

  const Reset = () => {
    setCounter(0);

  }

  return (
    <div>
      <button onClick={Add1}>Increment by 1</button><br />
      <button onClick={Add10}>Increment by 10</button><br />
      <button onClick={Reset}>Reset</button>
      <br /> Counter: {counter}
    </div>
  )
}