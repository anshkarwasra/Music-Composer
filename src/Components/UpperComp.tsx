import React from 'react'
import { Knob } from './Knob'

export const UpperComp = () => {

  return (
    <>
      <div className="main bg-gray-800 h-1/2 w-full border border-[rgba(255,255,255,0.6)]">
        <Knob Size={20}></Knob>
      </div>
    </>
  )

}


