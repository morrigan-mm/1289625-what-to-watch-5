import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import MovieList from "../movie-list/movie-list";
import Footer from "../footer/footer";
import Header from "../header/header";
import HeaderUserBlock from "../header-user-block/header-user-block";

const MAX_SIMILAR_MOVIES_COUNT = 4;

const generateRatingDetails = (rating) => {
  const [integer] = rating.split(`,`);

  if (integer < 3) {
    return `Very Bad`;
  }
  if (integer >= 3 && integer < 5) {
    return `Normal`;
  }
  if (integer >= 5 && integer < 8) {
    return `Good`;
  }
  if (integer >= 8 && integer < 10) {
    return `Very Good`;
  } else {
    return `Awesome`;
  }
};

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

  render() {
    const {films, film} = this.props;
    const {title, genre, releaseDate, poster, rating, ratingCount, description, director, actors} = film;
    const similarFilms = filterSimilarMovies(films, genre, film.id);

    const actorsShortList = actors.slice(0, 4).join(`, `);
    const ratingDetails = generateRatingDetails(rating);

    return (
      <>
        <section className="movie-card movie-card--full">
          <div className="movie-card__hero">
            <div className="movie-card__bg">
              <img src="/img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <Header pageType="movie-card">
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
                    <li className="movie-nav__item movie-nav__item--active">
                      <a href="#" className="movie-nav__link">Overview</a>
                    </li>
                    <li className="movie-nav__item">
                      <a href="#" className="movie-nav__link">Details</a>
                    </li>
                    <li className="movie-nav__item">
                      <a href="#" className="movie-nav__link">Reviews</a>
                    </li>
                  </ul>
                </nav>

                <div className="movie-rating">
                  <div className="movie-rating__score">{rating}</div>
                  <p className="movie-rating__meta">
                    <span className="movie-rating__level">{ratingDetails}</span>
                    <span className="movie-rating__count">{ratingCount} ratings</span>
                  </p>
                </div>

                <div className="movie-card__text">
                  <p>{description}</p>

                  <p className="movie-card__director"><strong>Director: {director}</strong></p>

                  <p className="movie-card__starring"><strong>Starring: {actorsShortList} and other</strong></p>
                </div>
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
  films: PropTypes.array.isRequired,
  film: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    ratingCount: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    actors: PropTypes.array.isRequired
  })
};

export default PageMovie;
