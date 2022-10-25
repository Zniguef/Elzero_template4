import React from "react";
import { latestNews } from "../../../../core/data/Dashboard/LatestNews";

function News({ isDarkMode }) {
  return (
    <div className={`${isDarkMode ? "bg-secondary-dark text-white" : "bg-white text-black"} w-full rounded p-3 h-full`}>
      <h1 className="text-base font-semibold p-3 ">Latest News</h1>
      {latestNews.map((latestNew) => (
        <div
          key={latestNew.id}
          className="flex items-center border-b last:border-b-0"
        >
          <div className="flex px-1 my-3">
            <img
              className="w-24 rounded-md h-11"
              src={latestNew.image}
              alt="cover"
            />
            <div className="ml-3">
              <h2 className="text-xs font-semibold">{latestNew.title}</h2>
              <p className="text-xs text-primary-gray">
                {latestNew.description}
              </p>
            </div>
          </div>
          <span className="text-xs w-[21%]">{latestNew.days}</span>
        </div>
      ))}
    </div>
  );
}

export default News;
