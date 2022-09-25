import React from "react";
import { Link } from "react-router-dom";
import { sideMenuConsts } from "../../../utils/constants";
import { Routing } from "../../Routes";

const SideMenu = () => {
  return (
    <div className="side-menu-bar w-44 h-screen">
      <div className="logo">
        <h1>Elzero</h1>
      </div>
      <ul className="side-menu-paths">
        <li>
          <Link to={Routing.app.path}>{sideMenuConsts.dashboard}</Link>
        </li>
        <li>
          <Link to={Routing.settings.path}>{sideMenuConsts.settings}</Link>
        </li>
        <li>
          <Link to={Routing.profile.path}>{sideMenuConsts.profile}</Link>
        </li>
        <li>
          <Link to={Routing.projects.path}>{sideMenuConsts.projects}</Link>
        </li>
        <li>
          <Link to={Routing.courses.path}>{sideMenuConsts.courses}</Link>
        </li>
        <li>
          <Link to={Routing.friends.path}>{sideMenuConsts.friends}</Link>
        </li>
        <li>
          <Link to={Routing.files.path}>{sideMenuConsts.files}</Link>
        </li>
        <li>
          <Link to={Routing.plans.path}>{sideMenuConsts.plans}</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;
