import React from 'react'

export default function StepContainer({children , isActive, step}) {
  return (
    <div
      className={`transition-all  ${
        isActive === step
          ? "visible scale-100"
          : "invisible scale-0 pointer-events-none absolute"
      }`}
    >
        {children}
    </div>
  )
}
