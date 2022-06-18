import React from 'react'
import './Main.scss'

import { useState } from 'react'

export const Main = () => {
  let [date, setDate] = useState("Unknown")

  

  return (
    <div className="Main">
      <button onClick={() => console.log('here')}>Push</button>
    </div>
  )
}
