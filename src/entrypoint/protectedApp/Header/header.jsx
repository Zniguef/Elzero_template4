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
      } flex justify-between items-center px-4 py-5`}
    >
      <Search />
      <p
        title="Press CTRL & ENTER to navigate your page"
        className={`${
          isDarkMode ? "text-gray-300" : "text-black"
        } p-0 m-0 text-base whitespace-nowrap
        overflow-hidden text-ellipsis px-2 min-w-[100px]`}
      >
        Press CTRL & ENTER to navigate your page
      </p>
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
