import React, { useEffect, useRef, useState } from "react";
import StepContainer from "./StepContainer";
import StepHeader from "./stepHeader";

export default function StepThree({
  isActive,
  add_on_data,
  Monthly,
  addOn,
  setAddOn,
}) {
  return (
    <StepContainer isActive={isActive} step={3}>
      <StepHeader
        title="Pick add-ons"
        description="Add-ons help enhance your gaming experience."
      />
      <div className="flex flex-col gap-5 pt-5">
        {add_on_data.map((el) => (
          <Card
            key={el.id}
            id={el.id}
            title={el.title}
            description={el.description}
            price={Monthly ? el.mo_price : el.yr_price}
            Monthly={Monthly}
            addOn={addOn}
            setAddOn={setAddOn}
          />
        ))}
      </div>
    </StepContainer>
  );
}

const Card = function ({ id, title, description, price, Monthly, setAddOn }) {
  const [isActive, setisActive] = useState(false);
  const handleChange = function (e) {
    let val = e.target.checked;
    setisActive(val);
    setAddOn({ id, val, title, description, price });
  };

  return (
    <label
      htmlFor={id}
      className={`${
        isActive ? "bg-Magnolia border-blue-purplish" : ""
      } hover:border-blue-purplish flex items-center justify-between border-[.5px] rounded-md p-4 cursor-pointer`}
    >
      <div className="flex gap-4">
        <input
          onChange={handleChange}
          id={id}
          className="caret-blue-purplish"
          type="checkbox"
        />
        <div className="capitalize">
          <p className="text-sm lg:text-md font-bold text-blue-marine">
            {title}
          </p>
          <p className="text-xs lg:text-sm text-gray-cool">{description}</p>
        </div>
      </div>
      <p className="text-blue-purplish text-xs lg:text-sm">
        +${price}/{Monthly ? "mo" : "yr"}
      </p>
    </label>
  );
};
