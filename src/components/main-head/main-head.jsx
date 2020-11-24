import React from "react";
import PropTypes from "prop-types";
import {PageType} from "../../constants";
import {filmShape} from "../../prop-types";
import {getErrorMessage} from "../../utils";
import Header from "../header/header";
import HeaderUserBlock from "../header-user-block/header-user-block";
import ToggleMyListMovieButton from "../toggle-my-list-movie-button/toggle-my-list-movie-button";

const MainHead = ({onPlayButtonClick, myListButtonDisabled, onMyListButtonClick, changeFavoriteError, promo}) => {
  const {title, poster, genre, backgroundImage, releaseDate} = promo;

  return (
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={backgroundImage} alt={title} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header pageType={PageType.MOVIE_CARD}>
        <HeaderUserBlock />
      </Header>

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={poster} alt={`${title} poster`} width="218" height="327" />
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

              <ToggleMyListMovieButton
                disabled={myListButtonDisabled}
                isFavorite={promo.addedToMyList}
                onClick={() => onMyListButtonClick(promo)}
              />
            </div>
            {changeFavoriteError ? <p>{getErrorMessage(changeFavoriteError)}</p> : null}
          </div>
        </div>
      </div>
    </section>
  );
};

MainHead.propTypes = {
  onPlayButtonClick: PropTypes.func.isRequired,
  promo: filmShape.isRequired,
  myListButtonDisabled: PropTypes.bool.isRequired,
  changeFavoriteError: PropTypes.number.isRequired,
  onMyListButtonClick: PropTypes.func.isRequired
};

export default React.memo(MainHead);
