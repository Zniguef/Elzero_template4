import React from "react";
import { Reminders } from "../../../../core/data/Dashboard/Reminders";

function Reminder({ isDarkMode }) {
  return (
    <div
      className={`${
        isDarkMode ? "bg-secondary-dark text-white" : "bg-white text-black"
      } w-full p-3 rounded h-full`}
    >
      <h1 className="text-base font-semibold">Reminders</h1>
      <div>
        {Reminders?.map((reminder) => (
          <div className="my-3" key={reminder?.id}>
            <p className="text-sm">{reminder?.task}</p>
            <span className="text-xs text-gray-400">{reminder?.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reminder;
