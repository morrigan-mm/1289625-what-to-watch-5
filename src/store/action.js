export const ActionType = {
  FILTER_BY_GENRE: `FILTER_BY_GENRE`,
  SET_NEXT_MOVIES_CHUNK: `SET_NEXT_MOVIES_CHUNK`,
  RESET_MOVIES: `RESET_MOVIES`
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
  })
};
