import React from 'react'
import { useState } from 'react'



export const Counter = () => {
    let [count, setCount] = useState(0)

    const incrementCountOne = () => {
        setCount(++count)
    }

    const incrementCountTen = () => {
        setCount(count + 1)
    }

    const resetHandler = () => {
        addString([]);
        numAdd(0)
    }

    return (
        <div className="Main">
            <button onClick={incrementCountOne}> Increment by 1 </button> <br />
            <button onClick={incrementCountTen}> Increment by 10 </button> <br />
            <button onClick={resetHandler}> Reset </button> <br />
            Counter: {count}
        </div>
    )

}