import React from "react";
import {Link} from "react-router-dom";
import {filmShape} from "../../prop-types";
import MoviePreview from "../movie-preview/movie-preview";

const MovieCard = ({film}) => {
  const {cover, title, preview} = film;

  return (
    <article className="small-movie-card catalog__movies-card">
      <Link className="small-movie-card__link" to={`/films/${film.id}`}>
        <MoviePreview video={preview} poster={cover} />
        <h3 className="small-movie-card__title">
          <span className="small-movie-card__link">{title}</span>
        </h3>
      </Link>
    </article>
  );
};

MovieCard.propTypes = {
  film: filmShape.isRequired
};

export default MovieCard;
