import React from "react";

import MovieList from "../components/MovieList";

import { filterTvSeries } from "../actions";
import { connect } from "react-redux";
import { useEffect } from "react";

const TVSeries = (props) => {
  useEffect(() => {
    props.filterTvSeries();
  }, [props.movies]);
  return (
    <div className="container">
      <h2 className="h1">TV Series</h2>
      <MovieList movies={props.filtered} />
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
