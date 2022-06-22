import React from 'react'
import { UpDownCounter } from './UpDownCounter'

import './Main.scss'

export const Main = () => {
  return (
    <div>
      <UpDownCounter value={11} />
      <UpDownCounter value={20} />
      <UpDownCounter value={30} />
      <UpDownCounter value="11" />
    </div>
  )
}
