import React from "react";
import Notifications from "./components/Notification";
import ProfileImage from "./components/ProfileImage";
import Search from "./components/Search";

const Header = () => {
  return (
    <div className="flex justify-between px-4 py-5">
      <Search />
      <div className="flex justify-between items-center px-3 gap-3">
        <Notifications />
        <ProfileImage />
      </div>
    </div>
  );
};

export default Header;
