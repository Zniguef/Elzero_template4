import React from "react";

function Statistics() {
  return (
    <div className="bg-white">
      <h1>Tickets Statistics</h1>
      <p>Everything about support tickets</p>

      <div>
        <div className="flex">
          <div>
            <i class="fas fa-accessible-icon"></i>
            <span>2500</span>
            <p>Total</p>
          </div>
          <div>
            <i class="fas fa-accessible-icon"></i>
            <span>500</span>
            <p>Pending</p>
          </div>
        </div>

        <div className="flex">
          <div>
            <i class="fas fa-accessible-icon"></i>
            <span>1900</span>
            <p>Closed</p>
          </div>
          <div>
            <i class="fas fa-accessible-icon"></i>
            <span>100</span>
            <p>Deleted</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
