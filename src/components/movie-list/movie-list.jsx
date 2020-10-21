import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card";
import {filmShape} from "../../prop-types";

class MovieList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeFilmId: null
    };

    this.handleCardActiveChange = this.handleCardActiveChange.bind(this);
  }

  handleCardActiveChange(filmId, active) {
    this.setState({
      activeFilmId: active ? filmId : null
    });
  }

  render() {
    const {films} = this.props;
    const {activeFilmId} = this.state;

    return (
      <div className="catalog__movies-list">
        {films.map((film) => (
          <MovieCard
            key={film.id}
            film={film}
            isActive={activeFilmId === film.id}
            onCardActiveChange={this.handleCardActiveChange} />
        ))}
      </div>
    );
  }
}

MovieList.propTypes = {
  films: PropTypes.arrayOf(filmShape).isRequired
};

export default MovieList;

