import React from "react";
import { ReactComponent as BookmarkEmpty } from "../assets/icon-bookmark-empty.svg";
import { ReactComponent as BookmarkFull } from "../assets/icon-bookmark-full.svg";

const Bookmark = (props) => {
  return <>{props.bookmarked ? <BookmarkFull /> : <BookmarkEmpty />}</>;
};

export default Bookmark;
