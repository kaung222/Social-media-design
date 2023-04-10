import React, { useState } from "react";
import { BiComment, BiLike, BiShare } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";
import Comments from "./Comments";

const PostCard = ({ post }) => {
  // const [fav, setFav] = useState(false);
  const [showComment, setShowComment] = useState(false);
  const { id, title, body } = post;

  return (
    <div>
      <Link to={`/detail/${id}`} state={{ post }}>
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
          {/* <div className=" flex justify-between items-center">
            <p className=" pt-3 text-xl"> blog title</p>
          </div> */}
          <p className="py-1 font-light text-xs">{title}</p>
          <div className=" mt-3 text-sm flex justify-between items-center">
            <button className=" flex justify-center items-center gap-2 rounded-full bg-base-300 px-3 py-1">
              <BiLike />
              <span>Like</span>
            </button>
            <button
              className=" flex justify-center items-center gap-2 rounded-full bg-base-300 px-3 py-1"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setShowComment(true);
                console.log("jjhg");
              }}
            >
              <BiComment />
              <span>Comments</span>
            </button>
            <button className=" flex justify-center items-center gap-2 rounded-full bg-base-300 px-3 py-1">
              <BiShare />
              <span>Share</span>
            </button>
          </div>
          {/* {showComment ? (
            <div className="">
              <Comments />
            </div>
          ) : (
            ""
          )} */}
          <Comments/>
        </div>
      </Link>
    </div>
  );
};

export default PostCard;
