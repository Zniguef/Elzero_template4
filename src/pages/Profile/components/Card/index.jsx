import * as React from "react";
import Avatar from "../../../../assets/images/avatar.png";
import { profileInfo } from "../../../../core/data/profile";

function Card({ isDarkMode }) {
  return (
    <div
      className={`${
        isDarkMode ? "bg-secondary-dark" : "bg-white"
      } rounded-lg flex items-center`}
    >
      <div className="w-64 p-10 flex flex-col items-center font-medium font-sans relative">
        <img src={Avatar} alt="Avatar" className="h-28" />
        <h1
          className={`${
            isDarkMode ? "text-gray-200" : "text-black"
          } text-lg pt-2 pb-1 whitespace-nowrap`}
        >
          Ossama Elzero
        </h1>
        <h1 className="text-lg text-gray-400 pb-3">Level 20</h1>
        <input
          type="range"
          value={80}
          onChange={() => {}}
          className="w-4/5 profile-range"
        />
        <div className="flex gap-1 pt-2">
          <span className="fa fa-star text-orange-400"></span>
          <span className="fa fa-star text-orange-400"></span>
          <span className="fa fa-star text-orange-400"></span>
          <span className="fa fa-star text-orange-400"></span>
          <span className="fa fa-star text-orange-400"></span>
        </div>
        <h1 className="text-sm text-gray-400 pt-2">550 rating</h1>
        <div
          className={`w-px ${
            isDarkMode ? " bg-black" : " bg-gray-200"
          } h-[90%] absolute right-0 top-1/2 -translate-y-1/2`}
        />
      </div>
      <div className="w-full flex flex-col justify-center">
        {profileInfo?.map((item) => (
          <div
            className={`${
              isDarkMode ? " border-black" : " border-gray-200"
            } px-2 border-b-2 last:border-b-0 w-full py-3`}
            key={item?.id}
          >
            <span
              className={`${
                isDarkMode ? "text-white" : "text-gray-400"
              } font-medium mb-5`}
            >
              {item?.title}
            </span>
            <div className="grid xl:grid-cols-4 md:grid-cols-2 text-sm grid-cols-1 w-full gap-y-2 pt-2">
              {item?.content?.map((contentItem) => (
                <h1
                  key={contentItem?.id}
                  className="text-gray-400 whitespace-nowrap text-ellipsis overflow-hidden"
                >
                  {contentItem?.key} :
                  <span
                    className={`${isDarkMode ? "text-gray-300" : "text-black"}`}
                  >
                    {contentItem?.val}{" "}
                  </span>
                </h1>
              ))}
              <label className="switch">
                <input
                  className="profile-card-switch"
                  type="checkbox"
                  defaultChecked={item?.isSelected}
                />
                <span className="slider round" />
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
