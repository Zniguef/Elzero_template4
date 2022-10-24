import React from "react";
import imgNewsOne from "../../../../assets/images/news-01.png";
import imgNewsTwo from "../../../../assets/images/news-02.png";
import imgNewsThree from "../../../../assets/images/news-03.png";
import imgNewsFour from "../../../../assets/images/news-04.png";

function News() {
  return (
    <div className="bg-white w-[33%] rounded p-3 h-full">
      <h1 className="text-base font-semibold">Latest News</h1>
      <div className="flex">
        <div className="flex">
          <img className="w-24 rounded-md h-11" src={imgNewsOne} alt="cover" />
          <div>
            <h2 className="text-sm font-semibold">Created SASS Section</h2>
            <p className="text-xs text-primary-gray">
              New SASS examples & tutorials
            </p>
          </div>
        </div>
        <span className="text-xs">3 Days ago</span>
      </div>
      <div className="flex">
        <div className="flex">
          <img className="w-24 rounded-md h-11" src={imgNewsTwo} alt="cover" />
          <div>
            <h2 className="text-sm font-semibold">Changed the design</h2>
            <p className="text-xs text-primary-gray">
              A brand new website design
            </p>
          </div>
        </div>
        <span className="text-xs">5 Days ago</span>
      </div>
      <div className="flex">
        <div className="flex">
          <img
            className="w-24 rounded-md h-11"
            src={imgNewsThree}
            alt="cover"
          />
          <div>
            <h2 className="text-sm font-semibold">Teaam increased</h2>
            <p className="text-xs text-primary-gray">
              3 developers joined the team
            </p>
          </div>
        </div>
        <span className="text-xs">7 Days ago</span>
      </div>
      <div className="flex">
        <div className="flex">
          <img className="w-24 rounded-md h-11" src={imgNewsFour} alt="cover" />
          <div>
            <h2 className="text-sm font-semibold">Added payment gateway</h2>
            <p className="text-xs text-primary-gray">
              Many new payment gateway
            </p>
          </div>
        </div>
        <span className="text-xs">9 Days ago</span>
      </div>
    </div>
  );
}

export default News;
