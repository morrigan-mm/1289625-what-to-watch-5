import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import {addReview} from "../../store/api-actions";
import {getFilmSelector, getHeaderUser, getOperations} from "../../store/selectors";
import {isActionSuccess} from "../../utils";
import history from "../../history";
import {filmShape, headerUserType} from "../../prop-types";
import ReviewForm from "../review-form/review-form";
import Breadcrumbs from "../breadcrumbs/breadcrumbs";
import Header from "../header/header";
import HeaderUserBlock from "../header-user-block/header-user-block";
import {AppRoute} from "../../constants";

const PageAddReview = (props) => {
  const {film, headerUser, onReviewSubmit, isLoading, addReviewError, onUnmount} = props;
  const {title, poster, backgroundImage} = film;

  const breadcrumbs = [
    {
      text: title,
      link: AppRoute.FILM.url({id: film.id})
    },
    {
      text: `Add Review`
    }
  ];

  useEffect(() => {
    return () => {
      onUnmount();
    };
  }, []);

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header>
          <Breadcrumbs breadcrumbs={breadcrumbs} />
          <HeaderUserBlock headerUser={headerUser} />
        </Header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={poster} alt={`${title} poster`} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <ReviewForm disabled={isLoading} addReviewError={addReviewError} onSubmit={onReviewSubmit} />
      </div>

    </section>
  );
};

PageAddReview.propTypes = {
  film: filmShape.isRequired,
  filmId: PropTypes.number.isRequired,
  headerUser: headerUserType.isRequired,
  addReviewError: PropTypes.number,
  isLoading: PropTypes.bool,
  onReviewSubmit: PropTypes.func.isRequired,
  onUnmount: PropTypes.func.isRequired
};

const mapStateToProps = (state, {filmId}) => {
  const {addReviewLoading, addReviewError} = getOperations(state);

  return {
    addReviewError,
    film: getFilmSelector(filmId)(state),
    headerUser: getHeaderUser(state),
    isLoading: addReviewLoading
  };
};

const mapDispatchToProps = (dispatch, {filmId}) => ({
  onReviewSubmit: (review) => {
    dispatch(addReview(filmId, review))
      .then((action) => {
        if (isActionSuccess(action)) {
          history.push(AppRoute.FILM.url({id: filmId}));
        }
      });
  },
  onUnmount: () => {
    dispatch(ActionCreator.addReview.reset());
  }
});

export {PageAddReview};
export default connect(mapStateToProps, mapDispatchToProps)(PageAddReview);
