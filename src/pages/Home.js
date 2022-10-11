import React from "react";
import MovieList from "../components/MovieList";
import TrendingList from "../components/TrendingList";

const Home = () => {
  return (
    <div className="container">
      <TrendingList />
      <MovieList />
    </div>
  );
};

export default Home;
