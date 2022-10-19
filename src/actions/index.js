import videos from "../apis/movies_api";
import actions from "./actionTypes";

// get data

export const fetchAll = () => async (dispatch) => {
  const response = await videos.get("/");
  dispatch({ type: actions.fetchAll, payload: response.data });
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
