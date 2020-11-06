import {films} from "../mocks/films";
import {extend} from "../utils";
import {filterByGenre} from "../movie-filter";
import {ActionType} from "./action";

const initialState = {
  activeGenre: ``,
  films,
  allFilms: films.slice()
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FILTER_BY_GENRE:
      return extend(state, {
        activeGenre: action.payload,
        films: filterByGenre(state.allFilms, action.payload)
      });
    default:
      return state;
  }
};

export {reducer};
