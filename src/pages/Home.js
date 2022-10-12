import React from "react";
import MovieList from "../components/MovieList";
import TrendingList from "../components/TrendingList";
import { fetchMovies } from "../actions";
import { connect } from "react-redux";
import { useEffect } from "react";

const Home = (props) => {
  useEffect(() => {
    props.fetchMovies();
  }, []);
  console.log(props.movies);
  return (
    <div className="container">
      <TrendingList />
      <MovieList />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  };
};

export default connect(mapStateToProps, { fetchMovies })(Home);
