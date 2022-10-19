import React, { useEffect, useState } from "react";
import MovieList from "../components/MovieList";

import { connect } from "react-redux";
import { filterTrendingAndRecommended } from "../actions";
import SearchInp from "../components/SearchInp";

const Home = (props) => {
  const [query, setQuery] = useState("");
  useEffect(() => {
    props.filterTrendingAndRecommended();
  }, [props.movies]);

  const renderLists = () => {
    return (
      <>
        <MovieList
          movies={props.filtered.filter((i) => i.isTrending)}
          header="Trending"
          isTrending
        />
        <MovieList
          movies={props.filtered.filter((i) => !i.isTrending)}
          header="Recommended for you"
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

export default connect(mapStateToProps, { filterTrendingAndRecommended })(Home);
