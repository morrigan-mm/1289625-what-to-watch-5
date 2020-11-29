import PropTypes from "prop-types";
import {AuthorizationStatus} from "./constants";

export const reviewShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  reviewDate: PropTypes.string.isRequired
});

export const filmShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  ratingCount: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  actors: PropTypes.arrayOf(PropTypes.string).isRequired,
  runtime: PropTypes.number.isRequired,
  addedToMyList: PropTypes.bool.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired
});

export const breadcrumbShape = PropTypes.shape({
  text: PropTypes.string.isRequired,
  link: PropTypes.string
});

export const authorizationStatusType = PropTypes.oneOf([
  AuthorizationStatus.AUTH,
  AuthorizationStatus.NO_AUTH
]);

export const headerUserType = PropTypes.shape({
  authorizationStatus: authorizationStatusType.isRequired,
  avatar: PropTypes.string
});
