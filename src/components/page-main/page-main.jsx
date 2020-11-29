import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {MyListMovieStatus} from "../../constants";
import {filmShape, headerUserType} from "../../prop-types";
import MainHead from "../main-head/main-head";
import {ActionCreator} from "../../store/action";
import {changeFavorite} from "../../store/api-actions";
import {getGenre, getPromo, getFilmsCountSelector, getGenreList, getFilteredFilms, getHeaderUser, getOperations} from "../../store/selectors";
import GenreList from "../genre-list/genre-list";
import MovieList from "../movie-list/movie-list";
import ShowMoreButton from "../show-more-button/show-more-button";
import Footer from "../footer/footer";

const MOVIES_PER_CHUNK = 8;

const PageMain = (props) => {
  const {
    promo,
    films,
    genres,
    headerUser,
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

  if (!promo) {
    return null;
  }

  return (
    <>
      <MainHead
        changeFavoriteError={changeFavoriteError}
        myListButtonDisabled={isFavoriteChanging}
        onMyListButtonClick={onMyListButtonClick}
        onPlayButtonClick={onPlayButtonClick}
        promo={promo}
        headerUser={headerUser}
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
  headerUser: headerUserType.isRequired,
  activeGenre: PropTypes.string,
  hasMoreFilms: PropTypes.bool,
  changeFavoriteError: PropTypes.number,
  isFavoriteChanging: PropTypes.bool,
  onGenreSelect: PropTypes.func.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  onShowMoreButtonClick: PropTypes.func.isRequired,
  onMyListButtonClick: PropTypes.func.isRequired,
  onUnmount: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  const films = getFilteredFilms(state);
  const filmsCount = getFilmsCountSelector(MOVIES_PER_CHUNK)(state);

  return {
    activeGenre: getGenre(state),
    films: films.slice(0, filmsCount),
    genres: getGenreList(state),
    headerUser: getHeaderUser(state),
    hasMoreFilms: films.length > filmsCount,
    promo: getPromo(state),
    isFavoriteChanging: getOperations(state).changeFavoriteLoading,
    changeFavoriteError: getOperations(state).changeFavoriteError
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
