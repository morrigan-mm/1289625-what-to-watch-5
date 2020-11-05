export const filterByGenre = (filmList, genre) => filmList.filter((film) => film.genre === genre);

export const getGenres = (filmList) => [...new Set(filmList.map((film) => film.genre))];
