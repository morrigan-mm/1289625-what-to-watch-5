import React from "react";
import PropTypes from "prop-types";
import {reviewShape} from "../../prop-types";
import Review from "../review/review";

const renderReviews = (reviews, reviewsPerColumn) => {
  const columns = [
    reviews.slice(0, reviewsPerColumn),
    reviews.slice(reviewsPerColumn)
  ];

  return columns.map((column, i) => (
    <div className="movie-card__reviews-col" key={i}>
      {column.map((review) => (
        <Review review={review} key={review.id} />
      ))}
    </div>
  ));
};

const PageMovieReviews = ({reviews}) => {
  const reviewsPerColumn = Math.round(reviews.length / 2);

  return (
    <div className="movie-card__reviews movie-card__row">
      {reviews.length
        ? renderReviews(reviews, reviewsPerColumn)
        : <p className="review">There are currently no reviews for this movie</p>
      }
    </div>
  );
};

PageMovieReviews.propTypes = {
  reviews: PropTypes.arrayOf(reviewShape).isRequired
};

export default PageMovieReviews;
