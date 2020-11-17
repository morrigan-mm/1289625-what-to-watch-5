import React from "react";
import {filmShape} from "../../prop-types";

const convertRuntime = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const restMinutes = String(minutes % 60).padStart(2, `0`);

  return `${hours}h ${restMinutes}m`;
};

const renderActorsList = (actorsList) => {
  const actorsCount = actorsList.length - 1;

  return actorsList.reduce((result, actor, i) => {
    const isLast = i === actorsCount;
    const name = isLast ? actor : `${actor},`;
    result.push(name);

    if (!isLast) {
      result.push(<br key={i} />);
    }

    return result;
  }, []);
};

const PageMovieDetails = ({film}) => {
  const {director, actors, runtime, genre, releaseDate} = film;

  return (
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Director</strong>
          <span className="movie-card__details-value">{director}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Starring</strong>
          <span className="movie-card__details-value">
            {renderActorsList(actors)}
          </span>
        </p>
      </div>

      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">{convertRuntime(runtime)}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">{genre}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          <span className="movie-card__details-value">{releaseDate}</span>
        </p>
      </div>
    </div>
  );
};

PageMovieDetails.propTypes = {
  film: filmShape.isRequired
};

export default PageMovieDetails;
