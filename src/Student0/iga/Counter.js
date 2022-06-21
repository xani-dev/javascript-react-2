import React from 'react'
import { useState } from 'react'

import './Counter.scss'

export const Counter = () => {
    let [counter, setCounter] = useState(0)

    const onHandleClick = (value) => {
      setCounter(counter += value)
    }
  
    const onHandleReset = () => {
      setCounter(0)
    }
  
    return (
      <div>
          <button className="button" onClick={() => onHandleClick(1)}>Increment by 1</button>
          <br />
          <button className="button" onClick={() => onHandleClick(10)}>Increment by 10</button>
          <br/>
          <button className="button" onClick={() => onHandleReset()}>Reset</button>
          <br/>
          Counter: {counter}
      </div>
    )
}
