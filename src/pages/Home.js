import React from "react";
import MovieCard from "../components/MovieCard";

const Home = () => {
  return (
    <div className="container">
      <h2 className="h2">Trending</h2>

      <MovieCard />
    </div>
  );
};

export default Home;
