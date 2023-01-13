import React, { useState } from 'react'

export default function Step({step, title , isActive, setStep, stepCheck}) {
  return (
    <div 
    // onClick={()=>{
    //   setStep(step)
    // }}
    className={`${stepCheck  ? "" : "pointer-events-none"} flex items-center gap-2`}>
        <div className={`${isActive ? 'bg-blue-light' : 'border-[.5px] border-white text-white'}  font-bold rounded-full w-10 h-10 text-center leading-10`}>{step}</div>
        <div className="hidden lg:flex flex-col  uppercase ">
            <span className='text-gray-cool w-fit'>step {step}</span>
            <h4 className='font-bold text-white text-sm '>{title}</h4>
        </div>
    </div>
  )
}
