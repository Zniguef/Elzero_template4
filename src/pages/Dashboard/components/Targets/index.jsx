import React from "react";
import { FaDollarSign, FaUserAlt } from "react-icons/fa";

function Target() {
  return (
    <div className="bg-white w-[33%] p-3 rounded h-full">
      <h1 className="text-base font-semibold">Yearly Target</h1>
      <p className="text-primary-gray text-xs py-1">Targets of the year</p>

      <div className="flex justify-between">
        <span className="w-10 h-10 bg-primary-blue">
          <FaDollarSign />
        </span>
        <div>
          <p className="text-primary-gray text-xs">Money</p>
          <span className="text-sm font-medium">$20.000</span>
          <div>
            <span className="text-xs">80%</span>
            <input type="range" name="" id="" value="80" />
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <span className="w-10 h-10 bg-primary-blue">icon</span>
        <div>
          <p className="text-primary-gray text-xs">Projects</p>
          <span className="text-sm font-medium">24</span>
          <div>
            <span className="text-xs">55%</span>
            <input type="range" name="" id="" value="55" />
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <span className="w-10 h-10 bg-primary-blue">
          <FaUserAlt />
        </span>

        <div>
          <p className="text-primary-gray text-xs">Team</p>
          <span className="text-sm font-medium">12</span>
          <div>
            <span className="text-xs">75%</span>
            <input type="range" name="" id="" value="75" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Target;
