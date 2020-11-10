import {films} from "../mocks/films";
import {extend} from "../utils";
import {ActionType} from "./action";

const initialState = {
  activeGenre: ``,
  films,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FILTER_BY_GENRE:
      return extend(state, {
        activeGenre: action.payload,
      });
    default:
      return state;
  }
};

export {reducer};
