import React from "react";
import CategoryIcon from "./CategoryIcon";
import Bookmark from "./Bookmark";

const MovieCard = (props) => {
  // props needed: category, year, name, rating,
  // do srcset for pictures
  // if isTrending then picture must render thumbnail.trending from object

  const image = props.isTrending
    ? props.thumbnail.trending
    : props.thumbnail.regular;

  const smallImg = image.small.substr(2);

  return (
    <div className={`movie-card ${props.isTrending ? "trending" : ""} m-bl-1`}>
      <img src={smallImg} />
      <div className="card-content">
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
        <h3 className={`${props.trending ? "h2" : "h3"}`}>{props.title}</h3>
      </div>
      <div className="bookmark">
        <Bookmark isBookmarked={props.isBookmarked} />
      </div>
    </div>
  );
};

export default MovieCard;
