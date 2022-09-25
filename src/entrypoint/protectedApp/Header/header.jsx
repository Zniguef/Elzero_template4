import React from "react";
import Notifications from "./components/Notification";
import ProfileImage from "./components/ProfileImage";
import Search from "./components/Search";

const Header = () => {
  return (
    <div className="flex justify-between">
      <Search />
      <div className="flex justify-between">
        <Notifications />
        <ProfileImage />
      </div>
    </div>
  );
};

export default Header;
