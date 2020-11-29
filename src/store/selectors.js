import {createSelector} from "reselect";
import {StoreKey} from "../constants";
import {filterByGenre, filterMyFilms, getGenres} from "../movie-filter";

export const getGenre = (state) => state[StoreKey.STATE].activeGenre;

export const getFilms = (state) => state[StoreKey.DATA].films;

export const getPromo = (state) => state[StoreKey.DATA].promo;

export const getReviewsSelector = (filmId) => (state) => state[StoreKey.DATA].reviews[filmId] || [];

export const getFilmSelector = (filmId) => (state) => getFilms(state).find(({id}) => id === filmId);

export const getFilmsCountSelector = (count) => (state) => state[StoreKey.STATE].chunk * count;

export const getHeaderUser = (state) => ({
  authorizationStatus: state[StoreKey.USER].authorizationStatus,
  avatar: state[StoreKey.USER].info ? state[StoreKey.USER].info.avatar_url : null
});

export const getOperations = (state) => state[StoreKey.OPERATIONS];

export const getUserStatus = (state) => state[StoreKey.USER].authorizationStatus;

export const getUserErrorStatus = (state) => state[StoreKey.USER].errorCode;

export const getUserInfo = (state) => state[StoreKey.USER].info;

export const getGenreList = createSelector(getFilms, getGenres);

export const getMyFilmList = createSelector(getFilms, filterMyFilms);

export const getFilteredFilms = createSelector(
    getFilms,
    getGenre,
    (films, genre) => genre ? filterByGenre(films, genre) : films
);
