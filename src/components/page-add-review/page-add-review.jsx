import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Breadcrumbs from "../breadcrumbs/breadcrumbs";
import Header from "../header/header";
import HeaderUserBlock from "../header-user-block/header-user-block";
import {filmShape} from "../../prop-types";
import ReviewForm from "../review-form/review-form";
import withReviewState from "../../hocs/with-review-state/with-review-state";

const WithReviewStateForm = withReviewState(ReviewForm);

const PageAddReview = ({film}) => {
  const {title, poster} = film;
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
        <WithReviewStateForm />
      </div>

    </section>
  );
};

PageAddReview.propTypes = {
  film: filmShape,
  filmId: PropTypes.string.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  film: state.films.find(({id}) => id === ownProps.filmId)
});

export {PageAddReview};
export default connect(mapStateToProps)(PageAddReview);
