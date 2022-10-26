import React from "react";
import MovieCard from "./MovieCard";
import useWindowDimensions from "../hooks/useWindowDimensions";

const MovieList = ({ movies, header, isTrending }) => {
  const { width } = useWindowDimensions();
  const renderList = () => {
    if (movies.length === 0) return;

    return (
      <>
        <h1 aria-label="movie list header" className="h1">
          {header}
        </h1>
        <ul
          aria-label="movie list"
          className={isTrending ? "trending-list" : "movie-list"}
          tabIndex={isTrending ? 0 : ""}
        >
          {movies.map((movie) => (
            <MovieCard
              key={movie.title}
              title={movie.title}
              year={movie.year}
              rating={movie.rating}
              category={movie.category}
              isBookmarked={movie.isBookmarked}
              thumbnail={movie.thumbnail}
              isTrending={isTrending}
              windowWidth={width}
            />
          ))}
        </ul>
      </>
    );
  };

  return <>{renderList()}</>;
};

export default MovieList;
