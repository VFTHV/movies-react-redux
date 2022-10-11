import React from "react";
import MovieCard from "./MovieCard";

const TrendingList = () => {
  return (
    <div>
      <h2 className="h1">Recommended for you</h2>
      <MovieCard trending={true} bookmarked={true} />
    </div>
  );
};

export default TrendingList;
