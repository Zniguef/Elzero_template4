import React from "react";

function Welcome() {
  return (
    <div className="container">
      <div className="bg-primary-gray flex justify-between items-center">
        <div>
          <h3>Welcome</h3>
          <span>Elzero</span>
        </div>
        <div>image here</div>
      </div>
      <div>profile image here</div>
      <div className="flex justify-between items-center">
        <div>
          <h3>Osama Elzero</h3>
          <span>Developer</span>
        </div>
        <div>
          <span>80</span>
          <span>projects</span>
        </div>
        <div>
          <span>$8500</span>
          <span>Earned</span>
        </div>
      </div>
      <button>Profile</button>
    </div>
  );
}

export default Welcome;
