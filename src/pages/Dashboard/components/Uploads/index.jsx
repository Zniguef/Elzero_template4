import React from "react";
import { files } from "../../../../core/data/Dashboard/Uploads";

export default function Uploads({ isDarkMode }) {
  return (
    <div
      className={`${
        isDarkMode ? "bg-secondary-dark text-white" : "bg-white text-black"
      } p-3 rounded w-full h-full`}
    >
      <h1 className="text-base font-semibold">Latests Uploads</h1>
      <div className="mt-4">
        {files?.map((file) => (
          <div
            className="flex items-center justify-between my-2"
            key={file?.id}
          >
            <div className="text-sm">
              <p>{file?.fileName}</p>
              <p className="text-gray-400">{file?.owner}</p>
            </div>
            <div
              className={`${
                isDarkMode ? "bg-zinc-600 text-white" : "bg-gray-300 text-black"
              } text-xs rounded-md py-1 px-2`}
            >
              {file?.size}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
