import React from "react";
import { useContext } from "react";
import MainTitle from "../../components/MainTitle";
import { DarkModeContext } from "../../core/context/DarkModeContext";
import Draft from "./components/Draft";
import News from "./components/News";
import LatestPosts from "./components/Post";
import LastProjects from "./components/Projects";
import Reminder from "./components/Reminders";
import TopSearchItems from "./components/SearchItems";
import SocialMedia from "./components/SocialMedia";
import Statistics from "./components/Statistics";
import Target from "./components/Targets";
import Tasks from "./components/Tasks";
import Uploads from "./components/Uploads";
import Welcome from "./components/Welcome/index";

const Dashboard = () => {
  const isDarkMode = useContext(DarkModeContext);
  return (
    <div>
      <MainTitle title="Dashboard" />
      <div className="grid grid-cols-3 mb-6 gap-4">
        <Welcome isDarkMode={isDarkMode} />
        <Draft isDarkMode={isDarkMode} />
        <Target isDarkMode={isDarkMode} />
      </div>
      <div className="grid grid-cols-3 mb-6 gap-4">
        <Statistics isDarkMode={isDarkMode} />
        <News isDarkMode={isDarkMode} />
        <Tasks isDarkMode={isDarkMode} />
      </div>
      <div className="grid grid-cols-3 mb-6 gap-4">
        <TopSearchItems isDarkMode={isDarkMode} />
        <Uploads isDarkMode={isDarkMode} />
        <LastProjects isDarkMode={isDarkMode} />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <Reminder isDarkMode={isDarkMode} />
        <LatestPosts isDarkMode={isDarkMode} />
        <SocialMedia isDarkMode={isDarkMode} />
      </div>
    </div>
  );
};

export default Dashboard;
