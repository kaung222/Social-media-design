import React, { useEffect, useState } from "react";
import Layout from "../components/Layouts/Layout";
import PostCard from "../components/PostCard";
import axios from "axios";
import { BsEmojiSmile, BsImages, BsPlus } from "react-icons/bs";
import { BiCamera, BiVideo } from "react-icons/bi";
import Story from "../components/Story";
import { VscListFilter } from "react-icons/vsc";

const Home = () => {
  const [posts, setPost] = useState([]);
  const getData = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setPost(data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Layout>
      <div className="pt-[70px] md:lg:pt-[20px]  h-[1000vh] lg:ml-[300px] md:ml-[280px] lg:mr-[300px] md:mr-[100px] p-5">
        <div className=" p-5 text-sm border-b-[1px] bg-base-300  shadow-md rounded-md hover:shadow-slate-700">
          <div className=" flex justify-between items-center">
            <h1>What's on your mind? James</h1>
            <div className=" flex items-center justify-center gap-3">
              <BsEmojiSmile className="text-blue-700 text-xl" />
              <BsImages className="text-blue-700 text-xl" />
              <BsPlus className="text-blue-700 text-xl" />
            </div>
          </div>
          <div className="">
            <input
              type="text"
              placeholder="Sharing options..."
              className=" border-none outline-none my-4 bg-base-300 w-full p-2 rounded-md"
            />
          </div>
          <div className=" flex justify-start items-center gap-5">
            <button className="border-[1px] px-4 py-1 rounded-full border-blue-700 bg-base-300 hover:shadow-base-300">
              <div className="flex justify-center items-center gap-3">
                <BiCamera className=" text-blue-700" /> <p>Camera</p>
              </div>
            </button>
            <button className="border-[1px] px-4 py-1 rounded-full border-blue-700 bg-base-300 hover:shadow-base-300 shadow-xl">
              <div className="flex justify-center items-center gap-3">
                <BiVideo className=" text-blue-700" /> <p>Live Action</p>
              </div>
            </button>
          </div>
        </div>
        <Story />
        <div className="">
          <div className=" mt-5 flex justify-between items-center px-5">
            <h3>Posts</h3>
            <button className=" flex justify-center items-center gap-5 bg-base-300 px-3 py-1 rounded-full ">
              <VscListFilter />
              <span>Filters</span>
            </button>
          </div>
          <div className=" pt-3 justify-evenly items-center flex flex-wrap gap-5">
            {posts.map((post) => {
              return <PostCard key={post.id} post={post} />;
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
