import React from "react";
import { BiPaperPlane } from "react-icons/bi";
import Layout from "../components/Layouts/Layout";

const Messenger = () => {
  return (
    <Layout>
      <div className="h-[100vh] lg:ml-[300px] md:ml-[280px] p-3 pt-[70px] md:pt-3 lg:pt-3 lg:mr-[300px] md:mr-[100px]">
        <div className=" p-3 px-4 bg-base-300 hover:shadow-xl rounded-md">
          <div className="">
            <img
              src="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSRKxknkED3qdTdrpZpBcTUq3b7Nl4HUgWlS2EUwX9DzQ5DTmWd8Y5BExbbvGHh9vOS"
              alt=""
              className=" w-[40px] h-[40px] rounded-full border-2 cursor-pointer border-blue-500 "
            />
          </div>
        </div>

        {/* message section */}
        <div className=" mt-3 bg-base-300 p-5 rounded-md h-[70vh]">
          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  src="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSRKxknkED3qdTdrpZpBcTUq3b7Nl4HUgWlS2EUwX9DzQ5DTmWd8Y5BExbbvGHh9vOS"
                  alt=""
                  className=" w-[40px] h-[40px] rounded-full border-2 cursor-pointer border-blue-500 "
                />
              </div>
            </div>
            <div className="chat-header">
              <span className="mr-2">James Bond</span>
              <time className="text-xs opacity-50">12:45</time>
            </div>
            <div className="chat-bubble">Hello James How are you?</div>
            <div className="chat-bubble">Tell me about yourself.</div>
            <div className="chat-footer opacity-50">Delivered</div>
          </div>
          <div className="chat chat-end">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  src="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSRKxknkED3qdTdrpZpBcTUq3b7Nl4HUgWlS2EUwX9DzQ5DTmWd8Y5BExbbvGHh9vOS"
                  alt=""
                  className=" chat-image"
                />
              </div>
            </div>
            <div className="chat-header ">
              <span className="mr-2">Name</span>
              <time className="text-xs opacity-50 ">12:46</time>
            </div>
            <div className="chat-bubble">
              I am learning React.js in MMSIT and it's awesome
            </div>
            <div className="chat-footer opacity-50">Seen at 12:46</div>
          </div>
        </div>
        {/* <div className="px-5 bg-base-300 mt-3"> */}
        <div className="my-2 cursor-pointer py-2 px-4  rounded-md flex justify-between items-center bg-base-300">
          <input
            type="text"
            placeholder="Message"
            className="border-none w-full bg-base-300 py-1 px-3 outline-none"
          />
          <button className=" rounded-full p-3 h-full hover:bg-base-100">
            <BiPaperPlane />
          </button>
        </div>
        {/* </div> */}
      </div>
    </Layout>
  );
};

export default Messenger;
