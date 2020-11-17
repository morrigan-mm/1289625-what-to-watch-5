import React from "react";
import PropTypes from "prop-types";
import {PageType} from "../../constants";
import {filmShape} from "../../prop-types";
import Header from "../header/header";
import HeaderUserBlock from "../header-user-block/header-user-block";

const PageMainHead = ({onPlayButtonClick, promo}) => {
  const {title, genre, releaseDate} = promo;

  return (
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
              <button className="btn btn--play movie-card__button" type="button" onClick={() => onPlayButtonClick(promo.id)}>
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
  );
};

PageMainHead.propTypes = {
  onPlayButtonClick: PropTypes.func.isRequired,
  promo: filmShape.isRequired
};

export default React.memo(PageMainHead);
