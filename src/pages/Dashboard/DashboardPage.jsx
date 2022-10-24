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
      <div className="flex items-center justify-between mb-6">
        <Welcome />
        <Draft />
        <Target />
      </div>
      <div className="flex items-center justify-between">
        <Statistics />
        <News />
        <Tasks />
      </div>
      <div className="flex items-center justify-between"></div>
    </div>
  );
};

export default Dashboard;
