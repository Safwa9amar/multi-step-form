import React, { useEffect, useState } from "react";
import Switch from "react-switch";

export default function Toggle({ setMonthly, setYearly }) {
  const [isActive, setisActive] = useState(false);

  useEffect(() => {
    if (isActive) {
      setMonthly(false);
      setYearly(true);
    } else {
      setMonthly(true);
      setYearly(false);
    }
  }, [isActive]);

  return (
    <div className="w-full bg-Magnolia flex  justify-center gap-6 p-2 my-2 scale-90 lg:m-4 rounded-md">
      <p
        className={`capitalize ${
          !isActive ? "text-blue-marine font-bold" : "text-gray-cool"
        } `}
      >
        monthly
      </p>
      <Switch
        uncheckedIcon={false}
        checkedIcon={false}
        onColor={"#02295a"}
        offColor={"#02295a"}
        onChange={() => {
          setisActive(!isActive);
        }}
        checked={isActive}
      />
      <p
        className={`capitalize ${
          isActive ? "text-blue-marine font-bold" : "text-gray-cool"
        } `}
      >
        yearly
      </p>
    </div>
  );
}
