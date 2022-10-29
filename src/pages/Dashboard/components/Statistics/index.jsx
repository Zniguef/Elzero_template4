import React from "react";
import { TicketsStatistics } from "../../../../core/data/Dashboard/TicketsStatistics";

function Statistics({ isDarkMode }) {
  return (
    <div
      className={`${
        isDarkMode ? "bg-secondary-dark text-white" : "bg-white text-black"
      } p-3 rounded w-full h-full`}
    >
      <h1 className="font-semibold text-base">Tickets Statistics</h1>
      <p className="text-xs text-primary-gray">
        Everything about support tickets
      </p>
      <div className="grid grid-cols-2 gap-3 py-6">
        {TicketsStatistics.map(({ icon: Icon, ...statistic }) => (
          <div
            key={statistic?.id}
            className="border flex flex-col justify-center items-center gap-4 rounded py-2"
          >
            <Icon color={statistic?.color} />
            <span className="font-medium">{statistic?.totalNumber}</span>
            <p className="text-xs text-primary-gray">
              {statistic?.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Statistics;
