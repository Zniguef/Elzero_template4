import React from "react";

function Draft() {
  return (
    <div className="bg-white w-full p-3 rounded-md h-full">
      <h1 className="font-semibold text-base">Quick Draft</h1>
      <p className="text-sm text-primary-gray py-2">
        Write A Draft For Yout Ideas
      </p>

      <form className="flex flex-col">
        <input
          className="bg-primary-gray-bg my-2 p-1 rounded outline-none"
          type="text"
          placeholder="Title"
        />
        <textarea
          className="bg-primary-gray-bg resize-none outline-none p-1 rounded"
          name=""
          id=""
          cols="30"
          rows="5"
          placeholder="Yout Throught"
        ></textarea>
        <div className="flex justify-end my-3">
          <button className="bg-primary-blue text-white rounded p-1 text-xs">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default Draft;
