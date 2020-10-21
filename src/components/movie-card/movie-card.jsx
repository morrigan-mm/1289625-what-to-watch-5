import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {filmShape} from "../../prop-types";

class MovieCard extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {isActive, film, onCardActiveChange} = this.props;
    const {cover, title, preview} = film;

    const media = isActive
      ? <video autoPlay src={preview} width="280" height="175" muted></video>
      : <img src={cover} alt={title} width="280" height="175" />;

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseEnter={() => onCardActiveChange(film.id, true)}
        onMouseLeave={() => onCardActiveChange(film.id, false)}
      >
        <Link className="small-movie-card__link" to={`/films/${film.id}`}>
          <div className="small-movie-card__image">
            {media}
          </div>
          <h3 className="small-movie-card__title">
            <span className="small-movie-card__link">{title}</span>
          </h3>
        </Link>
      </article>
    );
  }
}

MovieCard.propTypes = {
  onCardActiveChange: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  film: filmShape.isRequired
};

export default MovieCard;
