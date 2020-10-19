import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Breadcrumbs from "../breadcrumbs/breadcrumbs";
import Header from "../header/header";
import HeaderUserBlock from "../header-user-block/header-user-block";

const MIN_REVIEW_LENGTH = 50;
const MAX_REVIEW_LENGTH = 400;
const DEFAULT_RATE_VALUE = `3`;

class PageAddReview extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      text: ``,
      rate: DEFAULT_RATE_VALUE,
      isRated: false
    };

    this.handleRateChange = this.handleRateChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleRateChange(evt) {
    this.setState({
      rate: evt.target.value,
      isRated: true
    });
  }

  handleTextChange(evt) {
    this.setState({
      text: evt.target.value
    });
  }

  render() {
    const {film} = this.props;
    const {title, poster} = film;
    const {rate, text, isRated} = this.state;
    const breadcrumbs = [{text: title, link: `/films/${film.id}`}, {text: `Add Review`}];

    return (
      <section className="movie-card movie-card--full">
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src="/img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <HeaderUserBlock />
          </Header>

          <div className="movie-card__poster movie-card__poster--small">
            <img src={poster} alt={`${title} poster`} width="218" height="327" />
          </div>
        </div>

        <div className="add-review">
          <form
            action="#"
            className="add-review__form"
            onSubmit={(evt) => {
              evt.preventDefault();
            }}
          >
            <div className="rating">
              <div className="rating__stars">
                <input className="rating__input" id="star-1" type="radio" name="rating" value="1" checked={rate === `1`} onChange={this.handleRateChange} />
                <label className="rating__label" htmlFor="star-1">Rating 1</label>

                <input className="rating__input" id="star-2" type="radio" name="rating" value="2" checked={rate === `2`} onChange={this.handleRateChange} />
                <label className="rating__label" htmlFor="star-2">Rating 2</label>

                <input className="rating__input" id="star-3" type="radio" name="rating" value="3" checked={rate === `3`} onChange={this.handleRateChange} />
                <label className="rating__label" htmlFor="star-3">Rating 3</label>

                <input className="rating__input" id="star-4" type="radio" name="rating" value="4" checked={rate === `4`} onChange={this.handleRateChange} />
                <label className="rating__label" htmlFor="star-4">Rating 4</label>

                <input className="rating__input" id="star-5" type="radio" name="rating" value="5" checked={rate === `5`} onChange={this.handleRateChange} />
                <label className="rating__label" htmlFor="star-5">Rating 5</label>
              </div>
            </div>

            <div className="add-review__text">
              <textarea
                className="add-review__textarea"
                name="review-text"
                id="review-text"
                placeholder="Review text"
                onChange={this.handleTextChange}
              ></textarea>
              <div className="add-review__submit">
                <button
                  className="add-review__btn"
                  disabled={!isRated || text.length < MIN_REVIEW_LENGTH || text.length > MAX_REVIEW_LENGTH}
                  type="submit"
                >
                  Post
                </button>
              </div>
            </div>
          </form>
        </div>

      </section>
    );
  }
}

PageAddReview.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
  })
};

export default PageAddReview;
