import React from "react";
import StepContainer from "./StepContainer";
import StepHeader from "./stepHeader";

export default function StepFour({
  isActive,
  Plane,
  addOnData,
  Monthly,
  setValStep,
}) {
  return (
    <StepContainer isActive={isActive} step={4}>
      <StepHeader
        title="Finishing up"
        description="Double-check everything looks OK before confirming."
      />
      <div className="bg-Magnolia rounded-md p-4 capitalize lg:w-4/5 my-5">
        <div className="flex justify-between">
          <p className="font-bold text-blue-marine text-sm lg:text-md">
            {Plane?.title} {Monthly ? "Monthly" : "Yearly"}
          </p>
          <p className="font-bold text-blue-marine text-sm lg:text-md">
            {Plane?.price}
          </p>
        </div>
        <button
          onClick={() => {
            setValStep(2);
          }}
          className="text-sm underline text-gray-cool"
        >
          change
        </button>

        <hr className="my-4" />
        <div className="flex flex-col gap-3">
          {addOnData.map((el) => {
            return (
              <div className="text-sm text-gray-cool flex justify-between">
                <p>{el.title}</p>
                <p>
                  +{el.price}${Monthly ? "/mo" : "/yr"}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </StepContainer>
  );
}
