import {
  FaChartBar,
  FaCog,
  FaFileAlt,
  FaGraduationCap,
  FaNewspaper,
  FaProjectDiagram,
  FaUserAlt,
  FaUserCircle,
} from "react-icons/fa";
import { Routing } from "../../../entrypoint/Routes";
import { sideMenuConsts } from "../../../utils/constants";

export const menuItems = [
  {
    id: 1,
    icon: FaChartBar,
    link: Routing.dashboard.path,
    name: sideMenuConsts.dashboard,
  },
  {
    id: 2,
    icon: FaCog,
    link: Routing.settings.path,
    name: sideMenuConsts.settings,
  },
  {
    id: 3,
    icon: FaUserAlt,
    link: Routing.profile.path,
    name: sideMenuConsts.profile,
  },
  {
    id: 4,
    icon: FaProjectDiagram,
    link: Routing.projects.path,
    name: sideMenuConsts.projects,
  },
  {
    id: 5,
    icon: FaGraduationCap,
    link: Routing.courses.path,
    name: sideMenuConsts.courses,
  },
  {
    id: 6,
    icon: FaUserCircle,
    link: Routing.friends.path,
    name: sideMenuConsts.friends,
  },
  {
    id: 7,
    icon: FaFileAlt,
    link: Routing.files.path,
    name: sideMenuConsts.files,
  },
  {
    id: 8,
    icon: FaNewspaper,
    link: Routing.plans.path,
    name: sideMenuConsts.plans,
  },
];
