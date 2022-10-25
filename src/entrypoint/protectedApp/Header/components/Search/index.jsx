import React from "react";
import { FaSearch } from "react-icons/fa";
import "./styles.scss";

function Search() {
  return (
    <div className={`searchBoxContainer pl-2`}>
      <FaSearch className="searchIcon" />
      <input
        className="searchInput bg-transparent"
        type="search"
        name=""
        id=""
        placeholder="Type A Keyword"
      />
    </div>
  );
}

export default Search;
