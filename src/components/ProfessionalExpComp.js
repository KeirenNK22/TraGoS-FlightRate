import React from "react";
import { ButtonYellowComp } from "./ButtonYellowComp";
import traimg from "../assets/fly.jpeg";

export const ProfessionalExpComp = () => {
  return (
    <div className="h-[80%] px-20 py-[140px]">
      <div class="grid grid-cols-2 gap-5 h-[90%]">
          <div
            className="bg-contain w-[250px]"
            style={{
              backgroundImage: `url("${traimg}")`,
            }}
          ></div>
        <div>
          <div>
            <div>
              <p className="text-sm">BEST CHOICE</p>
              <p className="text-3xl mt-1">
                We Are Very Reliable<br></br>
                <span className="text-[#3781c5]">
                  {" "}
                  Professional, Experienced
                </span>
              </p>
            </div>
          </div>

          <p className="mt-3">
          TraGoS is a website that compares flight rates and helps you book the cheapest flight available.
          </p>
          <p className="mt-5">
          TraGoS is a flight rate comparison website that enables you to quickly
          and easily find the lowest available flight rates. 
          With its intuitive interface and up-to-date data, 
          TraGoS simplifies the flight booking process 
          and helps you save time and money on your travels.
          </p>
          <div className="flex">
            <ButtonYellowComp label={"Read More"} extraStyle={"mt-10"} />
          </div>
        </div>
      </div>
    </div>
  );
};
