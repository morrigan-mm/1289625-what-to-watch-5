import classNames from "classnames";
import React, {Fragment} from "react";
import PropTypes from "prop-types";
import useReviewState from "../../hooks/use-review-state";
import {getErrorMessage} from "../../utils";

const MIN_REVIEW_LENGTH = 50;
const MAX_REVIEW_LENGTH = 400;

const starRates = [0, 1, 2, 3, 4, 5];

const renderErrorMessage = (errorCode) => (
  <p
    className="error-message"
    style={{color: `red`}}
  >
    {getErrorMessage(errorCode)}
  </p>
);

const ReviewForm = (props) => {
  const {disabled, onSubmit, addReviewError} = props;
  const {rate, text, onRateChange, onTextChange} = useReviewState();

  const submitDisabled = disabled || !rate || text.length < MIN_REVIEW_LENGTH || text.length > MAX_REVIEW_LENGTH;

  return (
    <form
      action="#"
      className="add-review__form"
      onSubmit={(evt) => {
        evt.preventDefault();
        if (!submitDisabled) {
          onSubmit({rate, text});
        }
      }}
    >
      {addReviewError ? renderErrorMessage(addReviewError) : null}
      <div className="rating">
        <div className="rating__stars">
          {starRates.map((starRate) => {
            const value = starRate;
            const isHidden = !starRate;

            return (
              <Fragment key={starRate}>
                <input
                  className="rating__input"
                  id={`star-${value}`}
                  type="radio"
                  name="rating"
                  value={`${value}`}
                  checked={rate === value}
                  onChange={(evt) => onRateChange(Number(evt.target.value))}
                  disabled={disabled}
                />
                <label
                  className={classNames({'visually-hidden': isHidden}, `rating__label`)}
                  htmlFor={`star-${value}`}
                >
                  Rating {value}
                </label>
              </Fragment>
            );
          })}
        </div>
      </div>

      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          onChange={(evt) => onTextChange(evt.target.value)}
          value={text}
          disabled={disabled}
        />
        <div className="add-review__submit">
          <button
            className="add-review__btn"
            disabled={submitDisabled}
            type="submit"
          >
            Post
          </button>
        </div>
      </div>
    </form>
  );
};

ReviewForm.propTypes = {
  disabled: PropTypes.bool,
  addReviewError: PropTypes.number,
  onSubmit: PropTypes.func.isRequired
};

export default ReviewForm;

