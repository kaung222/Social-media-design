import React from "react";
import { BsThreeDots } from "react-icons/bs";
import Layout from "../components/Layouts/Layout";
import { BiLike, BiComment, BiShare } from "react-icons/bi";

const Watch = () => {
  return (
    <Layout>
      <div className="pt-[70px] md:pt-5 lg:pt-5 h-[1000vh] lg:ml-[320px] md:ml-[300px] lg:mr-[340px] md:mr-[120px]">
        <div className=" p-4 bg-base-300 rounded-md shadow-md mb-3 ">
          <span className=" bg-base-100 px-2 py-1 rounded-full mr-2 active">
            Travel
          </span>
          <span className=" bg-base-100 px-2 py-1 rounded-full mr-3">
            Sport
          </span>
          <span className=" bg-base-100 px-2 py-1 rounded-full mr-3">
            Gaming
          </span>
          <span className=" bg-base-100 px-2 py-1 rounded-full mr-2">
            Education
          </span>
          <span className=" bg-base-100 px-2 py-1 rounded-full mr-2">
            Music
          </span>
          <span className=" bg-base-100 px-2 py-1 rounded-full mr-2">Fun </span>
          <span className=" bg-base-100 px-2 py-1 rounded-full mr-3"> More </span>
        </div>
        <div className="px-3 hover:shadow-2xl shadow-sm shadow-slate-700  p-3 rounded-md bg-base-300">
          <div className=" flex justify-between items-center mb-5">
            <div className="flex items-center justify-center gap-3">
              <img
                src="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSRKxknkED3qdTdrpZpBcTUq3b7Nl4HUgWlS2EUwX9DzQ5DTmWd8Y5BExbbvGHh9vOS"
                alt=""
                className=" w-[35px] h-[35px] rounded-full border-blue-700 border-2"
              />
              <div className="">
                <h3 className="text-md">James</h3>
                <p className="text-xs">12 mins ago</p>
              </div>
            </div>
            <div className="">
              <button className=" px-3 py-1">
                <BsThreeDots />
              </button>
            </div>
          </div>
          <img
            src="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSRKxknkED3qdTdrpZpBcTUq3b7Nl4HUgWlS2EUwX9DzQ5DTmWd8Y5BExbbvGHh9vOS"
            alt="cover..."
            className="w-full hover:opacity-60 "
          />
          <p className="py-1 font-light text-xs">
            Lorem ipsum dolor sit amet...
          </p>
          <div className=" mt-3 text-sm flex justify-between items-center">
            <button className=" flex justify-center items-center gap-2 rounded-full bg-base-300 px-3 py-1">
              <BiLike />
              <span>Like</span>
            </button>
            <button className=" flex justify-center items-center gap-2 rounded-full bg-base-300 px-3 py-1">
              <BiComment />
              <span>Comments</span>
            </button>
            <button className=" flex justify-center items-center gap-2 rounded-full bg-base-300 px-3 py-1">
              <BiShare />
              <span>Share</span>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Watch;
