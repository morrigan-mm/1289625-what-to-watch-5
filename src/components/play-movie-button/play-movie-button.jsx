import React from "react";
import PropTypes from "prop-types";

const PlayMovieButton = ({onClick}) => {
  return (
    <button
      className="btn btn--play movie-card__button"
      type="button"
      onClick={onClick}
    >
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use href="#play-s"></use>
      </svg>
      <span>Play</span>
    </button>
  );
};

PlayMovieButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default PlayMovieButton;
