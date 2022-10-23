import React from "react";
import MovieCard from "./MovieCard";
import useWindowDimensions from "../hooks/useWindowDimensions";

const MovieList = (props) => {
  const { width } = useWindowDimensions();
  const renderList = () => {
    if (props.movies.length === 0) return;

    return (
      <>
        <h2 className="h1">{props.header}</h2>
        <ul className={props.isTrending ? "trending-list" : "movie-list"}>
          {props.movies.map((movie) => (
            <MovieCard
              key={movie.title}
              title={movie.title}
              year={movie.year}
              rating={movie.rating}
              category={movie.category}
              isBookmarked={movie.isBookmarked}
              thumbnail={movie.thumbnail}
              isTrending={props.isTrending}
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
