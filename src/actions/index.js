import videos from "../apis/movies_api";

// get data

export const fetchMovies = () => async (dispatch) => {
  const response = await videos.get("/");
  dispatch({ type: "FETCH_MOVIES", payload: response.data });
};

// update data
