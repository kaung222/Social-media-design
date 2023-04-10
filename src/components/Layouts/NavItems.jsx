import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { FiHome, FiMessageCircle, FiUsers } from "react-icons/fi";
import { BsPlay, BsThreeDots } from "react-icons/bs";
const NavItems = () => {
  const [showNav, setShowNav] = useState(false);
  // window.onscroll(showNav(showNav(false)));
  // console.log(showNav);
  return (
    <div
      className={`lg:flex md:flex flex-col gap-2 ${
        showNav
          ? "flex mt-[298px] absolute right-0 bg-slate-300 p-6 py-10"
          : "hidden"
      }`}
    >
      <NavLink to="/">
        <div className=" w-full h-[40px] rounded flex items-center justify-between gap-3 px-2 hover:bg-base-300">
          <div className=" flex justify-center items-center gap-2">
            <FiHome className="w-[30px] h-[30px]  p-2 " />
            <h5 className=" text-sm">News Feed</h5>
          </div>
          <span></span>
          <BsThreeDots />
        </div>
      </NavLink>
      <NavLink to="/messenger">
        <div className=" w-full h-[40px] rounded flex items-center justify-between gap-3  px-2 hover:bg-base-300">
          <div className=" flex justify-center items-center gap-2">
            <FiMessageCircle className="w-[30px] h-[30px]  p-2" />
            <h5 className="  text-sm">Messenger</h5>
          </div>
          <span className=" text-white text-xs rounded-lg bg-sky-500 px-2">
            2
          </span>
          <BsThreeDots />
        </div>
      </NavLink>
      <NavLink to="/watch">
        <div className=" w-full h-[40px] rounded flex items-center justify-between gap-3  px-2 hover:bg-base-300">
          <div className=" flex justify-center items-center gap-2">
            <BsPlay className="w-[30px] h-[30px]  p-2" />
            <h5 className="  text-sm">Watch</h5>
          </div>
          <span className=" text-white text-xs rounded-lg bg-sky-500 px-2"></span>
          <BsThreeDots />
        </div>
      </NavLink>
      <NavLink to="/friends">
        <div className=" w-full h-[40px] rounded flex items-center justify-between gap-3  px-2 hover:bg-base-300">
          <div className=" flex justify-center items-center gap-2">
            <FiUsers className="w-[30px] h-[30px]  p-2" />
            <h5 className="  text-sm">Friends</h5>
          </div>
          <span className=" text-white text-xs rounded-lg bg-sky-500 px-2"></span>
          <BsThreeDots />
        </div>
      </NavLink>
    </div>
  );
};

export default NavItems;
