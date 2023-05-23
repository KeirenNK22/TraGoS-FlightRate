import React from "react";
import TRAGOimg from "../assets/tw.jpeg";
import { ButtonYellowComp } from "./ButtonYellowComp";
import { FlightBookingFormComp } from "./FlightBookingFormComp";
import { HeaderNavComp } from "./HeaderNavComp";

export const HeaderComp = () => {
  return (
    <div
      className="w-full h-[110%] bg-red-300 bg-contain"
      style={{
        backgroundImage: `url("${TRAGOimg}")`,
      }}
    >
      <HeaderNavComp />
      <div className="grid grid-cols-2 h-[80%]">
        <div className="flex p-5 items-center">
          <div>
            <p className="text-white text-xl">TraGoS BUDGET</p>
            <p className="text-white text-5xl">We Are Here For Your Service</p>
            <p className="text-yellow-400 text-3xl">
              Professional, Experienced, Reliable
            </p>
            <p className="text-white text-sm mt-3">
              <span className="text-yellow-400">TraGoS budget</span> is the
              versatile website expowering you
            </p>
            <p className="text-white text-sm">
              full services airline offering{" "}
              <span className="text-yellow-400">reduce fairs.</span>
            </p>
            <ButtonYellowComp label={"FIND FLIGHT"} extraStyle={"flex mt-5"} />
          </div>
        </div>
        <div className="flex">
          <FlightBookingFormComp />
        </div>
      </div>
    </div>
  );
};