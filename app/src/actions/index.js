import axios from "axios";

export const FETCH_JOKE_START = "FETCH_JPKE_START";
export const FETCH_JOKE_FAIL = "FETCH_JOKE_FAIL";
export const FETCH_JOKE_SUCCESS = "FETCH_JOKE_SUCCESS";
export const FETCH_JOKE_ANSWER = "FETCH_JOKE_ANSWER";

export const getJoke = () => (dispatch) => {
  dispatch({ type: FETCH_JOKE_START });
  axios
    .get("https://v2.jokeapi.dev/joke/Any")
    .then((res) => {
      dispatch({ type: FETCH_JOKE_SUCCESS, payload: res.data.setup });
      dispatch({ type: FETCH_JOKE_ANSWER, payload: res.data.delivery });
    })
    .catch((err) => {
      dispatch({ type: FETCH_JOKE_FAIL, payload: err.response });
    });
};
