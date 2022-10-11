import React from "react";
import MovieCard from "./MovieCard";

const MovieList = () => {
  return (
    <div>
      <h2 className="h1">Trending</h2>
      <MovieCard trending={false} bookmarked={false} />
    </div>
  );
};

export default MovieList;
