import React from "react";

function Target() {
  return (
    <div className="bg-white">
      <h1>Yearly Target</h1>
      <p>Targets of the year</p>

      <div className="flex justify-between">
        <span>$</span>
        <div>
          <p>Money</p>
          <span>$20.000</span>
          <div>
            <span>80%</span>
            <input type="range" name="" id="" value="80" />
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <span>icon</span>
        <div>
          <p>Projects</p>
          <span>24</span>
          <div>
            <span>55%</span>
            <input type="range" name="" id="" value="55" />
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <span>icon</span>
        <div>
          <p>Team</p>
          <span>12</span>
          <div>
            <span>75%</span>
            <input type="range" name="" id="" value="75" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Target;
