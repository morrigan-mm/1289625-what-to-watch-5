import {films} from "../mocks/films";
import {extend} from "../utils";
import {ActionType} from "./action";

const DEFAULT_PAGE = 1;

const initialState = {
  activeGenre: ``,
  films,
  page: DEFAULT_PAGE
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FILTER_BY_GENRE:
      return extend(state, {
        activeGenre: action.payload,
        page: DEFAULT_PAGE
      });
    case ActionType.INCR_MOVIES_PAGE:
      return extend(state, {
        page: state.page + 1
      });
    case ActionType.RESET_MOVIES:
      return extend(state, {
        activeGenre: ``,
        page: DEFAULT_PAGE
      });
    default:
      return state;
  }
};

export {reducer};
