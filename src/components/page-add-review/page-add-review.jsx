import React, {Fragment, PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Breadcrumbs from "../breadcrumbs/breadcrumbs";
import Header from "../header/header";
import HeaderUserBlock from "../header-user-block/header-user-block";
import {filmShape} from "../../prop-types";

const MIN_REVIEW_LENGTH = 50;
const MAX_REVIEW_LENGTH = 400;
const DEFAULT_RATE_VALUE = `3`;

const starRates = [1, 2, 3, 4, 5];

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

  _renderRatingStar(rate, starRate) {
    const value = starRate.toString();

    return (
      <Fragment>
        <input className="rating__input" id={`star-${value}`} type="radio" name="rating" value={value} checked={rate === value} onChange={this.handleRateChange} />
        <label className="rating__label" htmlFor={`star-${value}`}>Rating {value}</label>
      </Fragment>
    );
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
                {starRates.map((starRate) => {
                  const value = starRate.toString();

                  return (
                    <Fragment key={value}>
                      <input className="rating__input" id={`star-${value}`} type="radio" name="rating" value={value} checked={rate === value} onChange={this.handleRateChange} />
                      <label className="rating__label" htmlFor={`star-${value}`}>{`Rating ${value}`}</label>
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
  film: filmShape,
  filmId: PropTypes.string.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  film: state.allFilms.find(({id}) => id === ownProps.filmId)
});

export {PageAddReview};

export default connect(mapStateToProps)(PageAddReview);
