import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiBell } from "react-icons/bi";

const ProfileAndNoti = () => {
  return (
    <div className="">
      <div className=" w-full h-[40px] rounded flex items-center justify-between gap-3  px-2 ">
        <div className=" flex justify-center items-center gap-2 relative">
          <BiBell className="w-[40px] h-[40px]  p-2" />
          <h5 className=" text-sm hidden md:flex lg:flex">NotiFications</h5>
          <div className="absolute bg-blue-700 rounded-full w-2 h-2 top-2 left-4"></div>
        </div>
        <span className=" text-white text-xs rounded-lg bg-sky-500 px-2 hidden lg:block md:block ">23</span>
        <AiOutlineClose className="hidden hover:flex" />
      </div>
    </div>
  );
};

export default ProfileAndNoti;
