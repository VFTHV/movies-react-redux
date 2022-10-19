import React from "react";
import { useState, useEffect } from "react";
import SearchIcon from "../icons/icon-search.svg";

const SearchInp = (props) => {
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
    props.setQuery(debouncedTerm);
  }, [debouncedTerm]);

  const onSubmit = (e) => {
    e.preventDefault();
    props.setQuery(term);
  };

  return (
    <form className="p-bl-1" onSubmit={onSubmit}>
      <div className="input-container">
        <div className="icon-container">
          <img src={SearchIcon} />
        </div>
        <input
          className="search-inp"
          type="text"
          placeholder={props.placeholder}
          onChange={(e) => setTerm(e.target.value)}
          value={term}
        />
      </div>
    </form>
  );
};

export default SearchInp;
