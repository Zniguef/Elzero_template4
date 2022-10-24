import React from "react";
import { FaTrash } from "react-icons/fa";

function Tasks() {
  return (
    <div className="bg-white w-[33%] p-3 rounded h-full">
      <h1 className="text-base font-semibold">Latest Tasks</h1>
      <div className="flex justify-between">
        <div>
          <p className="text-xs font-semibold">Record One new video</p>
          <p className="text-xs text-primary-gray">
            Record python create Exe project
          </p>
        </div>
        <span>
          <FaTrash />
        </span>
      </div>
      <div className="flex justify-between">
        <div>
          <p className="text-xs font-semibold">Write article</p>
          <p className="text-xs text-primary-gray">
            Write low level vs high level languages
          </p>
        </div>
        <span>
          <FaTrash />
        </span>
      </div>
      <div className="flex justify-between">
        <div>
          <p className="text-xs font-semibold">Finish project</p>
          <p className="text-xs text-primary-gray">
            Publish academy programming project
          </p>
        </div>
        <span>
          <FaTrash />
        </span>
      </div>
      <div className="flex justify-between">
        <div>
          <p className="text-xs font-semibold">Attende the meeting</p>
          <p className="text-xs text-primary-gray">
            Attende the project business analysic meeting
          </p>
        </div>
        <span>
          <FaTrash />
        </span>
      </div>
      <div className="flex justify-between">
        <div>
          <p className="text-xs font-semibold">Finish lesson</p>
          <p className="text-xs text-primary-gray">Finisg teaching flex box</p>
        </div>
        <span>
          <FaTrash />
        </span>
      </div>
    </div>
  );
}

export default Tasks;
