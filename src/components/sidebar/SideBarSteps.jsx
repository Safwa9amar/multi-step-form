import React from 'react'
import Step from './Step'

export default function SideBarSteps({isActive, setStep,stepCheck}) {
  return (
    <div className='flex lg:flex-col gap-5 p-5 justify-center lg:justify-start bg-sidebar-sm md:bg-sidebar-lg w-full h-1/4 rounded-md lg:h-full lg:w-1/4 bg-no-repeat bg-cover'>
    <Step stepCheck={stepCheck} setStep={setStep} isActive={isActive === 1} step={1} title={"your info"} />
    <Step stepCheck={stepCheck} setStep={setStep} isActive={isActive === 2} step={2} title={"select plan"} />
    <Step stepCheck={stepCheck} setStep={setStep} isActive={isActive === 3} step={3} title={"add-on"} />
    <Step stepCheck={stepCheck} setStep={setStep} isActive={isActive === 4} step={4} title={"summary"} />
  </div>
  )
}
