import React from "react";

export const HeaderNavComp = () => {
  return (
    <div className="grid px-10 grid-cols-4 gap-3">
      <div className="flex justify-center col-span-1 p-5 items-center">
        <div>
          <p className="text-5xl font-bold text-white px-20">TraGoS</p>
          <p className="text-1xl font-bold text-white text-center">BUDGET</p>
        </div>
      </div>
      <div className="col-span-3 p-2 flex justify-end items-center ">
        <a href="index.html">
          <div className="hover:border-b-[2px] hover:border-b-yellow-400 pb-2">
            <p className="text-white">HOME</p>
          </div>
        </a>
        <a href="index.html" className="ml-5">
          <div className="hover:border-b-[2px] hover:border-b-yellow-400 pb-2">
            <p className="text-white">ABOUT US</p>
          </div>
        </a>
        <a href="index.html" className="ml-5">
          <div className="hover:border-b-[2px] hover:border-b-yellow-400 pb-2">
            <p className="text-white">BOOKING TERMS</p>
          </div>
        </a>
        <a href="index.html" className="ml-5">
          <div className="hover:border-b-[2px] hover:border-b-yellow-400 pb-2">
            <p className="text-white">FLIGHT</p>
          </div>
        </a>
        <a href="index.html" className="ml-5">
          <div className="hover:border-b-[2px] hover:border-b-yellow-400 pb-2">
            <p className="text-white">GET IN TOUCH</p>
          </div>
        </a>
        </div>
      </div>
  );
};
