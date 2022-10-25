import * as React from "react";
import MainTitle from "../../../../components/MainTitle";
import { activitiesList } from "../../../../core/data/profile/activities";
import "./styles.scss";

function Activities({ isDarkMode }) {
  return (
    <div
      className={`${
        isDarkMode ? "bg-secondary-dark" : "bg-white"
      } p-6 rounded-lg lg:w-4/6 w-full`}
    >
      <MainTitle
        title="Latest activities"
        className="!mb-2 !font-bold !font-sans"
      />
      <h1 className="text-sm text-gray-400 pb-3">
        Latest activities done by the user
      </h1>
      <div className="flex flex-col mt-6 gap-6 justify-around activities-container">
        {activitiesList?.map((activity) => {
          const Icon = activity?.icon;
          return (
            <div
              key={activity?.id}
              className={`${
                isDarkMode ? " border-black" : " border-gray-200"
              } last:border-b-0 border-b flex w-full pb-6 gap-4`}
            >
              <Icon
                className={`h-16 w-16 ${activity?.bgColor} rounded-full text-white p-3`}
                style={{
                  minWidth: "4rem",
                  minHeight: "4rem",
                }}
              />
              <div
                className={`${
                  isDarkMode ? "text-gray-300" : "text-black"
                } w-full flex flex-col justify-around`}
              >
                <div className="flex justify-between">
                  <h1 className="font-medium text-lg">{activity?.title}</h1>
                  <span className="font-medium text-lg">{activity?.time}</span>
                </div>
                <div className="flex justify-between">
                  <h1 className="text-gray-500 w-2/4 whitespace-nowrap overflow-hidden text-ellipsis">
                    {activity?.description}
                  </h1>
                  <span className="text-gray-500">{activity?.date}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Activities;
