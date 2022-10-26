import React from "react";
import CategoryIcon from "./CategoryIcon";
import Bookmark from "./Bookmark";
import { ReactComponent as IconPlay } from "../icons/icon-play.svg";

const MovieCard = (props) => {
  const {
    isTrending,
    thumbnail,
    windowWidth,
    isBookmarked,
    title,
    year,
    rating,
    category,
  } = props;

  const image = isTrending ? thumbnail.trending : thumbnail.regular;

  const bgrndImg =
    windowWidth < 768 ? image.small.substr(2) : image.large.substr(2);

  return (
    <li aria-label="movie card">
      <div className={`movie-card ${isTrending ? "trending" : ""} m-bl-1`}>
        <div
          className="card-media"
          style={{ backgroundImage: `url(${bgrndImg})` }}
        >
          <div className="hover-event">
            <div className="play-movie">
              <IconPlay />
              <h4>Play</h4>
            </div>
          </div>
          <div className="bookmark">
            <Bookmark isBookmarked={isBookmarked} title={title} />
          </div>
        </div>

        <div className="card-content m-bl-1">
          <ul aria-label="movie description list">
            <li aria-label="movie description: year">{year}</li>
            <li
              aria-label="movie description: category"
              className="category-list-item"
            >
              <CategoryIcon className="cat-logo" category={category} />
              <span aria-label="category">{category}</span>
            </li>
            <li aria-label="movie description: rating">{rating}</li>
          </ul>
          <h2 aria-label="title" className={`${isTrending ? "h2" : "h3"}`}>
            {title}
          </h2>
        </div>
      </div>
    </li>
  );
};

export default MovieCard;
