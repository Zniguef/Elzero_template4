import * as React from "react";
import { DarkModeContext } from "../../../../core/context/DarkModeContext";
import { projectsData } from "../../../../core/data/Projects";

function Card() {
  const isDarkMode = React.useContext(DarkModeContext);
  return projectsData?.map((item) => (
    <div
      key={item?.id}
      className={`${
        isDarkMode ? "bg-secondary-dark" : "bg-white"
      } px-3 rounded-md m-3 flex flex-col justify-around`}
    >
      <div
        className={`${
          isDarkMode ? "text-gray-200" : "text-black"
        } w-full pt-5 flex justify-between items-center`}
      >
        <h1>{item?.name}</h1>
        <span className="text-sm text-gray-500">{item?.endDate}</span>
      </div>
      <span className="text-xs text-gray-500">{item?.description}</span>
      <div className="w-full pt-6 pb-3">
        {item?.avatars?.map((a) => (
          <img
            key={a?.id}
            src={a?.image}
            alt="Av"
            className={`${
              isDarkMode ? "border-secondary-dark" : "border-white"
            } w-10 rounded-full -mr-3 border-4 inline hover:scale-110
            transition-all`}
          />
        ))}
      </div>
      <div
        className="flex max-w-full flex-wrap gap-y-2 px-3 py-4 justify-end border-y
        border-black border-opacity-30 "
      >
        {item?.technologies?.map((t) => (
          <div
            key={t?.id}
            className={`${
              isDarkMode ? "text-gray-400" : "text-black"
            } py-2 px-3 bg-black font-[Poppins] font-light
              bg-opacity-20 rounded-md mx-1 text-xs`}
          >
            {t?.title}
          </div>
        ))}
      </div>
      <div
        className={`${
          isDarkMode ? "text-gray-300" : "text-gray-600"
        } w-full flex justify-between
            items-center py-4 `}
      >
        <div>
          <input type="range" defaultValue={40} />
        </div>
        {item?.price}
      </div>
    </div>
  ));
}

export default Card;
