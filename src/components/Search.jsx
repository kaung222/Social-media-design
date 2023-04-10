import React from "react";
import { BsSearch } from "react-icons/bs";

const Search = () => {
  return (
    <div className="my-5 cursor-pointer py-2 px-4  rounded-full flex justify-center items-center bg-base-300">
      <input
        type="text"
        placeholder="Search"
        className="border-none bg-base-300 outline-none"
      />
      <BsSearch />
    </div>
  );
};

export default Search;
