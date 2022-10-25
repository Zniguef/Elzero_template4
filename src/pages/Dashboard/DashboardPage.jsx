import React from "react";
import { useContext } from "react";
import MainTitle from "../../components/MainTitle";
import { DarkModeContext } from "../../core/context/DarkModeContext";
import Draft from "./components/Draft";
import News from "./components/News";
import Statistics from "./components/Statistics";
import Target from "./components/Targets";
import Tasks from "./components/Tasks";
import Welcome from "./components/Welcome/index";

const Dashboard = () => {
  const isDarkMode = useContext(DarkModeContext)
  return (
    <div>
      <MainTitle title="Dashboard" />
      <div className="grid grid-cols-3 mb-6 gap-4">
        <Welcome />
        <Draft />
        <Target />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <Statistics />
        <News isDarkMode={isDarkMode} />
        <Tasks isDarkMode={isDarkMode} />
      </div>
      <div className="flex items-center justify-between"></div>
    </div>
  );
};

export default Dashboard;
