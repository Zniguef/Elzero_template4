import React from "react";
import { DarkModeContext } from "../../../core/context/DarkModeContext";
import Notifications from "./components/Notification";
import ProfileImage from "./components/ProfileImage";
import Search from "./components/Search";
import "./styles.scss";

const Header = ({ setState }) => {
  const isDarkMode = React.useContext(DarkModeContext);
  return (
    <div
      className={`${
        isDarkMode ? "bg-secondary-dark" : "bg-white"
      } flex justify-between px-4 py-5`}
    >
      <Search />
      <div className="flex justify-between items-center px-3 gap-3">
        <label className="dark-mode-switch">
          <input
            className="dark-mode-input"
            type="checkbox"
            onChange={() => setState((prev) => !prev)}
          />
          <span className="dark-mode-slider dark-mode-round"></span>
        </label>
        <Notifications />
        <ProfileImage />
      </div>
    </div>
  );
};

export default Header;
