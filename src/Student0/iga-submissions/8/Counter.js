import React, { useState } from 'react'
import "./Counter.scss"

export const Counter = () => {
    let [addTotal, setAddTotal] = useState(0)

    const addHandler = (value) => {
        if (value === 1) {
            setAddTotal(++addTotal)
        } else if (value === 10) {
            setAddTotal((addTotal) + 10)
        }
    }

    const addHandlerReset = () => {
        setAddTotal(0)
    }

    return (
        <div>
            <button onClick={() => addHandler(1)}>Increment by 1</button><br />
            <button onClick={() => addHandler(10)}>Increment by 10</button><br />
            <button onClick={() => addHandlerReset()}>Reset</button>
            <br />
            Total:  {addTotal}
        </div>
    )
}
