import React from "react";

import MovieList from "../components/MovieList";

import { filterTvSeries } from "../actions";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import SearchInp from "../components/SearchInp";

const TVSeries = ({ filterTvSeries, movies, filtered }) => {
  const [query, setQuery] = useState("");
  useEffect(() => {
    filterTvSeries();
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
        <MovieList movies={filtered} header="TV Series" />
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

export default connect(mapStateToProps, { filterTvSeries })(TVSeries);
