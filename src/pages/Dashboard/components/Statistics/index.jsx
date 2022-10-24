import React from "react";

function Statistics() {
  return (
    <div className="bg-white p-3 rounded w-[33%] h-full">
      <h1 className="font-semibold text-base">Tickets Statistics</h1>
      <p className="text-xs text-primary-gray">
        Everything about support tickets
      </p>

      <div className="mt-4">
        <div className="flex items-center justify-between mb-4">
          <div className="w-[150px] border text-center rounded py-2">
            <i class="fas fa-accessible-icon"></i>
            <span className="font-medium">2500</span>
            <p className="text-xs text-primary-gray">Total</p>
          </div>
          <div className="w-[150px] border text-center rounded py-2">
            <i class="fas fa-accessible-icon"></i>
            <span className="font-medium">500</span>
            <p className="text-xs text-primary-gray">Pending</p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="w-[150px] border text-center rounded py-2">
            <i class="fas fa-accessible-icon"></i>
            <span className="font-medium">1900</span>
            <p className="text-xs text-primary-gray">Closed</p>
          </div>
          <div className="w-[150px] border text-center rounded py-2">
            <i class="fas fa-accessible-icon"></i>
            <span className="font-medium">100</span>
            <p className="text-xs text-primary-gray">Deleted</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
