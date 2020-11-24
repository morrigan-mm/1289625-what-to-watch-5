export const ActionType = {
  FILTER_BY_GENRE: `FILTER_BY_GENRE`,
  SET_NEXT_MOVIES_CHUNK: `SET_NEXT_MOVIES_CHUNK`,
  RESET_MOVIES: `RESET_MOVIES`,
  LOAD_MOVIES: `LOAD_MOVIES`,
  LOAD_PROMO_MOVIE: `LOAD_PROMO_MOVIE`,
  LOAD_MOVIE_REVIEWS: `LOAD_MOVIE_REVIEWS`,
  AUTHORIZE: `AUTHORIZE`,
  ADD_REVIEW_REQUEST: `ADD_REVIEW_REQUEST`,
  ADD_REVIEW_SUCCESS: `ADD_REVIEW_SUCCESS`,
  ADD_REVIEW_FAILURE: `ADD_REVIEW_FAILURE`,
  CHANGE_FAVORITE_REQUEST: `CHANGE_FAVORITE_REQUEST`,
  CHANGE_FAVORITE_SUCCESS: `CHANGE_FAVORITE_SUCCESS`,
  CHANGE_FAVORITE_FAILURE: `CHANGE_FAVORITE_FAILURE`
};

export const ActionCreator = {
  filterByGenre: (genre) => ({
    type: ActionType.FILTER_BY_GENRE,
    payload: genre
  }),
  setNextMoviesChunk: () => ({
    type: ActionType.SET_NEXT_MOVIES_CHUNK
  }),
  resetMovies: () => ({
    type: ActionType.RESET_MOVIES
  }),
  loadMovies: (films) => ({
    type: ActionType.LOAD_MOVIES,
    payload: films
  }),
  loadPromoMovie: (promo) => ({
    type: ActionType.LOAD_PROMO_MOVIE,
    payload: promo
  }),
  loadMovieReviews: (id, reviews) => ({
    type: ActionType.LOAD_MOVIE_REVIEWS,
    payload: {id, reviews}
  }),
  authorize: (info, errorCode) => ({
    type: ActionType.AUTHORIZE,
    payload: {errorCode, info}
  }),
  addReview: {
    request: (id, review) => ({
      type: ActionType.ADD_REVIEW_REQUEST,
      payload: {id, review}
    }),
    success: (id, reviews) => ({
      type: ActionType.ADD_REVIEW_SUCCESS,
      payload: {id, reviews}
    }),
    failure: (errorCode) => ({
      type: ActionType.ADD_REVIEW_FAILURE,
      payload: {errorCode}
    })
  },
  changeFavorite: {
    request: (id, status) => ({
      type: ActionType.CHANGE_FAVORITE_REQUEST,
      payload: {id, status}
    }),
    success: (film) => ({
      type: ActionType.CHANGE_FAVORITE_SUCCESS,
      payload: film
    }),
    failure: (errorCode) => ({
      type: ActionType.CHANGE_FAVORITE_FAILURE,
      payload: {errorCode}
    })
  }
};
