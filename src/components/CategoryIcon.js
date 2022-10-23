import React from "react";
import { ReactComponent as MovieCatIcon } from "../icons/icon-category-movie.svg";
import { ReactComponent as TVCatIcon } from "../icons/icon-category-tv.svg";

const CategoryIcon = ({ category }) => {
  return <>{category === "Movie" ? <MovieCatIcon /> : <TVCatIcon />}</>;
};

export default CategoryIcon;
