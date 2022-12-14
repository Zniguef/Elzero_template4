import React from "react";
import welcomeImg from "../../../../assets/images/welcome.png";
import avatar from "../../../../assets/images/avatar.png";

function Welcome({ isDarkMode }) {
  return (
    <div
      className={`${
        isDarkMode ? "bg-secondary-dark text-white" : "bg-white text-black"
      } rounded-md w-full h-full`}
    >
      <div
        className={`${
          isDarkMode
            ? "bg-secondary-dark text-white border-b"
            : "bg-primary-gray-bg text-black"
        } flex justify-between items-center px-2 relative`}
      >
        <div className="p-1 w-2/4">
          <h3 className="font-semibold">Welcome</h3>
          <span className="text-xs">Elzero</span>
        </div>
        <div>
          <img className="p-2" src={welcomeImg} alt="welcome" />
        </div>
      </div>
      <div>
        <img className="w-8 -translate-y-1/2 ml-3" src={avatar} alt="profile" />
      </div>
      <div className="flex justify-between items-center px-5 py-3 border-t border-b mt-8">
        <div className="text-center">
          <h3 className="text-sm">Osama Elzero</h3>
          <span className="text-primary-gray text-xs">Developer</span>
        </div>
        <div className="text-center">
          <span className="text-sm">80</span>
          <br />
          <span className="text-primary-gray text-xs">projects</span>
        </div>
        <div className="text-center">
          <span className="text-sm">$8500</span>
          <br />
          <span className="text-primary-gray text-xs">Earned</span>
        </div>
      </div>
      <div className="flex justify-end mx-3 my-4">
        <button className="bg-primary-blue text-white rounded p-1 text-xs">
          Profile
        </button>
      </div>
    </div>
  );
}

export default Welcome;
