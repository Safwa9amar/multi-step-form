import React, { useState } from "react";
import StepHeader from "./stepHeader";
import Toggle from "../Toggle";
import StepContainer from "./StepContainer";

export default function StepTwo({ isActive, data, setMonthly, setYearly, setPlane }) {
  const [Arcade, setArcade] = useState(false);
  const [Advanced, setAdvanced] = useState(false);
  const [Pro, setPro] = useState(false);
  const selectArcade = function () {
    setAdvanced(false);
    setPro(false);
    setArcade(true);
    setPlane(data[0])
  };
  const selectAdvanced = function () {
    setAdvanced(true);
    setPro(false);
    setArcade(false);
    setPlane(data[1])

  };
  const selectPro = function () {
    setAdvanced(false);
    setPro(true);
    setArcade(false);
    setPlane(data[2])

  };
  return (
    <StepContainer isActive={isActive} step={2}>
      <StepHeader
        title="Select your plan"
        description="You have the option of monthly or yearly billing."
      />
      <div className="flex flex-col lg:flex-row justify-evenly gap-6 w-full pt-5 ">
        {data.map((el, idx) => (
          <Card
          key={el.id}
            disc={el?.disc}
            select={
              idx === 0
                ? selectArcade
                : idx === 1
                ? selectAdvanced
                : idx === 2
                ? selectPro
                : ""
            }
            isActive={
              idx === 0 ? Arcade : idx === 1 ? Advanced : idx === 2 ? Pro : ""
            }
            price={el.price}
            title={el.title}
            icon={
              idx === 0 ? (
                <ArcadeIco />
              ) : idx === 1 ? (
                <AdvancedIco />
              ) : idx === 2 ? (
                <ProIcon />
              ) : (
                ""
              )
            }
          />
        ))}
      </div>
      <Toggle setMonthly={setMonthly} setYearly={setYearly} />
    </StepContainer>
  );
}

const AdvancedIco = function () {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
    >
      <g fill="none" fillRule="evenodd">
        <circle cx="20" cy="20" r="20" fill="#F9818E" />
        <path
          fill="#FFF"
          fillRule="nonzero"
          d="M25.057 15H14.944C12.212 15 10 17.03 10 19.885c0 2.857 2.212 4.936 4.944 4.936h10.113c2.733 0 4.943-2.08 4.943-4.936S27.79 15 25.057 15ZM17.5 20.388c0 .12-.108.237-.234.237h-1.552v1.569c0 .126-.138.217-.259.217H14.5c-.118 0-.213-.086-.213-.203v-1.583h-1.569c-.126 0-.217-.139-.217-.26v-.956c0-.117.086-.213.202-.213h1.584v-1.554c0-.125.082-.231.203-.231h.989c.12 0 .236.108.236.234v1.551h1.555c.125 0 .231.083.231.204v.988Zm5.347.393a.862.862 0 0 1-.869-.855c0-.472.39-.856.869-.856.481 0 .87.384.87.856 0 .471-.389.855-.87.855Zm1.9 1.866a.86.86 0 0 1-.87-.852.86.86 0 0 1 .87-.855c.48 0 .87.38.87.855a.86.86 0 0 1-.87.852Zm0-3.736a.862.862 0 0 1-.87-.854c0-.472.39-.856.87-.856s.87.384.87.856a.862.862 0 0 1-.87.854Zm1.899 1.87a.862.862 0 0 1-.868-.855c0-.472.389-.856.868-.856s.868.384.868.856a.862.862 0 0 1-.868.855Z"
        />
      </g>
    </svg>
  );
};

const ProIcon = function () {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
    >
      <g fill="none" fillRule="evenodd">
        <circle cx="20" cy="20" r="20" fill="#483EFF" />
        <path
          fill="#FFF"
          fillRule="nonzero"
          d="M26.666 13H13.334A3.333 3.333 0 0 0 10 16.333v7.193a3.447 3.447 0 0 0 2.14 3.24c1.238.5 2.656.182 3.56-.8L18.52 23h2.96l2.82 2.966a3.2 3.2 0 0 0 3.56.8 3.447 3.447 0 0 0 2.14-3.24v-7.193A3.333 3.333 0 0 0 26.666 13Zm-9.333 6H16v1.333a.667.667 0 0 1-1.333 0V19h-1.333a.667.667 0 0 1 0-1.334h1.333v-1.333a.667.667 0 1 1 1.333 0v1.333h1.333a.667.667 0 1 1 0 1.334Zm7.333 2a2.667 2.667 0 1 1 0-5.333 2.667 2.667 0 0 1 0 5.333ZM26 18.333a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0Z"
        />
      </g>
    </svg>
  );
};

const ArcadeIco = function () {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
    >
      <g fill="none" fillRule="evenodd">
        <circle cx="20" cy="20" r="20" fill="#FFAF7E" />
        <path
          fill="#FFF"
          fillRule="nonzero"
          d="M24.995 18.005h-3.998v5.998h-2v-5.998H15a1 1 0 0 0-1 1V29a1 1 0 0 0 1 1h9.995a1 1 0 0 0 1-1v-9.995a1 1 0 0 0-1-1Zm-5.997 8.996h-2v-1.999h2v2Zm2-11.175a2.999 2.999 0 1 0-2 0v2.18h2v-2.18Z"
        />
      </g>
    </svg>
  );
};

export function Card({ title, icon, price, disc, isActive, select }) {
  return (
    <button
      onClick={select}
      className={`${
        isActive ? "bg-Magnolia border-blue-purplish" : ""
      } w-full lg:h-[140px] lg:!w-[120px] p-2 border-[.5px] rounded-md  flex gap-4 lg:flex-col items-center md:items-start lg:justify-between hover:border-[1px] hover:border-gray-cool cursor-pointer `}
    >
      {icon}
      <div className="capitalize flex flex-col items-start">
        <p className="font-bold text-blue-marine text-sm lg:text-lg">{title}</p>
        <p className="text-gray-cool text-xs lg:text-sm">{price}</p>
        <p className="text-xs lg:text-sm text-blue-marine">{disc}</p>
      </div>
    </button>
  );
}