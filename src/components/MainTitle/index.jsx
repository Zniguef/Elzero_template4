import * as React from "react";
import { DarkModeContext } from "../../core/context/DarkModeContext";

function MainTitle({ title, className = "" }) {
  const isDarkMode = React.useContext(DarkModeContext);
  return (
    <h1
      className={`${className} ${
        isDarkMode ? "!text-gray-200" : "!text-black"
      } text-2xl font-medium mb-4`}
    >
      {title}
    </h1>
  );
}

export default MainTitle;
