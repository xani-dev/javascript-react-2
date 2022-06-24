import React from 'react'
import { useState } from 'react'
import './Counter.css'

export const Counter = () => {
    const [counter, setCounter] = useState(0);
    const increment = () => {
        setCounter(counter + 1)
    }

    const incrementTen = () => {
        setCounter(counter + 10)
    }

    const onReset = () => {
        setCounter(0);
    }

  return (
    <div>
        <button onClick={increment}>Increment by 1</button>
        <br/>
        <button onClick={incrementTen}>Increment by 10</button>
        <br/>
        <button onClick={onReset}>Reset</button>
        <br/>
        Counter: {counter}

    </div>
  )
}
