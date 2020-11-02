import React from "react";
import {filmShape} from "../../prop-types";

const generateRatingDetails = (rating) => {
  if (rating < 3) {
    return `Very Bad`;
  }
  if (rating >= 3 && rating < 5) {
    return `Normal`;
  }
  if (rating >= 5 && rating < 8) {
    return `Good`;
  }
  if (rating >= 8 && rating < 10) {
    return `Very Good`;
  }
  return `Awesome`;
};

const formatRating = (rating) => rating.toFixed(1).replace(`.`, `,`);

const PageMovieOverview = ({film}) => {
  const {actors, rating, ratingCount, description, director} = film;

  const actorsShortList = actors.slice(0, 4).join(`, `);
  const ratingDetails = generateRatingDetails(rating);

  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{formatRating(rating)}</div>
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
