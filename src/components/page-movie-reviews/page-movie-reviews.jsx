import React from "react";
import PropTypes from "prop-types";
import {reviewShape} from "../../prop-types";
import Review from "../review/review";

const PageMovieReviews = ({reviews}) => {
  const reviewColCount = Math.round(reviews.length / 2);
  const reviewCols = [
    reviews.slice(0, reviewColCount),
    reviews.slice(reviewColCount)
  ];

  return (
    <div className="movie-card__reviews movie-card__row">
      {reviewCols.map((colReviews, i) => (
        <div className="movie-card__reviews-col" key={i}>
          {colReviews.map((review) => (
            <Review review={review} key={review.id} />
          ))}
        </div>
      ))}
    </div>
  );
};

PageMovieReviews.propTypes = {
  reviews: PropTypes.arrayOf(reviewShape)
};

export default PageMovieReviews;
