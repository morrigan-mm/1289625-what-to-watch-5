export const ActionType = {
  FILTER_BY_GENRE: `FILTER_BY_GENRE`
};

export const ActionCreator = {
  filterByGenre: (genre) => ({
    type: ActionType.FILTER_BY_GENRE,
    payload: genre
  })
};
