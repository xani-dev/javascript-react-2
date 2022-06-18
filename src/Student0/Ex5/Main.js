import React from 'react'
import './Main.scss'

import { useState } from 'react'

export const Main = () => {

  let [counter, setCounter] = useState(0)

  return (
    <div className="Main">
      {counter}
      <button onClick={() => console.log('here')}>Push</button>
    </div>
  )
}
