import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import GenreList from "../genre-list/genre-list";
import MovieList from "../movie-list/movie-list";
import ShowMoreButton from "../show-more-button/show-more-button";
import Footer from "../footer/footer";
import {filmShape} from "../../prop-types";
import MainHead from "../main-head/main-head";
import {getGenre, getPromo, getFilmsCount, getGenreList, getFilteredFilms} from "../../store/selectors";
import {changeFavorite} from "../../store/api-actions";
import {MyListMovieStatus} from "../../constants";

const MOVIES_PER_CHUNK = 8;

const PageMain = (props) => {
  const {
    promo,
    films,
    genres,
    activeGenre,
    onGenreSelect,
    onPlayButtonClick,
    onShowMoreButtonClick,
    hasMoreFilms,
    isFavoriteChanging,
    changeFavoriteError,
    onMyListButtonClick,
    onUnmount
  } = props;

  useEffect(() => {
    return () => {
      onUnmount();
    };
  }, []);

  return (
    <>
      <MainHead
        changeFavoriteError={changeFavoriteError}
        myListButtonDisabled={isFavoriteChanging}
        onMyListButtonClick={onMyListButtonClick}
        onPlayButtonClick={onPlayButtonClick}
        promo={promo}
      />

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
};

PageMain.propTypes = {
  promo: filmShape.isRequired,
  films: PropTypes.arrayOf(filmShape).isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeGenre: PropTypes.string.isRequired,
  hasMoreFilms: PropTypes.bool.isRequired,
  changeFavoriteError: PropTypes.number.isRequired,
  isFavoriteChanging: PropTypes.bool.isRequired,
  onGenreSelect: PropTypes.func.isRequired,
  onUnmount: PropTypes.func.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  onShowMoreButtonClick: PropTypes.func.isRequired,
  onMyListButtonClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  const films = getFilteredFilms(state);
  const filmsCount = getFilmsCount(MOVIES_PER_CHUNK)(state);

  return {
    activeGenre: getGenre(state),
    films: films.slice(0, filmsCount),
    genres: getGenreList(state),
    hasMoreFilms: films.length > filmsCount,
    promo: getPromo(state),
    isFavoriteChanging: state.OPERATIONS.changeFavoriteLoading,
    changeFavoriteError: state.OPERATIONS.changeFavoriteError
  };
};

const mapDispatchToProps = (dispatch) => ({
  onGenreSelect: (genre) => {
    dispatch(ActionCreator.filterByGenre(genre));
  },
  onShowMoreButtonClick: () => {
    dispatch(ActionCreator.setNextMoviesChunk());
  },
  onUnmount: () => {
    dispatch(ActionCreator.changeFavorite.reset());
    dispatch(ActionCreator.resetMovies());
  },
  onMyListButtonClick: (promo) => {
    dispatch(changeFavorite(promo.id, promo.addedToMyList ? MyListMovieStatus.DELETE : MyListMovieStatus.ADD));
  }
});

export {PageMain};
export default connect(mapStateToProps, mapDispatchToProps)(PageMain);
