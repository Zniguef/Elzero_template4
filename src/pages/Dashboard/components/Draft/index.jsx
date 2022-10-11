import React from "react";

function Draft() {
  return (
    <div className="bg-white">
      <h1 className="font-semibold">Quick Draft</h1>
      <p className="text-sm text-primary-gray">Write A Draft For Yout Ideas</p>

      <form className="flex flex-col">
        <input className="bg-primary-gray" type="text" placeholder="Title" />
        <textarea
          className="bg-primary-gray resize-none"
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Yout Throught"
        ></textarea>
        <div className="flex justify-end mx-3">
          <button className="bg-primary-blue text-white rounded py-1 px-2">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default Draft;
