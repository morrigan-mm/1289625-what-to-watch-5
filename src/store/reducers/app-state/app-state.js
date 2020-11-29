import {extend} from "../../../utils";
import {ActionType} from "../../action";

const initialState = {
  activeGenre: ``,
  chunk: 1
};

const appState = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FILTER_BY_GENRE:
      return extend(state, {
        activeGenre: action.payload,
        chunk: initialState.chunk
      });
    case ActionType.SET_NEXT_MOVIES_CHUNK:
      return extend(state, {
        chunk: state.chunk + 1
      });
    case ActionType.RESET_MOVIES:
      return extend(state, initialState);
    default:
      return state;
  }
};

export {appState};
