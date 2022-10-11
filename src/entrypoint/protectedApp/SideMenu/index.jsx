import React from "react";
import { Link } from "react-router-dom";
import { sideMenuConsts } from "../../../utils/constants";
import { Routing } from "../../Routes";
import {
  FaCog,
  FaUserAlt,
  FaChartBar,
  FaProjectDiagram,
  FaFileAlt,
  FaUserCircle,
  FaGraduationCap,
  FaNewspaper,
} from "react-icons/fa";

const SideMenu = () => {
  return (
    <div className="side-menu-bar w-44 h-screen text-center">
      <div className="logo p-4">
        <h1 className="font-medium text-lg">Elzero</h1>
      </div>
      <ul className="side-menu-paths flex flex-col items-center h-screen p-3 mt-3">
        <li className="flex items-center w-full gap-4 py-1 px-2 mb-4">
          <FaChartBar />
          <Link to={Routing.app.path}>{sideMenuConsts.dashboard}</Link>
        </li>
        <li className="flex items-center w-full gap-4 py-1 px-2 mb-4">
          <FaCog />
          <Link to={Routing.settings.path}>{sideMenuConsts.settings}</Link>
        </li>
        <li className="flex items-center w-full gap-4 py-1 px-2 mb-4">
          <FaUserAlt />
          <Link to={Routing.profile.path}>{sideMenuConsts.profile}</Link>
        </li>
        <li className="flex items-center w-full gap-4 py-1 px-2 mb-4">
          <FaProjectDiagram />
          <Link to={Routing.projects.path}>{sideMenuConsts.projects}</Link>
        </li>
        <li className="flex items-center w-full gap-4 py-1 px-2 mb-4">
          <FaGraduationCap />
          <Link to={Routing.courses.path}>{sideMenuConsts.courses}</Link>
        </li>
        <li className="flex items-center w-full gap-4 py-1 px-2 mb-4">
          <FaUserCircle />
          <Link to={Routing.friends.path}>{sideMenuConsts.friends}</Link>
        </li>
        <li className="flex items-center w-full gap-4 py-1 px-2 mb-4">
          <FaFileAlt />
          <Link to={Routing.files.path}>{sideMenuConsts.files}</Link>
        </li>
        <li className="flex items-center w-full gap-4 py-1 px-2 mb-4">
          <FaNewspaper />
          <Link to={Routing.plans.path}>{sideMenuConsts.plans}</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;
