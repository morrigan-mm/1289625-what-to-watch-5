import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Breadcrumbs from "../breadcrumbs/breadcrumbs";
import Header from "../header/header";
import HeaderUserBlock from "../header-user-block/header-user-block";
import history from "../../history";
import {filmShape} from "../../prop-types";
import ReviewForm from "../review-form/review-form";
import withReviewState from "../../hocs/with-review-state/with-review-state";
import {ActionCreator} from "../../store/action";
import {addReview} from "../../store/api-actions";
import {isActionFailure} from "../../utils";

const WithReviewStateForm = withReviewState(ReviewForm);

const PageAddReview = ({film, onReviewSubmit, isLoading, addReviewError, onUnmount}) => {
  const {title, poster} = film;
  const breadcrumbs = [{text: title, link: `/films/${film.id}`}, {text: `Add Review`}];

  useEffect(() => {
    return () => {
      onUnmount();
    };
  }, []);

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
        <WithReviewStateForm disabled={isLoading} addReviewError={addReviewError} onSubmit={onReviewSubmit} />
      </div>

    </section>
  );
};

PageAddReview.propTypes = {
  film: filmShape,
  filmId: PropTypes.number.isRequired,
  onReviewSubmit: PropTypes.func.isRequired,
  onUnmount: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  addReviewError: PropTypes.number.isRequired
};

const mapStateToProps = ({DATA, OPERATIONS}, ownProps) => ({
  film: DATA.films.find(({id}) => id === ownProps.filmId),
  isLoading: OPERATIONS.addReviewLoading,
  addReviewError: OPERATIONS.addReviewError
});

const mapDispatchToProps = (dispatch, {filmId}) => ({
  onReviewSubmit: (review) => dispatch(addReview(filmId, review)).then((action) => !isActionFailure(action) && history.push(`/films/${filmId}`)),
  onUnmount: () => dispatch(ActionCreator.addReview.reset())
});

export {PageAddReview};
export default connect(mapStateToProps, mapDispatchToProps)(PageAddReview);
