import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const ALL_GENRES = `All Genres`;

const renderGenre = (genre, isActive, onGenreClick) => {
  const handleClick = (evt) => {
    evt.preventDefault();
    onGenreClick(genre);
  };

  return (
    <li
      key={genre}
      className={classNames(`catalog__genres-item`, {'catalog__genres-item--active': isActive})}>
      <a href="#" className="catalog__genres-link" onClick={handleClick}>{genre}</a>
    </li>
  );
};

const GenreList = ({genres, activeGenre, onGenreClick}) => {
  return (
    <ul className="catalog__genres-list">
      {renderGenre(ALL_GENRES, !activeGenre, () => onGenreClick(``))}
      {genres.map((genre) => renderGenre(genre, genre === activeGenre, onGenreClick))}
    </ul>
  );
};

GenreList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeGenre: PropTypes.string,
  onGenreClick: PropTypes.func.isRequired
};

export default GenreList;
