import React from "react";
import { useState, useEffect } from "react";
import SearchIcon from "../icons/icon-search.svg";

const SearchInp = ({ setQuery, placeholder }) => {
  const [term, setTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState("");

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    setQuery(debouncedTerm);
  }, [debouncedTerm]);

  const onSubmit = (e) => {
    e.preventDefault();
    setQuery(term);
  };

  return (
    <form aria-label="movie search bar" className="p-bl-1" onSubmit={onSubmit}>
      <div className="input-container">
        <div className="icon-container">
          <img src={SearchIcon} aria-label="search icon" />
        </div>
        <input
          aria-label="search input"
          className="search-inp"
          type="text"
          placeholder={placeholder}
          onChange={(e) => setTerm(e.target.value)}
          value={term}
        />
      </div>
    </form>
  );
};

export default SearchInp;
