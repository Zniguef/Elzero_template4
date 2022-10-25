import React from "react";
import { BsCheckCircle } from "react-icons/bs";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { RiLoader4Line } from "react-icons/ri";
import { FaRegListAlt } from "react-icons/fa";

function Statistics() {
  return (
    <div className="bg-white p-3 rounded w-full h-full">
      <h1 className="font-semibold text-base">Tickets Statistics</h1>
      <p className="text-xs text-primary-gray">
        Everything about support tickets
      </p>

      <div className="mt-4">
        <div className="flex items-center justify-between mb-4">
          <div className="w-[150px] border text-center rounded py-2">
            <FaRegListAlt />
            <span className="font-medium">2500</span>
            <p className="text-xs text-primary-gray">Total</p>
          </div>
          <div className="w-[150px] border text-center rounded py-2">
            <RiLoader4Line />
            <span className="font-medium">500</span>
            <p className="text-xs text-primary-gray">Pending</p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="w-[150px] border text-center rounded py-2">
            <BsCheckCircle />
            <span className="font-medium">1900</span>
            <p className="text-xs text-primary-gray">Closed</p>
          </div>
          <div className="w-[150px] border text-center rounded py-2">
            <AiOutlineCloseSquare />
            <span className="font-medium">100</span>
            <p className="text-xs text-primary-gray">Deleted</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
