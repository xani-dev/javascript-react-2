import React from 'react'
import './Main.scss'

import { useState } from 'react'

export const Main = () => {
  let [counter, setCounter] = useState(0)

  const onHandleClick = (direction) => {
    if (direction === "up") {
      setCounter(++counter)
    } else {
      setCounter(--counter)
    }
  }

  return (
    <div className="Main">
        <button onClick={() => onHandleClick("down")}>Down</button>
        {counter}
        <button onClick={() => onHandleClick("up")}>Up</button>
    </div>
  )
}
