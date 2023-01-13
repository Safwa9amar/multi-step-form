import React, { useEffect, useRef } from "react";
import { FormControl } from "../InputGroupe";
import StepContainer from "./StepContainer";
import StepHeader from "./stepHeader";

export default function StepOne({ isActive ,
  setName,
  setEmail,
  setPhone,
}) {
 


  return (
    <StepContainer isActive={isActive} step={1}>
      <StepHeader
        title="Personal info"
        description="Please provide your name, email address, and phone number."
      />

      <form>
        <FormControl
          handleChange={setName}
          type="text"
          label={"Name"}
          placeholder={"e.g. Stephen King"}
        />
        <FormControl
          handleChange={setEmail}
          type="email"
          label={"Email Address"}
          placeholder={"e.g. stephenking@lorem.com"}
        />
        <FormControl
          handleChange={setPhone}
          type="Tel"
          label={"Phone Number"}
          placeholder={"e.g. +1 234 567 890"}
        />
      </form>
    </StepContainer>
  );
}
