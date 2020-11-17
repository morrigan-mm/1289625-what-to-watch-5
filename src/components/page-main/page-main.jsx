import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import GenreList from "../genre-list/genre-list";
import MovieList from "../movie-list/movie-list";
import ShowMoreButton from "../show-more-button/show-more-button";
import Footer from "../footer/footer";
import {filmShape} from "../../prop-types";
import {filterByGenre, getGenres} from "../../movie-filter";
import PageMainHead from "../page-main-head/page-main-head";

const MOVIES_PER_CHUNK = 8;

class PageMain extends Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    this.props.onComponentWillUnmount();
  }

  render() {
    const {
      promo,
      films,
      genres,
      activeGenre,
      onGenreSelect,
      onPlayButtonClick,
      onShowMoreButtonClick,
      hasMoreFilms
    } = this.props;

    return (
      <>
        <PageMainHead onPlayButtonClick={onPlayButtonClick} promo={promo} />

        <div className="page-content">
          <section className="catalog">
            <h2 className="catalog__title visually-hidden">Catalog</h2>

            <GenreList genres={genres} activeGenre={activeGenre} onGenreClick={onGenreSelect} />

            <MovieList films={films} />

            {hasMoreFilms && <ShowMoreButton onClick={onShowMoreButtonClick} />}
          </section>

          <Footer />
        </div>
      </>
    );
  }
}

PageMain.propTypes = {
  promo: filmShape.isRequired,
  films: PropTypes.arrayOf(filmShape).isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeGenre: PropTypes.string.isRequired,
  onGenreSelect: PropTypes.func.isRequired,
  onComponentWillUnmount: PropTypes.func.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  onShowMoreButtonClick: PropTypes.func.isRequired,
  hasMoreFilms: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
  const films = state.activeGenre ? filterByGenre(state.films, state.activeGenre) : state.films;
  const filmsCount = state.chunk * MOVIES_PER_CHUNK;

  return {
    activeGenre: state.activeGenre,
    films: films.slice(0, filmsCount),
    genres: getGenres(state.films),
    hasMoreFilms: films.length > filmsCount
  };
};

const mapDispatchToProps = (dispatch) => ({
  onGenreSelect(genre) {
    dispatch(ActionCreator.filterByGenre(genre));
  },
  onShowMoreButtonClick() {
    dispatch(ActionCreator.setNextMoviesChunk());
  },
  onComponentWillUnmount() {
    dispatch(ActionCreator.resetMovies());
  }
});

export {PageMain};
export default connect(mapStateToProps, mapDispatchToProps)(PageMain);
