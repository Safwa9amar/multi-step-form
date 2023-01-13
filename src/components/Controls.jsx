import React from "react";

export default function Controls({
  prevValStep,
  nextValStep,
  stepCheck,
  ValStep,
}) {
  return (
    <div
      className={`
    ${ValStep === 1 ? "justify-end" : "justify-between"}
    lg:self-start flex  w-full my-4 `}
    >
      {ValStep !== 1 && (
        <button
          onClick={prevValStep}
          className="font-bold text-blue-marine text-sm lg:text-md"
        >
          Go back
        </button>
      )}
      <button
        onClick={nextValStep}
        className={`
       shadow-sm
       hover:shadow-lg
       transition-all
       ${ValStep === 4 ? "bg-blue-purplish" : ""}
        ${
          stepCheck
            ? "bg-blue-marine"
            : "pointer-events-none cursor-not-allowed bg-blue-purplish"
        }  text-white  p-2 rounded-md capitalize text-sm lg:text-md`}
      >
        {ValStep === 4 ? "confirm" : "next step"}
      </button>
    </div>
  );
}
