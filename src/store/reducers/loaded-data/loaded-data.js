import {extend} from "../../../utils";
import {ActionType} from "../../action";

const initialState = {
  films: [],
  promo: null,
  reviews: {}
};

const loadedData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_MOVIES:
      return extend(state, {
        films: action.payload
      });
    case ActionType.CHANGE_FAVORITE_SUCCESS:
      return extend(state, {
        films: state.films.map((film) => film.id === action.payload.id ? action.payload : film),
        promo: state.promo.id === action.payload.id ? action.payload : state.promo
      });
    case ActionType.LOAD_PROMO_MOVIE:
      return extend(state, {
        promo: action.payload
      });
    case ActionType.LOAD_MOVIE_REVIEWS:
    case ActionType.ADD_REVIEW_SUCCESS:
      return extend(state, {
        reviews: extend(state.reviews, {
          [action.payload.id]: action.payload.reviews
        })
      });
    default:
      return state;
  }
};

export {loadedData};
