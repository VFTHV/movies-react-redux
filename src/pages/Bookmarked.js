import React from "react";

import MovieList from "../components/MovieList";
import SearchInp from "../components/SearchInp";

import { filterBookmarked } from "../actions";
import { connect } from "react-redux";
import { useEffect, useState } from "react";

const Bookmarked = (props) => {
  const [query, setQuery] = useState("");
  useEffect(() => {
    props.filterBookmarked();
  }, [props.movies]);

  const renderLists = () => {
    return (
      <>
        <MovieList
          movies={props.filtered.filter(({ category }) => category === "Movie")}
          header="Bookmarked Movies"
        />
        <MovieList
          movies={props.filtered.filter(
            ({ category }) => category === "TV Series"
          )}
          header="Bookmarked TV Series"
        />
      </>
    );
  };

  const filteredItems = props.filtered.filter((movie) =>
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
