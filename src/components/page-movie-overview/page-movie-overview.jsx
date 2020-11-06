import React from "react";
import {filmShape} from "../../prop-types";
import {formatNumberWithComma} from "../../utils";

const generateRatingDetails = (rating) => {
  const integer = Math.max(0, Math.floor(rating));

  switch (integer) {
    case 0:
    case 1:
    case 2:
      return `Very Bad`;

    case 3:
    case 4:
      return `Normal`;

    case 5:
    case 6:
    case 7:
      return `Good`;

    case 8:
    case 9:
      return `Very Good`;

    default:
      return `Awesome`;
  }
};

const PageMovieOverview = ({film}) => {
  const {actors, rating, ratingCount, description, director} = film;

  const actorsShortList = actors.slice(0, 4).join(`, `);
  const ratingDetails = generateRatingDetails(rating);

  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{formatNumberWithComma(rating)}</div>
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
    </>
  );
};

PageMovieOverview.propTypes = {
  film: filmShape.isRequired
};

export default PageMovieOverview;
