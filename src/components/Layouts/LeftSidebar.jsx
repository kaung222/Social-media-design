import React, { useState } from "react";
import { FiHexagon, FiHome } from "react-icons/fi";
import { BsMessenger, BsPlay, BsThreeDots } from "react-icons/bs";
import { NavLink, Link } from "react-router-dom";
import Search from "../Search";
import ProfileAndNoti from "../ProfileAndNoti";
import NavItems from "./NavItems";
import Groups from "../Groups";

const LeftSidebar = () => {
  return (
    <div className="">
      <div
        className="flex fixed top-0 left-0 md:flex-col lg:flex-col z-10 lg:w-[300px]
       md:w-[280px] h-[60px] w-full lg:h-screen md:h-screen
        shadow-md hover:shadow-2xl border-r-[1px] justify-between py-5 items-center bg-base-100"
      >
        <div className="flex md:flex-col lg:flex-col justify-between items-center">
          <div className="">
            <Link to="/">
              <div className=" w-full h-[40px] rounded flex items-center justify-center gap-3">
                <FiHexagon className="w-[40px] h-[40px]  p-2 text-blue-700" />
                <h2 className=" text-blue-700 hidden md:flex lg:flex">
                  facebook
                </h2>
              </div>
            </Link>
          </div>
        </div>
        <Search />
        <NavItems />
        <div className=" hidden lg:block md:block">
          <Groups />
        </div>
        <NavLink to="/login">
          <ProfileAndNoti />
        </NavLink>
      </div>
    </div>
  );
};

export default LeftSidebar;
