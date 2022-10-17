import React, { useEffect } from "react";
import MovieList from "../components/MovieList";

import { connect } from "react-redux";
import { filterTrendingAndRecommended } from "../actions";

const Home = (props) => {
  useEffect(() => {
    props.filterTrendingAndRecommended();
  }, [props.movies]);

  return (
    <div className="container">
      <h2 className="h1">Trending</h2>
      <MovieList movies={props.filtered.trending} isTrending />
      <h2 className="h1">Recommended for you</h2>
      <MovieList movies={props.filtered.recommended} />
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
