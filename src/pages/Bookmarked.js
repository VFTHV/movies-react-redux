import React from "react";

import MovieList from "../components/MovieList";
import SearchInp from "../components/SearchInp";

import { filterBookmarked } from "../actions";
import { connect } from "react-redux";
import { useEffect, useState } from "react";

const Bookmarked = ({ filterBookmarked, movies, filtered }) => {
  const [query, setQuery] = useState("");
  useEffect(() => {
    filterBookmarked();
  }, [movies]);

  const renderLists = () => {
    return (
      <>
        <MovieList
          movies={filtered.filter(({ category }) => category === "Movie")}
          header="Bookmarked Movies"
        />
        <MovieList
          movies={filtered.filter(({ category }) => category === "TV Series")}
          header="Bookmarked TV Series"
        />
      </>
    );
  };

  const filteredItems = filtered.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );

  const renderSearch = () => {
    let header = `Found ${filteredItems.length} for "${query}"`;
    if (filteredItems.length === 0) {
      return <h2 className="h1">Nothing found for "{query}"</h2>;
    }
    return <MovieList movies={filteredItems} header={header} />;
  };

  return (
    <div className="container">
      <SearchInp
        setQuery={setQuery}
        placeholder="Search for movies or TV series"
      />
      {query === "" ? renderLists() : renderSearch()}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    filtered: state.filtered,
    movies: state.movies,
  };
};

export default connect(mapStateToProps, { filterBookmarked })(Bookmarked);
