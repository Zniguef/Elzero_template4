import React from "react";
import MainTitle from "../../components/MainTitle";
import "./styles.scss";
import Card from "./components/Card";
import Skills from "./components/Skills";
import Activities from "./components/Activities";
import { DarkModeContext } from "../../App";

const Profile = () => {
  const isDarkMode = React.useContext(DarkModeContext);
  return (
    <div className="gap-3 flex flex-col">
      <MainTitle title="Profile" />
      <Card isDarkMode={isDarkMode} />
      <div className="flex gap-3 flex-col lg:flex-row">
        <Skills isDarkMode={isDarkMode} />
        <Activities isDarkMode={isDarkMode} />
      </div>
    </div>
  );
};

export default Profile;
