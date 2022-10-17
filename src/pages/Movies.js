import React from "react";

import MovieList from "../components/MovieList";

import { filterMovies } from "../actions";
import { connect } from "react-redux";
import { useEffect } from "react";

const Movies = (props) => {
  useEffect(() => {
    props.filterMovies();
  }, [props.movies]);

  return (
    <div className="container">
      <h2 className="h1">Movies</h2>
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

export default connect(mapStateToProps, { filterMovies })(Movies);
