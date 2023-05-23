import React from "react";
import { BsFacebook } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

export const FooterComp = () => {
  return (
    <div className="h-[50%] px-20 py-0 bg-slate-600 ">
      <div class="grid grid-cols-4 gap-10 h-[90%] text-white ">
        <div>
        <br></br>
          <p className="text-2xl font-bold">TraGoS</p>
          <p className="text-sm">BUDGET</p>
          <p className="mt-5 text-sm">
          TraGoS is a website that compares flight rates and helps you book the cheapest flight available.
          "YAIFARE"{" "}
          </p>
          <div className="flex h-14 items-center">
            <a href="#">
              <BsFacebook size={20} />
            </a>
            <a href="#">
              {" "}
              <AiFillTwitterCircle size={20} className="ml-2" />
            </a>
            <a href="#">
              {" "}
              <AiFillInstagram size={20} className="ml-2" />
            </a>
            <a href="#">
              {" "}
              <AiFillLinkedin size={20} className="ml-2" />
            </a>
          </div>
        </div>
        <div>
        <br></br>
          <p className="text-2xl font-bold">Get in Touch</p>
          <p className="text-sm">BUDGET</p>
          <div className="items-center mt-10">
            <p className="text-sm ml-2">Phone: +91 76290 49930</p>
            <p className="text-sm ml-2">Email: jotikbom@gmail.com</p>
          </div>
        </div>
        <div>
        <br></br>
          <p className="text-2xl font-bold">Flights</p>
          <div className="items-center mt-10">
            <p className="text-sm ml-2">Asia</p>
            <p className="text-sm ml-2">Africa</p>
            <p className="text-sm ml-2">Europe</p>
            <p className="text-sm ml-2">North America</p>
            <p className="text-sm ml-2">South America</p>
          </div>
        </div>
        <div>
        <br></br>
          <p className="text-2xl font-bold">Useful Links</p>
          <div className="items-center mt-10">
            <p className="text-sm ml-2">Contact Us</p>
            <p className="text-sm ml-2">About Us</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between w-full text-white mt-1 text-sm h-[10%]">
        <p>All Rights Reserved</p>
        <p>Terms and Conditions - Privacy policy</p>
      </div>
    </div>
  );
};
