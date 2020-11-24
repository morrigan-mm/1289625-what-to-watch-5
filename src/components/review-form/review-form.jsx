import React, {Fragment} from "react";
import PropTypes from "prop-types";

const MIN_REVIEW_LENGTH = 50;
const MAX_REVIEW_LENGTH = 400;

const starRates = [1, 2, 3, 4, 5];

const ReviewForm = (props) => {
  const {disabled, rate, isRated, text, onRateChange, onTextChange, onSubmit} = props;

  const submitDisabled = disabled || !isRated || text.length < MIN_REVIEW_LENGTH || text.length > MAX_REVIEW_LENGTH;

  return (
    <form
      action="#"
      className="add-review__form"
      onSubmit={(evt) => {
        evt.preventDefault();
        onSubmit({rate, text});
      }}
    >
      <div className="rating">
        <div className="rating__stars">
          {starRates.map((starRate) => {
            const value = starRate.toString();

            return (
              <Fragment key={starRate}>
                <input
                  className="rating__input"
                  id={`star-${value}`}
                  type="radio"
                  name="rating"
                  value={value}
                  checked={rate === value}
                  onChange={(evt) => onRateChange(evt.target.value)}
                  disabled={disabled}
                />
                <label
                  className="rating__label"
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
  disabled: PropTypes.bool.isRequired,
  rate: PropTypes.string.isRequired,
  isRated: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  onRateChange: PropTypes.func.isRequired,
  onTextChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default ReviewForm;

