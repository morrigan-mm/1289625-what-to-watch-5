import {createSelector} from "reselect";
import {filterByGenre, getGenres} from "../movie-filter";

export const getGenre = (state) => state.STATE.activeGenre;

export const getFilms = (state) => state.DATA.films;

export const getPromo = (state) => state.DATA.promo;

export const getFilmsCount = (count) => (state) => state.STATE.chunk * count;

export const getGenreList = createSelector(getFilms, getGenres);

export const getFilteredFilms = createSelector(
    getFilms,
    getGenre,
    (films, genre) => genre ? filterByGenre(films, genre) : films
);
