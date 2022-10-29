import React from "react";
import { items } from "../../../../core/data/Dashboard/TopSearchItems";

export default function TopSearchItems({ isDarkMode }) {
  return (
    <div
      className={`${
        isDarkMode ? "bg-secondary-dark text-white" : "bg-white text-black"
      } w-full rounded p-3 h-full`}
    >
      <h1 className="text-base font-semibold">Top Search Items</h1>
      <div className="flex justify-between my-2 text-sm text-gray-400">
        <p>Keyword</p>
        <p>Search Count</p>
      </div>
      <div className="mt-4">
        {items?.map((item) => (
          <div key={item?.id} className="flex justify-between text-sm my-2">
            <p>{item?.keyword}</p>
            <span
              className={`${
                isDarkMode ? "bg-zinc-600 text-white" : "bg-gray-300 text-black"
              } py-1 px-2 rounded-md text-xs`}
            >
              {item?.count}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
