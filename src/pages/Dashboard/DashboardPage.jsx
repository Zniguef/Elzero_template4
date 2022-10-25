import React from "react";
import Draft from "./components/Draft";
import News from "./components/News";
import Statistics from "./components/Statistics";
import Target from "./components/Targets";
import Tasks from "./components/Tasks";
import Welcome from "./components/Welcome/index";

const Dashboard = () => {
  return (
    <div className="bg-background-color p-4">
      <h1 className="text-xl font-medium mb-4">Dashboard</h1>
      <div className="grid grid-cols-3 mb-6 gap-4">
        <Welcome />
        <Draft />
        <Target />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <Statistics />
        <News />
        <Tasks />
      </div>
      <div className="flex items-center justify-between"></div>
    </div>
  );
};

export default Dashboard;
