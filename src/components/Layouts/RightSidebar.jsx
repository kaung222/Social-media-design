import React, { useState } from "react";
import { BiMenuAltRight, BiPlus } from "react-icons/bi";
import { users } from "../../data";
import Menu from "../Menu";

const RightSidebar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="">
      <div className="lg:w-[300px] md:w-[100px] hidden top-0 right-0 md:flex lg:flex flex-col justify-between items-start p-[20px] fixed border-l-[1px] shadow-lg hover:shadow-slate-700 h-screen">
        <div className=" flex items-center justify-center w-full gap-3">
          <h3 className=" text-sm hover:underline cursor-pointer md:hidden lg:block">
            James Marcus
          </h3>
          <img
            src="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSRKxknkED3qdTdrpZpBcTUq3b7Nl4HUgWlS2EUwX9DzQ5DTmWd8Y5BExbbvGHh9vOS"
            alt=""
            className=" w-[40px] h-[40px] rounded-full border-2 cursor-pointer border-blue-500 "
          />
          <button
            className="p-3 bg-slate-200 rounded-full hover:scale-105"
            onClick={() => setShowMenu(!showMenu)}
          >
            <BiMenuAltRight className="" />
          </button>
        </div>
        <div className="w-full">
          <h2 className=" text-base">Friends</h2>

          {users.map((user) => {
            return (
              <div
                className=" flex justify-between items-center gap-2 mt-3 text-sm"
                key={user.id}
              >
                <div className=" flex items-center gap-5">
                  <img
                    src={user.image}
                    alt=""
                    className={` w-[30px] h-[30px] rounded-full cursor-pointer ${
                      user.myDay ? "border-2  border-blue-500" : ""
                    }`}
                  />
                  <h2 className="hover:underline cursor-pointer md:hidden lg:block">
                    {user.name}
                  </h2>
                </div>
                <div className=" w-2 h-2 bg-green-600 rounded-full"></div>
              </div>
            );
          })}
        </div>
        {showMenu ? (
          <div className=" absolute top-[60px] right-0">
            <Menu />
          </div>
        ) : (
          ""
        )}
        <div className="w-full p-3">
          <button className=" w-full flex items-center justify-center gap-5 bg-w text-blue-700 border-[1px] bg-base-300 border-blue-700 py-2 rounded-full">
            <h1 className=" text-sm md:hidden lg:block">Create New Group</h1>
            <BiPlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
