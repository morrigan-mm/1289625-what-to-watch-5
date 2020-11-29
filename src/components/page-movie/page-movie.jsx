import classNames from "classnames";
import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {AuthorizationStatus, PageMovieTab, PageType, MyListMovieStatus, AppRoute} from "../../constants";
import {changeFavorite, fetchMovieReviews} from "../../store/api-actions";
import {filterSimilarMovies} from "../../movie-filter";
import {filmShape, headerUserType, reviewShape} from "../../prop-types";
import {getFilms, getFilmSelector, getHeaderUser, getOperations, getReviewsSelector} from "../../store/selectors";
import {ActionCreator} from "../../store/action";
import {getErrorMessage} from "../../utils";
import Footer from "../footer/footer";
import Header from "../header/header";
import HeaderUserBlock from "../header-user-block/header-user-block";
import MovieList from "../movie-list/movie-list";
import PageMovieReviews from "../page-movie-reviews/page-movie-reviews";
import PageMovieDetails from "../page-movie-details/page-movie-details";
import PageMovieOverview from "../page-movie-overview/page-movie-overview";
import PageNotFound from "../page-not-found/page-not-found";
import ToggleMyListMovieButton from "../toggle-my-list-movie-button/toggle-my-list-movie-button";
import PlayMovieButton from "../play-movie-button/play-movie-button";

const renderTab = (tab, caption, isActive) => (
  <li className={classNames(`movie-nav__item`, {'movie-nav__item--active': isActive})}>
    <Link to={tab} className="movie-nav__link">{caption}</Link>
  </li>
);

const renderTabContent = (film, reviews, activeTab) => {
  switch (activeTab) {
    case PageMovieTab.OVERVIEW:
      return <PageMovieOverview film={film} />;
    case PageMovieTab.DETAILS:
      return <PageMovieDetails film={film} />;
    case PageMovieTab.REVIEWS:
      return <PageMovieReviews reviews={reviews} />;
    default:
      return null;
  }
};

const PageMovie = (props) => {
  const {
    activeTab,
    changeFavoriteError,
    dispatchChangeFavoriteReset,
    dispatchLoadReviews,
    film,
    filmId,
    headerUser,
    similarFilms,
    isFavoriteChanging,
    onPlayButtonClick,
    onMyListButtonClick,
    reviews,
  } = props;

  useEffect(() => {
    if (film) {
      dispatchLoadReviews();
    }
    return () => {
      dispatchChangeFavoriteReset();
    };
  }, [filmId]);

  if (!film) {
    return <PageNotFound />;
  }

  const {
    title,
    genre,
    releaseDate,
    poster,
    backgroundImage,
    backgroundColor
  } = film;

  const {authorizationStatus} = headerUser;

  return (
    <>
      <section style={{background: backgroundColor}} className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={backgroundImage} alt={title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header pageType={PageType.MOVIE_CARD}>
            <HeaderUserBlock headerUser={headerUser} />
          </Header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{releaseDate}</span>
              </p>

              <div className="movie-card__buttons">
                <PlayMovieButton onClick={() => onPlayButtonClick(film.id)} />

                <ToggleMyListMovieButton
                  disabled={isFavoriteChanging}
                  isFavorite={film.addedToMyList}
                  onClick={() => onMyListButtonClick(film)}
                />

                {authorizationStatus === AuthorizationStatus.AUTH &&
                  <Link
                    className="btn movie-card__button"
                    to={AppRoute.ADD_REVIEW.url({id: film.id})}
                  >
                    Add review
                  </Link>
                }
              </div>
              {changeFavoriteError ? <p>{getErrorMessage(changeFavoriteError)}</p> : null}
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={poster} alt={title} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <nav className="movie-nav movie-card__nav">
                <ul className="movie-nav__list">
                  {renderTab(PageMovieTab.OVERVIEW, `Overview`, activeTab === PageMovieTab.OVERVIEW)}
                  {renderTab(PageMovieTab.DETAILS, `Details`, activeTab === PageMovieTab.DETAILS)}
                  {renderTab(PageMovieTab.REVIEWS, `Reviews`, activeTab === PageMovieTab.REVIEWS)}
                </ul>
              </nav>

              {renderTabContent(film, reviews, activeTab)}
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <MovieList films={similarFilms} />
        </section>

        <Footer />
      </div>
    </>
  );
};

PageMovie.propTypes = {
  film: filmShape,
  filmId: PropTypes.number.isRequired,
  headerUser: headerUserType.isRequired,
  similarFilms: PropTypes.arrayOf(filmShape).isRequired,
  dispatchLoadReviews: PropTypes.func.isRequired,
  reviews: PropTypes.arrayOf(reviewShape).isRequired,
  activeTab: PropTypes.oneOf(Object.values(PageMovieTab)).isRequired,
  isFavoriteChanging: PropTypes.bool,
  changeFavoriteError: PropTypes.number,
  onPlayButtonClick: PropTypes.func.isRequired,
  onMyListButtonClick: PropTypes.func.isRequired,
  dispatchChangeFavoriteReset: PropTypes.func.isRequired
};

const mapStateToProps = (state, {filmId}) => {
  const {changeFavoriteLoading: isFavoriteChanging, changeFavoriteError} = getOperations(state);
  const film = getFilmSelector(filmId)(state);
  const similarFilms = film ? filterSimilarMovies(getFilms(state), film.genre, film.id) : [];
  const reviews = getReviewsSelector(filmId)(state);
  const headerUser = getHeaderUser(state);

  return {film, headerUser, reviews, similarFilms, isFavoriteChanging, changeFavoriteError};
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  dispatchLoadReviews: () => {
    dispatch(fetchMovieReviews(ownProps.filmId));
  },
  onMyListButtonClick: (film) => {
    const status = film.addedToMyList ? MyListMovieStatus.DELETE : MyListMovieStatus.ADD;

    dispatch(changeFavorite(ownProps.filmId, status));
  },
  dispatchChangeFavoriteReset: () => {
    dispatch(ActionCreator.changeFavorite.reset());
  }
});

export {PageMovie};
export default connect(mapStateToProps, mapDispatchToProps)(PageMovie);
