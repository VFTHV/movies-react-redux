import React from "react";
import { ReactComponent as CategoryLogo } from "../assets/icon-category-movie.svg";

const MovieCard = () => {
  return (
    <div className="movie-card trending m-bl-1">
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
        <h3 className="h3">Beyond Earth</h3>
      </div>
    </div>
  );
};

export default MovieCard;
