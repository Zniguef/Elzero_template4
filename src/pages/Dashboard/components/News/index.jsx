import React from "react";
import imgNewsOne from "../../../../assets/images/news-01.png";
import imgNewsTwo from "../../../../assets/images/news-02.png";
import imgNewsThree from "../../../../assets/images/news-03.png";
import imgNewsFour from "../../../../assets/images/news-04.png";

function News() {
  return (
    <div className="bg-white">
      <h1>Latest News</h1>
      <div className="flex">
        <div className="flex">
          <img className="w-24 rounded-md" src={imgNewsOne} alt="cover" />
          <div>
            <h2>Created SASS Section</h2>
            <p>New SASS examples & tutorials</p>
          </div>
        </div>
        <span>3 Days ago</span>
      </div>
      <div className="flex">
        <div className="flex">
          <img className="w-24 rounded-md" src={imgNewsTwo} alt="cover" />
          <div>
            <h2>Changed the design</h2>
            <p>A brand new website design</p>
          </div>
        </div>
        <span>5 Days ago</span>
      </div>
      <div className="flex">
        <div className="flex">
          <img className="w-24 rounded-md" src={imgNewsThree} alt="cover" />
          <div>
            <h2>Teaam increased</h2>
            <p>3 developers joined the team</p>
          </div>
        </div>
        <span>7 Days ago</span>
      </div>
      <div className="flex">
        <div className="flex">
          <img className="w-24 rounded-md" src={imgNewsFour} alt="cover" />
          <div>
            <h2>Added payment gateway</h2>
            <p>Many new payment gateway</p>
          </div>
        </div>
        <span>9 Days ago</span>
      </div>
    </div>
  );
}

export default News;
