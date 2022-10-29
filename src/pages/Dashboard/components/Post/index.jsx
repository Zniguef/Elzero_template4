import React from "react";
import avatar from "../../../../assets/images/avatar.png";
import { AiOutlineComment } from "react-icons/ai";
import { GiHearts } from "react-icons/gi";

function LatestPosts({ isDarkMode }) {
  return (
    <div
      className={`${
        isDarkMode ? "bg-secondary-dark text-white" : "bg-white text-black"
      } w-full p-3 rounded h-full`}
    >
      <h1 className="text-base font-semibold">Latest Post</h1>
      <div className="flex items-center justify-start gap-3 mt-5">
        <img className="w-9" src={avatar} alt="user-avatar" />
        <div>
          <h3 className="text-sm">Ossama Elzero</h3>
          <span className="text-xs text-gray-400">About 13 Hours ago</span>
        </div>
      </div>
      <p className="text-sm mt-4 pb-5 leading-6 border-b">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi porro,
        ipsam fugiat vero temporibus consectetur
      </p>
      <div className="flex items-center justify-between text-xs my-4">
        <div className="likes flex items-center gap-1">
          <GiHearts />
          <span className="text-gray-400">1.8k</span>
        </div>
        <div className="comments flex items-center gap-1">
          <AiOutlineComment />
          <span className="text-gray-400">500</span>
        </div>
      </div>
    </div>
  );
}

export default LatestPosts;
