import classNames from "classnames";
import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import MovieList from "../movie-list/movie-list";
import Footer from "../footer/footer";
import Header from "../header/header";
import HeaderUserBlock from "../header-user-block/header-user-block";
import {filmShape, reviewShape} from "../../prop-types";
import PageMovieReviews from "../page-movie-reviews/page-movie-reviews";
import PageMovieDetails from "../page-movie-details/page-movie-details";
import PageMovieOverview from "../page-movie-overview/page-movie-overview";
import {AuthorizationStatus, PageMovieTab, PageType, MyListMovieStatus} from "../../constants";
import {changeFavorite, fetchMovieReviews} from "../../store/api-actions";
import {filterSimilarMovies} from "../../movie-filter";
import PageNotFound from "../page-not-found/page-not-found";
import ToggleMyListMovieButton from "../toggle-my-list-movie-button/toggle-my-list-movie-button";

class PageMovie extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.film) {
      this.props.dispatchLoadReviews();
    }
  }

  renderTab(tab, caption) {
    const isActive = tab === this.props.activeTab;

    return (
      <li className={classNames(`movie-nav__item`, {'movie-nav__item--active': isActive})}>
        <Link to={tab} className="movie-nav__link">{caption}</Link>
      </li>
    );
  }

  renderTabContent() {
    const {activeTab, film, reviews} = this.props;

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
  }

  render() {
    if (!this.props.film) {
      return <PageNotFound />;
    }

    const {films, film, onPlayButtonClick, onMyListButtonClick, authorizationStatus, isFavoriteChanging} = this.props;
    const {title, genre, releaseDate, poster, backgroundImage, backgroundColor} = film;

    return (
      <>
        <section style={{background: backgroundColor}} className="movie-card movie-card--full">
          <div className="movie-card__hero">
            <div className="movie-card__bg">
              <img src={backgroundImage} alt={title} />
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <Header pageType={PageType.MOVIE_CARD}>
              <HeaderUserBlock />
            </Header>

            <div className="movie-card__wrap">
              <div className="movie-card__desc">
                <h2 className="movie-card__title">{title}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{genre}</span>
                  <span className="movie-card__year">{releaseDate}</span>
                </p>

                <div className="movie-card__buttons">
                  <button className="btn btn--play movie-card__button" type="button" onClick={() => onPlayButtonClick(film.id)}>
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use href="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </button>

                  <ToggleMyListMovieButton
                    disabled={isFavoriteChanging}
                    isFavorite={film.addedToMyList}
                    onClick={() => onMyListButtonClick(film)}
                  />

                  {authorizationStatus === AuthorizationStatus.AUTH &&
                    <Link to={`/films/${film.id}/review`} className="btn movie-card__button">
                      Add review
                    </Link>
                  }
                </div>
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
                    {this.renderTab(PageMovieTab.OVERVIEW, `Overview`)}
                    {this.renderTab(PageMovieTab.DETAILS, `Details`)}
                    {this.renderTab(PageMovieTab.REVIEWS, `Reviews`)}
                  </ul>
                </nav>

                {this.renderTabContent()}
              </div>
            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>

            <MovieList films={films} />
          </section>

          <Footer />
        </div>
      </>
    );
  }
}

PageMovie.propTypes = {
  films: PropTypes.arrayOf(filmShape).isRequired,
  film: filmShape,
  filmId: PropTypes.number.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  dispatchLoadReviews: PropTypes.func.isRequired,
  reviews: PropTypes.arrayOf(reviewShape).isRequired,
  activeTab: PropTypes.oneOf(Object.values(PageMovieTab)).isRequired,
  isFavoriteChanging: PropTypes.bool.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  onMyListButtonClick: PropTypes.func.isRequired
};

const mapStateToProps = ({DATA, USER, OPERATIONS}, ownProps) => {
  const film = DATA.films.find(({id}) => id === ownProps.filmId);
  const films = film && filterSimilarMovies(DATA.films, film.genre, film.id) || [];
  const reviews = film && DATA.reviews[film.id] || [];
  const authorizationStatus = USER.authorizationStatus;
  const isFavoriteChanging = OPERATIONS.changeFavoriteLoading;

  return {film, films, reviews, authorizationStatus, isFavoriteChanging};
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  dispatchLoadReviews: () => dispatch(fetchMovieReviews(ownProps.filmId)),
  onMyListButtonClick: (film) => dispatch(changeFavorite(ownProps.filmId, film.addedToMyList ? MyListMovieStatus.DELETE : MyListMovieStatus.ADD))
});

export {PageMovie};

export default connect(mapStateToProps, mapDispatchToProps)(PageMovie);
