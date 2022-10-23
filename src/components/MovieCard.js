import React from "react";
import CategoryIcon from "./CategoryIcon";
import Bookmark from "./Bookmark";
import { ReactComponent as IconPlay } from "../icons/icon-play.svg";

const MovieCard = (props) => {
  const image = props.isTrending
    ? props.thumbnail.trending
    : props.thumbnail.regular;

  const bgrndImg =
    props.windowWidth < 768 ? image.small.substr(2) : image.large.substr(2);

  console.log(bgrndImg);

  return (
    <li>
      <div
        className={`movie-card ${props.isTrending ? "trending" : ""} m-bl-1`}
      >
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
            <Bookmark isBookmarked={props.isBookmarked} title={props.title} />
          </div>
        </div>

        <div className="card-content m-bl-1">
          <ul>
            <li>{props.year}</li>
            <li className="category-list-item">
              <CategoryIcon className="cat-logo" category={props.category} />
              <span>{props.category}</span>
            </li>
            <li>{props.rating}</li>
          </ul>
          <h3 className={`${props.isTrending ? "h2" : "h3"}`}>{props.title}</h3>
        </div>
      </div>
    </li>
  );
};

export default MovieCard;
