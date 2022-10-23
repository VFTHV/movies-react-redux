import actions from "../actions/actionTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case actions.fetchAll:
      console.log("fetching all");
      return action.payload;
    case actions.bookmark_movie:
      console.log("bookmarking");
      return { ...action.payload };
    default:
      return state;
  }
};
