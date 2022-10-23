import React from "react";

import MovieList from "../components/MovieList";

import { filterMovies } from "../actions";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import SearchInp from "../components/SearchInp";

const Movies = ({ filterMovies, movies, filtered }) => {
  const [query, setQuery] = useState("");
  useEffect(() => {
    filterMovies();
  }, [movies]);

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
      <SearchInp setQuery={setQuery} placeholder="Search for Movies" />
      {query === "" ? (
        <MovieList movies={filtered} header="Movies" />
      ) : (
        renderSearch()
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    filtered: state.filtered,
    movies: state.movies,
  };
};

export default connect(mapStateToProps, { filterMovies })(Movies);
