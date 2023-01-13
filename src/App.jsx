import { useEffect, useState } from "react";
import "./App.css";
import Container from "./components/Container";
import Controls from "./components/Controls";
import SideBarSteps from "./components/sidebar/SideBarSteps";
import StepFour from "./components/steps/StepFour";
import StepOne from "./components/steps/StepOne";
import StepThree from "./components/steps/StepThree";
import StepTwo from "./components/steps/StepTwo";

const MonthlyData = [
  {
    id: 1,
    title: "arcade",
    price: "$9/mo",
  },
  {
    id: 2,
    title: "advanced",
    price: "$12/mo",
  },
  {
    id: 3,
    title: "pro",
    price: "$15/mo",
  },
];
const YearlyData = [
  {
    id: 1,
    title: "arcade",
    price: "$90/yr",
    disc: "2 months free",
  },
  {
    id: 2,
    title: "advanced",
    price: "$120/yr",
    disc: "2 months free",
  },
  {
    id: 3,
    title: "pro",
    price: "$150/mo",
    disc: "2 months free",
  },
];
let add_on_data = [
  {
    id: 1,
    title: "Online service",
    description: "Access to multiplayer games",
    mo_price: 1,
    yr_price: 10,
  },
  {
    id: 2,
    title: "Larger storage",
    description: "Extra 1TB of cloud save",
    mo_price: 2,
    yr_price: 20,
  },
  {
    id: 3,
    title: "Customizable Profile",
    description: "Custom theme on your profile",
    mo_price: 2,
    yr_price: 20,
  },
];

let addOnData = [];

function App() {
  const [ValStep, setValStep] = useState(1);

  const [stepCheck, setStepCheck] = useState(false);

  const [Monthly, setMonthly] = useState(false);
  const [Yearly, setYearly] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState(MonthlyData);
  const [Plane, setPlane] = useState(null);
  const [addOn, setAddOn] = useState({});
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");

  useEffect(() => {
    if (Name.length > 0 && Email.length > 0 && Phone.length > 0) {
      setStepCheck(true);
    } else {
      setStepCheck(false);
    }
  }, [Name, Email, Phone]);

  const nextValStep = () => {
    if (ValStep === 4) return;
    setValStep(ValStep + 1);
    // if (Plane && ValStep === 2) setStepCheck(false);
    if (addOnData.length === 0) setStepCheck(false);
  };
  const prevValStep = () => {
    if (ValStep === 1) return;
    setValStep(ValStep - 1);
    setStepCheck(true);
  };

  useEffect(() => {
    if (Plane) setStepCheck(true);
  }, [Plane]);

  useEffect(() => {
    if (addOn.val) addOnData.push(addOn);
    if (!addOn.val) addOnData.pop(addOn);

    if (addOnData.length > 0) setStepCheck(true);
    if (addOnData.length === 0) setStepCheck(false);
  }, [addOn]);

  useEffect(() => {
    if (Monthly) setSelectedOffer(MonthlyData);
    if (Yearly) setSelectedOffer(YearlyData);
  }, [Monthly, Yearly]);

  return (
    <Container>
      <div className="relative flex  gap-6 rounded-lg lg:bg-white lg:shadow-md w-full h-full lg:w-5/6 lg:h-5/6 p-4">
        <SideBarSteps
          stepCheck={stepCheck}
          setStep={setValStep}
          isActive={ValStep}
        />
        <div className="overflow-hidden flex flex-col justify-between absolute top-[20%] left-1/2 -translate-x-1/2 lg:static lg:translate-x-0  w-4/5 bg-white  p-6 rounded-md lg:p-14">
          <StepOne
            setName={setName}
            setEmail={setEmail}
            setPhone={setPhone}
            isActive={ValStep}
          />
          <StepTwo
            Monthly={Monthly}
            setMonthly={setMonthly}
            Yearly={Yearly}
            setYearly={setYearly}
            isActive={ValStep}
            data={selectedOffer}
            setPlane={setPlane}
          />
          <StepThree
            addOn={addOn}
            setAddOn={setAddOn}
            add_on_data={add_on_data}
            Monthly={Monthly}
            Yearly={Yearly}
            isActive={ValStep}
          />
          <StepFour
            Plane={Plane}
            addOnData={addOnData}
            Monthly={Monthly}
            isActive={ValStep}
            setValStep={setValStep}
          />
          <div className="hidden lg:block">
            <Controls
              stepCheck={stepCheck}
              nextValStep={nextValStep}
              prevValStep={prevValStep}
              ValStep={ValStep}
            />
          </div>
        </div>
      </div>
      <div className="lg:hidden absolute bottom-0 w-screen px-4 bg-white ">
        <Controls
          stepCheck={stepCheck}
          nextValStep={nextValStep}
          prevValStep={prevValStep}
          ValStep={ValStep}
        />
      </div>
    </Container>
  );
}

export default App;
