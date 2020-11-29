import {APIRoute} from "../constants";
import {ActionCreator} from "./action";

const convertFetchedMovie = (movie) => ({
  id: movie.id,
  poster: movie.poster_image,
  preview: movie.preview_video_link,
  video: movie.video_link,
  cover: movie.preview_image,
  title: movie.name,
  genre: movie.genre,
  releaseDate: movie.released,
  description: movie.description,
  rating: movie.rating,
  ratingCount: movie.scores_count,
  director: movie.director,
  actors: movie.starring,
  runtime: movie.run_time,
  addedToMyList: movie.is_favorite,
  backgroundColor: movie.background_color,
  backgroundImage: movie.background_image
});

const convertFetchedReview = (review) => ({
  id: review.id,
  text: review.comment,
  rating: review.rating,
  author: review.user.name,
  reviewDate: review.date
});

const getErrorCode = (error) => {
  return error.response && error.response.status || -1;
};

export const fetchMovieList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS.url())
    .then(({data}) => data.map((dataItem) => convertFetchedMovie(dataItem)))
    .then((movies) => dispatch(ActionCreator.loadMovies(movies)))
    .catch(() => {})
);

export const fetchPromoMovie = () => (dispatch, _getState, api) => (
  api.get(APIRoute.PROMO.url())
    .then(({data}) => convertFetchedMovie(data))
    .then((movie) => dispatch(ActionCreator.loadPromoMovie(movie)))
    .catch(() => {})
);

export const fetchMovieReviews = (filmId) => (dispatch, _getState, api) => (
  api.get(APIRoute.REVIEWS.url({id: filmId}))
    .then(({data}) => data.map((dataItem) => convertFetchedReview(dataItem)))
    .then((reviews) => dispatch(ActionCreator.loadMovieReviews(filmId, reviews)))
    .catch(() => {})
);

export const checkAuthorization = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN.url())
    .then(({data}) => dispatch(ActionCreator.authorize(data)))
    .catch(() => {})
);

export const login = ({email, password}) => (dispatch, _getState, api) => {
  const url = APIRoute.LOGIN.url();
  const body = {email, password};

  return api.post(url, body)
    .then(({data}) => dispatch(ActionCreator.authorize(data)))
    .catch((error) => dispatch(ActionCreator.authorize(null, getErrorCode(error))));
};

export const addReview = (filmId, {rate, text}) => (dispatch, _getState, api) => {
  const url = APIRoute.REVIEWS.url({id: filmId});
  const body = {rating: rate, comment: text};

  dispatch(ActionCreator.addReview.request(filmId, {rate, text}));

  return api.post(url, body)
    .then(({data}) => data.map((dataItem) => convertFetchedReview(dataItem)))
    .then((reviews) => dispatch(ActionCreator.addReview.success(filmId, reviews)))
    .catch((error) => dispatch(ActionCreator.addReview.failure(getErrorCode(error))));
};

export const changeFavorite = (filmId, status) => (dispatch, _getState, api) => {
  dispatch(ActionCreator.changeFavorite.request(filmId, status));

  return api.post(APIRoute.FAVORITE.url({id: filmId, status}))
    .then(({data}) => dispatch(ActionCreator.changeFavorite.success(convertFetchedMovie(data))))
    .catch((error) => dispatch(ActionCreator.changeFavorite.failure(getErrorCode(error))));
};
