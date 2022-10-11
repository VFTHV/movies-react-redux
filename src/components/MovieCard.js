import React from "react";
import { ReactComponent as CategoryLogo } from "../assets/icon-category-movie.svg";
import Bookmark from "./Bookmark";

const MovieCard = (props) => {
  // props needed: category, year, name, rating,
  return (
    <div className={`movie-card ${props.trending ? "trending" : ""} m-bl-1`}>
      <img
        src={require(`../assets/thumbnails/beyond-earth/trending/small.jpg`)}
      />
      <div className="card-content">
        <ul>
          <li>2019</li>
          <li>
            <div className="category-list-item">
              <CategoryLogo />
              <span>Movie</span>
            </div>
          </li>
          <li>PG</li>
        </ul>
        <h3 className={`${props.trending ? "h2" : "h3"}`}>Beyond Earth</h3>
      </div>
      <div className="bookmark">
        <Bookmark bookmarked={props.bookmarked} />
      </div>
    </div>
  );
};

export default MovieCard;
