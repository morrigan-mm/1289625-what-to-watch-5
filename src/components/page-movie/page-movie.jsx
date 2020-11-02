import classNames from "classnames";
import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import MovieList from "../movie-list/movie-list";
import Footer from "../footer/footer";
import Header from "../header/header";
import HeaderUserBlock from "../header-user-block/header-user-block";
import {filmShape} from "../../prop-types";
import PageMovieReviews from "../page-movie-reviews/page-movie-reviews";
import PageMovieDetails from "../page-movie-details/page-movie-details";
import PageMovieOverview from "../page-movie-overview/page-movie-overview";
import {PageMovieTab} from "../../constants";
import {PageType} from "../../constants";

const MAX_SIMILAR_MOVIES_COUNT = 4;

const filterSimilarMovies = (filmList, genre, filmId) => {
  const result = [];

  for (let i = 0; i < filmList.length && result.length < MAX_SIMILAR_MOVIES_COUNT; i++) {
    if (filmList[i].genre === genre && filmList[i].id !== filmId) {
      result.push(filmList[i]);
    }
  }

  return result;
};

class PageMovie extends PureComponent {
  constructor(props) {
    super(props);
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
    const {activeTab, film} = this.props;

    switch (activeTab) {
      case PageMovieTab.OVERVIEW:
        return <PageMovieOverview film={film} />;
      case PageMovieTab.DETAILS:
        return <PageMovieDetails film={film} />;
      case PageMovieTab.REVIEWS:
        return <PageMovieReviews reviews={film.reviews} />;
      default:
        return null;
    }
  }

  render() {
    const {films, film} = this.props;
    const {title, genre, releaseDate, poster} = film;
    const similarFilms = filterSimilarMovies(films, genre, film.id);

    return (
      <>
        <section className="movie-card movie-card--full">
          <div className="movie-card__hero">
            <div className="movie-card__bg">
              <img src="/img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
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
                  <Link to={`/films/${film.id}/review`} className="btn movie-card__button">Add review</Link>
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

            <MovieList films={similarFilms} />
          </section>

          <Footer />
        </div>
      </>
    );
  }
}

PageMovie.propTypes = {
  films: PropTypes.arrayOf(filmShape).isRequired,
  film: filmShape.isRequired,
  activeTab: PropTypes.oneOf(Object.values(PageMovieTab)).isRequired
};

export default PageMovie;
