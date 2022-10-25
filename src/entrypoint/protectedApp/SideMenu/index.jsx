import React from "react";
import { Link } from "react-router-dom";
import { BsChevronDoubleLeft } from "react-icons/bs";
import { menuItems } from "../../../core/data/SideMenu";
import { DarkModeContext } from "../../../core/context/DarkModeContext";

const SideMenu = () => {
  const [isMenuCollapsed, setIsMenuCollapsed] = React.useState(false);
  const isDarkMode = React.useContext(DarkModeContext);
  return (
    <div
      className={`${
        isDarkMode ? "bg-secondary-dark" : "bg-white"
      } side-menu-bar w-fit h-screen text-center shadow-md
      shadow-gray-500 z-10 px-2 flex flex-col justify-between pt-4 pb-4`}
    >
      <div>
        <div className="logo py-4">
          <h1
            className={`${
              isDarkMode ? "text-gray-300" : "text-black"
            } font-medium text-lg`}
          >
            Elzero
          </h1>
        </div>
        <ul className="side-menu-paths flex flex-col items-center !p-3 mt-3">
          {menuItems?.map((elem) => {
            const Icon = elem?.icon;
            return (
              <li
                className="flex items-center w-full gap-4 py-1 px-2 mb-4 h-6"
                key={elem.id}
              >
                <Link
                  className="w-full flex text-sm items-center gap-4"
                  to={elem?.link}
                >
                  <Icon
                    className={isDarkMode ? "text-gray-300" : "text-black"}
                  />
                  <span
                    className={`${isMenuCollapsed ? "hidden" : "block"} ${
                      isDarkMode ? "text-gray-300" : "text-black"
                    }`}
                  >
                    {elem?.name}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <button
        className={`${
          isDarkMode ? "text-white" : "text-black"
        } w-full hover:bg-black hover:bg-opacity-20 py-2 rounded transition-colors flex items-center justify-evenly`}
        onClick={() => setIsMenuCollapsed((prev) => !prev)}
        type="button"
      >
        <BsChevronDoubleLeft
          className={`${
            isMenuCollapsed ? "rotate-180" : "rotate-0"
          } transition-all`}
        />
        <span className={`${isMenuCollapsed ? "hidden" : "block"} text-sm`}>
          Collapse
        </span>
      </button>
    </div>
  );
};

export default SideMenu;
