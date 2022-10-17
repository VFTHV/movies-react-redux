import actions from "../actions/actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case actions.filterMovies:
      return action.payload;
    case actions.filterTvSeries:
      return action.payload;
    case actions.filterBookmarked:
      return action.payload;
    case actions.filterTrendingAndRecommended:
      return action.payload;
    default:
      return state;
  }
};
