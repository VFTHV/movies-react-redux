import React from "react";

import MovieList from "../components/MovieList";

import { filterBookmarked } from "../actions";
import { connect } from "react-redux";
import { useEffect } from "react";

const Bookmarked = (props) => {
  useEffect(() => {
    props.filterBookmarked();
  }, [props.movies]);
  return (
    <div className="container">
      <h2 className="h1">Bookmarked</h2>
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

export default connect(mapStateToProps, { filterBookmarked })(Bookmarked);
