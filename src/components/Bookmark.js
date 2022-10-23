import React from "react";
import { ReactComponent as BookmarkEmpty } from "../icons/icon-bookmark-empty.svg";
import { ReactComponent as BookmarkFull } from "../icons/icon-bookmark-full.svg";

import { bookmarkMovie } from "../actions";
import { connect } from "react-redux";

const Bookmark = (props) => {
  return (
    <div
      onClick={(e) => {
        props.bookmarkMovie(props.title);
        e.stopPropagation();
      }}
    >
      {props.isBookmarked ? <BookmarkFull /> : <BookmarkEmpty />}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    filtered: state.filtered,
    movies: state.movies,
  };
};

export default connect(mapStateToProps, { bookmarkMovie })(Bookmark);
