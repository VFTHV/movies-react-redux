import React from "react";
import { useState } from "react";
import SearchIcon from "../icons/icon-search.svg";

const SearchInp = () => {
  const [input, setInput] = useState("");

  return (
    <div className="container">
      <form className="p-bl-1">
        <div className="input-container">
          <div className="icon-container">
            <img src={SearchIcon} />
          </div>
          <input
            className="search-inp"
            type="text"
            placeholder="Search for movies or TV series"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchInp;
