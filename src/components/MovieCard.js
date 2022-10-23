import React from "react";
import CategoryIcon from "./CategoryIcon";
import Bookmark from "./Bookmark";
import { ReactComponent as IconPlay } from "../icons/icon-play.svg";

const MovieCard = (props) => {
  // props needed: category, year, name, rating,
  // do srcset for pictures
  // if isTrending then picture must render thumbnail.trending from object

  const image = props.isTrending
    ? props.thumbnail.trending
    : props.thumbnail.regular;

  const smallImg = image.small.substr(2);

  return (
    <li>
      <div
        className={`movie-card ${props.isTrending ? "trending" : ""} m-bl-1`}
      >
        <div
          className="card-media"
          style={{ backgroundImage: `url(${smallImg})` }}
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
            <li>
              <div className="category-list-item">
                <CategoryIcon category={props.category} />
                <span>{props.category}</span>
              </div>
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
