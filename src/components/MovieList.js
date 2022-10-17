import React from "react";
import MovieCard from "./MovieCard";

const MovieList = (props) => {
  // to do:
  // isTrending must change to carousel - MovieList
  // isBookmarked, isTrending should choose proper items from the list
  // category should change logo on card
  // recommended for you is when isTrending is false
  // create function renderRecommended, renderIsTrending, renderIsBookmarked etc...
  // JSX for header needs to be declared in the page component
  // make each page fetch it's own content.
  // add filter by title action into the reducer using getState
  // create a function that return correct item for filtering below
  // e.g. recommended, bookmarked,
  console.log(props.movies);

  const renderList = () => {
    if (!props.movies) return;

    return (
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
    );
  };

  return <>{renderList()}</>;
};

export default MovieList;
