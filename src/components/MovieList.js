import React from "react";
import MovieCard from "./MovieCard";

const MovieList = (props) => {
  const renderList = () => {
    if (props.movies.length === 0) return;

    return (
      <>
        <h2 className="h1">{props.header}</h2>
        <ul className={props.isTrending ? "trending-list" : "movie-list"}>
          {props.movies.map((movie) => (
            <li key={movie.title}>
              <MovieCard
                title={movie.title}
                year={movie.year}
                rating={movie.rating}
                category={movie.category}
                isBookmarked={movie.isBookmarked}
                thumbnail={movie.thumbnail}
                isTrending={props.isTrending}
              />
            </li>
          ))}
        </ul>
      </>
    );
  };

  return <>{renderList()}</>;
};

export default MovieList;
