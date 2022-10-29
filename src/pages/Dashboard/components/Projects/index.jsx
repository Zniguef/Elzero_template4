import React from "react";
import { LastProjectsProgress } from "../../../../core/data/Dashboard/LastProjects";
import "./style.scss";

function LastProjects({ isDarkMode }) {
  return (
    <div
      className={`${
        isDarkMode ? "bg-secondary-dark text-white" : "bg-white text-black"
      } p-3 rounded w-full h-full`}
    >
      <h1 className="text-base font-semibold">Last Projects Progress</h1>
      <div className="mt-4">
        {LastProjectsProgress?.map((project) => (
          <div
            className="text-sm my-3 flex items-center justify-start gap-2"
            key={project?.id}
          >
            <span>
              <input
                onChange={() => {}}
                className={`${
                  project?.id !== "5" ? "projects-progress-input" : ""
                } relative mt-2`}
                type="radio"
                checked={project?.id === "5" ? false : true}
              />
            </span>
            <p>{project?.step}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LastProjects;
