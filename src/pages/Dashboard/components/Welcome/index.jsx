import React from "react";
import welcomeImg from "../../../../assets/images/welcome.png";
import avatar from "../../../../assets/images/avatar.png";

function Welcome() {
  return (
    <div className="bg-white pb-16 rounded-md">
      <div className="bg-primary-gray flex justify-between items-center px-2 relative">
        <div className="p-1 w-2/4">
          <h3 className="font-semibold">Welcome</h3>
          <span className="text-xs">Elzero</span>
        </div>
        <div>
          <img className="p-2" src={welcomeImg} alt="welcome" />
        </div>
      </div>
      <div>
        <img className="w-8 absolute" src={avatar} alt="profile" />
      </div>
      <div className="flex justify-between items-center px-2 py-7 border-t border-b m-3">
        <div className="text-center">
          <h3>Osama Elzero</h3>
          <span className="text-primary-gray">Developer</span>
        </div>
        <div className="text-center">
          <span>80</span>
          <br />
          <span className="text-primary-gray">projects</span>
        </div>
        <div className="text-center">
          <span>$8500</span>
          <br />
          <span className="text-primary-gray">Earned</span>
        </div>
      </div>
      <div className="flex justify-end mx-3">
        <button className="bg-primary-blue text-white rounded py-1 px-2">
          Profile
        </button>
      </div>
    </div>
  );
}

export default Welcome;
