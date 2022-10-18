import React from "react";
import { ReactComponent as BookmarkEmpty } from "../icons/icon-bookmark-empty.svg";
import { ReactComponent as BookmarkFull } from "../icons/icon-bookmark-full.svg";

const Bookmark = (props) => {
  return <>{props.isBookmarked ? <BookmarkFull /> : <BookmarkEmpty />}</>;
};

export default Bookmark;
