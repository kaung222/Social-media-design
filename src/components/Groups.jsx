import React from "react";

const Groups = () => {
  return (
    <div className="">
      <h2 className="my-3">Your Groups</h2>
      <div className=" w-full h-[40px] rounded flex items-center justify-between gap-3 px-2 hover:bg-base-300">
        <div className=" flex justify-center items-center gap-2">
          <img
            src="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSRKxknkED3qdTdrpZpBcTUq3b7Nl4HUgWlS2EUwX9DzQ5DTmWd8Y5BExbbvGHh9vOS"
            alt="..."
            className="w-[30px] h-[30px] rounded-md"
          />
          <h5 className=" text-sm">Web Developer Community</h5>
        </div>
      </div>
      <div className=" w-full h-[40px] rounded flex items-center justify-between gap-3 px-2 hover:bg-base-300">
        <div className=" flex justify-center items-center gap-2">
          <img
            src="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSRKxknkED3qdTdrpZpBcTUq3b7Nl4HUgWlS2EUwX9DzQ5DTmWd8Y5BExbbvGHh9vOS"
            alt="..."
            className="w-[30px] h-[30px] rounded-md"
          />
          <h5 className=" text-sm">React Developer (Myanmar)</h5>
        </div>
      </div>
    </div>
  );
};

export default Groups;
