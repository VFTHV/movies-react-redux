import actions from "../actions/actionTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case actions.fetchAll:
      return action.payload;
    case actions.bookmark_movie:
      return { ...action.payload };
    default:
      return state;
  }
};
