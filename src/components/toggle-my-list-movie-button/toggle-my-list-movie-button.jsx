import React from "react";
import PropTypes from "prop-types";

const ToggleMyListMovieButton = ({onClick, disabled, isFavorite}) => {
  return (
    <button className="btn btn--list movie-card__button" type="button" onClick={onClick} disabled={disabled}>
      {isFavorite ?
        <svg viewBox="0 0 18 14" width="18" height="14">
          <use href="#in-list"></use>
        </svg> :
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use href="#add"></use>
        </svg>
      }
      <span>My list</span>
    </button>
  );
};

ToggleMyListMovieButton.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired
};

export default ToggleMyListMovieButton;
