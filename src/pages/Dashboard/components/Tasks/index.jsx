import React from "react";
import { latestTasks } from "../../../../core/data/Dashboard/latestTasks";
import "./style.scss";

function Tasks({ isDarkMode }) {
  return (
    <div
      className={`${
        isDarkMode ? "bg-secondary-dark text-white" : "bg-white text-black"
      } w-full p-3 rounded h-full`}
    >
      <h1 className="text-base font-semibold">Latest Tasks</h1>
      {latestTasks.map(({ icon: Icon, ...task }) => (
        <div
          key={task.id}
          className={`${
            task?.id === "4" ? " disabeld-task" : ""
          } flex justify-between py-4 border-b last:border-b-0`}
        >
          <div>
            <p className="text-xs font-semibold">{task?.title}</p>
            <p className="text-xs text-primary-gray">{task?.description}</p>
          </div>
          <Icon className="taskIcon" />
        </div>
      ))}
    </div>
  );
}

export default Tasks;
