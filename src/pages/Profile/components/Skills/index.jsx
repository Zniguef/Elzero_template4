import * as React from "react";
import MainTitle from "../../../../components/MainTitle";
import { SkillsList } from "../../../../core/data/profile/skills";

function Skills({ isDarkMode }) {
  return (
    <div
      className={`${
        isDarkMode ? "bg-secondary-dark" : "bg-white"
      } p-6 rounded-lg lg:w-2/6 w-full`}
    >
      <MainTitle title="My Skills" className="!mb-2 !font-bold !font-sans" />
      <h1 className="text-sm text-gray-400 pb-3">Complete Skills List</h1>
      <div className="pt-4">
        {SkillsList?.map((item) => (
          <div
            data-langtype={item?.type}
            className={`${
              isDarkMode ? " border-b-black" : " border-b-gray-200"
            } flex gap-x-2 mb-4 border-b pb-4 last:p-0 last:border-none`}
            key={item?.id}
          >
            {item?.languages?.map((lang) => (
              <div
                key={Math?.random()}
                className={`${
                  isDarkMode
                    ? "bg-dark text-gray-200"
                    : "bg-gray-200 text-black"
                } py-1 px-2 rounded-lg`}
              >
                {lang}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
