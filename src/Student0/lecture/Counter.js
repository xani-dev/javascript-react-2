import React from 'react'
import { useState } from 'react'

export const Counter = () => {
  let [counter, setCounter] = useState(0); 
  
  const onHandleClick = (direction) => {
    if (direction === "Inc") {
        setCounter(++counter) 
    } else {
        setCounter(--counter)
    }
  }

  return (
    <div>
        Counter: {counter}
        <br />
        <button onClick={() => onHandleClick('Inc')}>Inc</button>
        <button onClick={() => onHandleClick('Dec')}>Dec</button>
    </div>
  )
}

