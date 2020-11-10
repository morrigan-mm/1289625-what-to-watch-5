import React from "react";
import {reviewShape} from "../../prop-types";
import {formatNumberWithComma, formatDateTime, formatFullDate} from "../../utils";

const DateFormat = {
  DATE_TIME: `en-CA`, // YYYY-MM-DD
  FULL_DATE: `en-US`
};

const Review = ({review}) => {
  const {author, text, reviewDate, rating} = review;

  const reviewRate = formatNumberWithComma(rating);
  const dateTime = formatDateTime(reviewDate, DateFormat.DATE_TIME);
  const fullReviewDate = formatFullDate(reviewDate, DateFormat.FULL_DATE, {month: `long`, day: `numeric`, year: `numeric`});

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
