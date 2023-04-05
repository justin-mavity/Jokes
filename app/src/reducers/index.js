import {
  FETCH_JOKE_ANSWER,
  FETCH_JOKE_FAIL,
  FETCH_JOKE_START,
  FETCH_JOKE_SUCCESS,
} from "./../actions";

const initialState = {
  joke: "",
  answer: "",
  isFetching: false,
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOKE_START:
      return {
        ...state,
        joke: "",
        answer: "",
        isFetching: true,
        error: "",
      };
    case FETCH_JOKE_SUCCESS:
      return {
        ...state,
        joke: action.payload,
        answer: "",
        isFetching: false,
        error: "",
      };
    case FETCH_JOKE_ANSWER:
      return {
        ...state,
        answer: action.payload,
        isFetching: false,
        error: "",
      };
    case FETCH_JOKE_FAIL:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };

    default:
      return state;
  }
};
