const MAX_SIMILAR_MOVIES_COUNT = 4;
const MAX_GENRES_COUNT_TO_SHOW = 9;

export const filterSimilarMovies = (filmList, genre, filmId, limit = MAX_SIMILAR_MOVIES_COUNT) => {
  const result = [];

  for (let i = 0; i < filmList.length && result.length < limit; i++) {
    if (filmList[i].genre === genre && filmList[i].id !== filmId) {
      result.push(filmList[i]);
    }
  }

  return result;
};

export const filterByGenre = (filmList, genre) => filmList.filter((film) => film.genre === genre);

export const getGenres = (filmList, limit = MAX_GENRES_COUNT_TO_SHOW) => (
  [...new Set(filmList.map((film) => film.genre))].slice(0, limit)
);

export const filterMyFilms = (filmList) => filmList.filter((film) => film.addedToMyList);
