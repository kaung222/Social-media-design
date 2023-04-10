import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Comments = () => {
  const { id } = useParams();
  //   console.log(id);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`
      );
      setComments(data);
    };
    getData();
  }, []);
  return (
    <div className="text-base-500 text-xs">
      {comments.map((comment) => {
        return (
          <div className="" key={comment.id}>
            <div className="flex items-center py-3 gap-4">
            <img
              src="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSRKxknkED3qdTdrpZpBcTUq3b7Nl4HUgWlS2EUwX9DzQ5DTmWd8Y5BExbbvGHh9vOS"
              alt=""
              className=" w-[35px] h-[35px] rounded-full border-blue-700 border-2"
            />
            <div className="">

              <p>{comment.name}</p>
              <p>{comment.email}</p>
            </div>
            </div>
            <p className="ml-[60px]">{comment.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
