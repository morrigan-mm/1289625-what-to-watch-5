export const ActionType = {
  FILTER_BY_GENRE: `FILTER_BY_GENRE`,
  SET_NEXT_MOVIES_CHUNK: `SET_NEXT_MOVIES_CHUNK`,
  RESET_MOVIES: `RESET_MOVIES`,
  LOAD_MOVIES: `LOAD_MOVIES`,
  LOAD_PROMO_MOVIE: `LOAD_PROMO_MOVIE`,
  LOAD_MOVIE_REVIEWS: `LOAD_MOVIE_REVIEWS`
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
  })
};
