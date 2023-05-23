import React ,{useState}from "react";
import { InputTextComp } from "./InputTextComp";
import { IoIosAirplane } from "react-icons/io";
import { AiOutlineCalendar } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import { ButtonYellowComp } from "./ButtonYellowComp";

export const FlightBookingFormComp = () => {
  
  const[make,maekvisible]=useState(false);
  function handlefunction(event){
  
  maekvisible(event.target.value==="30");
  console.log(make)
  
  }
  return (
    <div className="bg-white pb-4 w-[40%] p-3 rounded-2xl absolute bottom-15 shadow shadow-red-900">
      <div className="p-1">
        <p className="font-semibold">
          Book Cheap <span className="text-yellow-400">Flights</span>
        </p>
      </div>
      <div className="flex bg-black text-white justify-center py-3 ">
        <div className="flex" >
          <input
            className="text-white"
            type="radio"
            id="age1"
            name="age"
            value="30"
            onChange={handlefunction}
          
          />
          <p className="text-sm ml-3">One Way</p>
        </div>
        <div className="flex ml-3">
          <input
            className="text-white"
            type="radio"
            id="age2"
            name="age"
            value="31"
            onChange={handlefunction}
           
          />
          <p className="text-sm ml-3 text-yellow-400">Round Trip</p>
        </div>
      </div>
      <div className="p-5">
        <InputTextComp
          image={<IoIosAirplane />}
          placeholder={"Enter City/Airport"}
          label="Departure"
          readonly1={false}
        />
        <InputTextComp
          image={<IoIosAirplane />}
          placeholder={"Enter City/Airport"}
          label="Arrival"
          extraStyle={"mt-2"}
          readonly1={false}
        />
        <InputTextComp
          image={<AiOutlineCalendar />}
          placeholder={"Depart Date"}
          label="Calender"
          extraStyle={"mt-2"}
          readonly1={false}
        />
        <InputTextComp 
          image={<AiOutlineCalendar />}
          placeholder={"Return Date"}
          label="Calender"
          extraStyle={"mt-2"}
          readonly1={make}
        />
        <InputTextComp
          image={<BsFillPersonFill />}
          placeholder={"Travellers"}
          label="Travellers"
          extraStyle={"mt-2"}
          readonly1={false}
        />
        <InputTextComp
          image={<BsFillTelephoneFill />}
          placeholder={"Phone"}
          label="Phone"
          extraStyle={"mt-2"}
          readonly1={false}
        />
        <InputTextComp
          image={<MdEmail />}
          placeholder={"Email"}
          label="Email"
          extraStyle={"mt-2"}
          readonly1={false}
        />
      </div>
      <div className="px-5">
        <ButtonYellowComp label={"FIND FLIGHTS"} extraStyle={"mt-3"} />
      </div>
    </div>
  );
};
