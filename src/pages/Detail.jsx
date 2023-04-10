import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiCopy, BiShareAlt } from "react-icons/bi";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import Comments from "../components/Comments";
import Layout from "../components/Layouts/Layout";

const Detail = () => {
  const location = useLocation();
  const post = location.state.post;
  console.log(post);
  const [fullScreen, setFullScreen] = useState(false);
  return (
    <Layout>
      <div className=" h-auto lg:ml-[340px] md:ml-[320px] lg:mr-[320px] md:mr-[100px]">
        <div className="">
          {/* <div className=" p-20 mt-[60px] lg:mt-0 md:mt-0 border-b-[1px] border-slate-300 shadow-md hover:shadow-slate-700">
            <p className=" text-2xl">This is detail page</p>
            <p className=" text-base font-light">
              Nice tagline here about Me, Myself & I
            </p>
          </div> */}
          <div className=" px-10">
            <p className=" text-center py-5">Main Blog Title</p>
            <img
              src="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSRKxknkED3qdTdrpZpBcTUq3b7Nl4HUgWlS2EUwX9DzQ5DTmWd8Y5BExbbvGHh9vOS"
              alt="cover..."
              onClick={() => setFullScreen(true)}
              // className={`${fullScreen ? "fixed w-full h-full" : ""}`}
            />
            <div className=" py-2 flex justify-between items-center">
              <p>Image Description (bagan 2019)</p>
              <p className="flex gap-3">
                <BsFillBookmarkHeartFill />
                <AiOutlineHeart />
                <BiShareAlt />
                <BiCopy />
              </p>
            </div>
            <div className="">
              <h1 className="text-xl mt-7">{post.title}</h1>
              <p className=" py-2">{post.body} </p>
            </div>
            <hr  className="py-5"/>
            <div className="">
              <h3 className="my-3">Comments</h3>
              <Comments/>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Detail;
