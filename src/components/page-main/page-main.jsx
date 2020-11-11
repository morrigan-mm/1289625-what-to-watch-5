import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import Header from "../header/header";
import HeaderUserBlock from "../header-user-block/header-user-block";
import GenreList from "../genre-list/genre-list";
import MovieList from "../movie-list/movie-list";
import ShowMoreButton from "../show-more-button/show-more-button";
import Footer from "../footer/footer";
import {filmShape} from "../../prop-types";
import {PageType} from "../../constants";
import {filterByGenre, getGenres} from "../../movie-filter";

const PAGE_SIZE = 8;

class PageMain extends Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    this.props.onComponentWillUnmount();
  }

  render() {
    const {promo, films, genres, activeGenre, onGenreSelect, onShowMoreButtonClick, hasMoreFilms} = this.props;
    const {title, genre, releaseDate} = promo;

    return (
      <>
        <section className="movie-card">
          <div className="movie-card__bg">
            <img src="/img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header pageType={PageType.MOVIE_CARD}>
            <HeaderUserBlock />
          </Header>

          <div className="movie-card__wrap">
            <div className="movie-card__info">
              <div className="movie-card__poster">
                <img src="/img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
              </div>

              <div className="movie-card__desc">
                <h2 className="movie-card__title">{title}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{genre}</span>
                  <span className="movie-card__year">{releaseDate}</span>
                </p>

                <div className="movie-card__buttons">
                  <button className="btn btn--play movie-card__button" type="button">
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use href="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </button>
                  <button className="btn btn--list movie-card__button" type="button">
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use href="#add"></use>
                    </svg>
                    <span>My list</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog">
            <h2 className="catalog__title visually-hidden">Catalog</h2>

            {<GenreList genres={genres} activeGenre={activeGenre} onGenreClick={onGenreSelect} />}

            {<MovieList films={films} />}

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
  onShowMoreButtonClick: PropTypes.func.isRequired,
  hasMoreFilms: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
  const films = state.activeGenre ? filterByGenre(state.films, state.activeGenre) : state.films;
  const filmsCount = state.page * PAGE_SIZE;

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
    dispatch(ActionCreator.incrementMoviesPage());
  },
  onComponentWillUnmount() {
    dispatch(ActionCreator.resetMovies());
  }
});

export {PageMain};
export default connect(mapStateToProps, mapDispatchToProps)(PageMain);
