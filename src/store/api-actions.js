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

export const fetchMovieList = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then(({data}) => data.map((dataItem) => convertFetchedMovie(dataItem)))
    .then((movies) => dispatch(ActionCreator.loadMovies(movies)))
    .catch(() => {})
);

export const fetchPromoMovie = () => (dispatch, _getState, api) => (
  api.get(`/films/promo`)
    .then(({data}) => convertFetchedMovie(data))
    .then((movie) => dispatch(ActionCreator.loadPromoMovie(movie)))
    .catch(() => {})
);

export const fetchMovieReviews = (movieId) => (dispatch, _getState, api) => (
  api.get(`/comments/${movieId}`)
    .then(({data}) => data.map((dataItem) => convertFetchedReview(dataItem)))
    .then((review) => dispatch(ActionCreator.loadMovieReviews(movieId, review)))
    .catch(() => {})
);

export const checkAuthorization = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(({data}) => dispatch(ActionCreator.authorize(data)))
    .catch(() => {})
);

export const login = ({email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(({data}) => dispatch(ActionCreator.authorize(data)))
    .catch(({response}) => dispatch(ActionCreator.authorize(null, response.status)))
);
