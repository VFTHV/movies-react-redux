import { axiosFetch, axiosPut } from "../apis/movies_api";
import actionTypes from "./actionTypes";
import actions from "./actionTypes";

// get data

export const fetchAll = () => async (dispatch) => {
  const response = await axiosFetch.get("/18");

  dispatch({ type: actions.fetchAll, payload: response.data });
};

export const bookmarkMovie = (title) => async (dispatch, getState) => {
  // get all the state
  const allMovies = getState().movies;
  // get index of the item that has this TITLE
  const index = allMovies.record.findIndex((object) => object.title === title);
  // define the alternate boolean
  const bookmarkBoolean = allMovies.record[index].isBookmarked ? false : true;
  // bookmark or unBookmark the item
  allMovies.record[index].isBookmarked = bookmarkBoolean;
  // put the whole data into payload
  const response = await axiosPut.put("/", JSON.stringify(allMovies.record));

  dispatch({ type: actionTypes.bookmark_movie, payload: allMovies });
};

export const filterMovies = () => (dispatch, getState) => {
  if (!getState().movies.record) return;

  const allRecords = getState().movies.record;
  const filtered = allRecords.filter((movie) => movie.category === "Movie");

  dispatch({ type: actions.filterMovies, payload: filtered });
};

export const filterTvSeries = () => (dispatch, getState) => {
  if (!getState().movies.record) return;
  const allRecords = getState().movies.record;
  const filtered = allRecords.filter((movie) => movie.category === "TV Series");

  dispatch({ type: actions.filterTvSeries, payload: filtered });
};

export const filterBookmarked = () => (dispatch, getState) => {
  if (!getState().movies.record) return;
  const allRecords = getState().movies.record;
  const filtered = allRecords.filter((movie) => Boolean(movie.isBookmarked));

  dispatch({ type: actions.filterBookmarked, payload: filtered });
};

export const filterTrendingAndRecommended = () => (dispatch, getState) => {
  if (!getState().movies.record) return;
  const allRecords = getState().movies.record;
  const trending = allRecords.filter((movie) => Boolean(movie.isTrending));
  const recommended = allRecords.filter((movie) => Boolean(!movie.isTrending));
  const both = [...trending, ...recommended];

  dispatch({ type: actions.filterTrendingAndRecommended, payload: both });
};
