import React from "react";
import PropTypes from "prop-types";
import {PageType} from "../../constants";
import {filmShape, headerUserType} from "../../prop-types";
import {getErrorMessage} from "../../utils";
import Header from "../header/header";
import HeaderUserBlock from "../header-user-block/header-user-block";
import ToggleMyListMovieButton from "../toggle-my-list-movie-button/toggle-my-list-movie-button";
import PlayMovieButton from "../play-movie-button/play-movie-button";

const MainHead = (props) => {
  const {
    promo,
    headerUser,
    changeFavoriteError,
    myListButtonDisabled,
    onPlayButtonClick,
    onMyListButtonClick
  } = props;

  const {
    title,
    poster,
    genre,
    backgroundImage,
    releaseDate
  } = promo;

  return (
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={backgroundImage} alt={title} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header pageType={PageType.MOVIE_CARD}>
        <HeaderUserBlock headerUser={headerUser} />
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
              <PlayMovieButton onClick={() => onPlayButtonClick(promo.id)} />

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
  promo: filmShape.isRequired,
  myListButtonDisabled: PropTypes.bool,
  changeFavoriteError: PropTypes.number,
  headerUser: headerUserType.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  onMyListButtonClick: PropTypes.func.isRequired
};

export default React.memo(MainHead);
