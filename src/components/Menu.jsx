import React from "react";
import { IoMdArrowForward } from "react-icons/io";
import Darkmode from "./Darkmode";

const Menu = () => {
  return (
    <div>
      <div className="w-[280px] flex flex-col items-start gap-3 mt-5 bg-base-300 p-5 rounded-md">
        <Darkmode />
        <div className=" flex items-center justify-between hover:text-blue-700 w-full">
          <p className=" cursor-pointer hover:underline  text-left">Profile</p>
          <IoMdArrowForward />
        </div>
        <div className="">
          <button>Log Out</button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
