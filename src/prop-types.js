import PropTypes from "prop-types";

export const reviewShape = PropTypes.shape({
  text: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  reviewDate: PropTypes.string.isRequired
});

export const filmShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  ratingCount: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  actors: PropTypes.arrayOf(PropTypes.string).isRequired,
  runtime: PropTypes.number.isRequired,
  reviews: PropTypes.arrayOf(reviewShape).isRequired,
  addedToMyList: PropTypes.bool.isRequired
});

export const breadcrumbShape = PropTypes.shape({
  text: PropTypes.string.isRequired,
  link: PropTypes.string
});
