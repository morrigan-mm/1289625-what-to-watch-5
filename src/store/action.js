export const ActionType = {
  FILTER_BY_GENRE: `FILTER_BY_GENRE`,
  INCR_MOVIES_PAGE: `INCR_MOVIES_PAGE`,
  RESET_MOVIES: `RESET_MOVIES`
};

export const ActionCreator = {
  filterByGenre: (genre) => ({
    type: ActionType.FILTER_BY_GENRE,
    payload: genre
  }),
  incrementMoviesPage: () => ({
    type: ActionType.INCR_MOVIES_PAGE
  }),
  resetMovies: () => ({
    type: ActionType.RESET_MOVIES
  })
};
