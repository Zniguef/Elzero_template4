import React from "react";
import { FaSearch } from "react-icons/fa";

function Search() {
  return (
    <div>
      <FaSearch className="absolute bg-red-500 z-50" />
      <input
        className="outline-none border p-1 rounded relative"
        type="search"
        name=""
        id=""
        placeholder="Type A Keyword"
      />
    </div>
  );
}

export default Search;
