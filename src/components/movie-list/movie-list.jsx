import React from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card";
import {filmShape} from "../../prop-types";

const MovieList = ({films}) => {
  return (
    <div className="catalog__movies-list">
      {films.map((film) => (
        <MovieCard
          key={film.id}
          film={film} />
      ))}
    </div>
  );
};

MovieList.propTypes = {
  films: PropTypes.arrayOf(filmShape).isRequired
};

export default MovieList;

