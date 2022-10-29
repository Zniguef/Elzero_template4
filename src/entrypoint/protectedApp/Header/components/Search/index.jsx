import React from "react";
import { FaSearch } from "react-icons/fa";
import "./styles.scss";
import { DarkModeContext } from "../../../../../core/context/DarkModeContext";
import { useNavigate } from "react-router-dom";
import { Routing } from "../../../../Routes";

function Search() {
  const isDarkMode = React.useContext(DarkModeContext);
  const navigate = useNavigate();
  const [routes, setRoutes] = React.useState([]);
  const [path, setPath] = React.useState("");
  const routing = Object.values(Routing)?.filter(
    (r) => r?.path !== Routing.login.path
  );

  function SearchForPage(ev) {
    setPath(
      routes?.find((e) => {
        if (ev?.target?.value?.startsWith("d")) {
          return "/";
        }
        return e.startsWith(`/${ev?.target?.value}`);
      })
    );
  }

  function navigateToPage(e) {
    if (
      e?.ctrlKey === true &&
      e?.key === "Enter" &&
      path !== undefined &&
      path !== ""
    )
      navigate(path);
    if (
      e?.ctrlKey === true &&
      e?.key === "Enter" &&
      (path === undefined || path === "")
    )
      alert("Oops..! it looks like this path doesn't exist.");
  }

  React.useEffect(() => {
    Object.values(routing)?.map((rout) =>
      setRoutes((prev) => [...prev, rout?.path])
    );
  }, []);

  return (
    <div className={`searchBoxContainer pl-2 h-10`}>
      <FaSearch className="searchIcon" />
      <input
        onKeyPress={(e) => navigateToPage(e)}
        onChange={(e) => SearchForPage(e)}
        className={`${
          isDarkMode ? "text-gray-200" : "text-black"
        } searchInput bg-transparent`}
        type="search"
        placeholder="Type a page name"
      />
    </div>
  );
}

export default Search;
