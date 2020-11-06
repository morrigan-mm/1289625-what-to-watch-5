import React from "react";
import {reviewShape} from "../../prop-types";
import {formatNumberWithComma} from "../../utils";

const Review = ({review}) => {
  const {author, text, reviewDate, rating} = review;

  const reviewRate = formatNumberWithComma(rating);
  const dateTime = new Date(reviewDate).toLocaleDateString(`en-CA`); // YYYY-MM-DD
  const fullReviewDate = new Date(reviewDate).toLocaleString(`en-US`, {month: `long`, day: `numeric`, year: `numeric`});

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{text}</p>

        <footer className="review__details">
          <cite className="review__author">{author}</cite>
          <time className="review__date" dateTime={dateTime}>{fullReviewDate}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{reviewRate}</div>
    </div>
  );
};

Review.propTypes = {
  review: reviewShape.isRequired
};

export default Review;
