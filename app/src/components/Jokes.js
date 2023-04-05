import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getJoke } from "../actions";

const Joke = ({ joke, answer, isFetching, error, getJoke }) => {
  useEffect(() => {
    getJoke();
  }, [getJoke]);

  const handleJokeClick = () => {
    getJoke();
  };

  if (error) {
    <h2>There was a problem: {error}</h2>;
  }
  if (isFetching) {
    <h2>We are fetching a joke!</h2>;
  }

  return (
    <div>
      <div className="joke container">
        <h2>Joke: {joke}</h2>
        <button className="btn joke" onCLick={handleJokeClick}>
          New Joke
        </button>
      </div>
      <div className="answer container">
        <p>Answer: {answer}</p>
      </div>
    </div>
  );
};

const mapStateToProps = (State) => {
  return {
    joke: State.joke,
    answer: State.answer,
    isFetching: State.isFetching,
    error: State.error,
  };
};

export default connect(mapStateToProps, { getJoke })(Joke);
