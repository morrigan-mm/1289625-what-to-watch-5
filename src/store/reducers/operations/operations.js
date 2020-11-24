import {extend} from "../../../utils";
import {ActionType} from "../../action";

const InitialState = {
  addReviewLoading: false,
  addReviewError: false,
  changeFavoriteLoading: false,
  changeFavoriteError: false,
};

const operations = (state = InitialState, action) => {
  switch (action.type) {
    case ActionType.ADD_REVIEW_REQUEST:
      return extend(state, {
        addReviewLoading: true,
        addReviewError: false
      });
    case ActionType.ADD_REVIEW_SUCCESS:
      return extend(state, {
        addReviewLoading: false
      });
    case ActionType.ADD_REVIEW_FAILURE:
      return extend(state, {
        addReviewLoading: false,
        addReviewError: true
      });
    case ActionType.CHANGE_FAVORITE_REQUEST:
      return extend(state, {
        changeFavoriteLoading: true,
        changeFavoriteError: false
      });
    case ActionType.CHANGE_FAVORITE_SUCCESS:
      return extend(state, {
        changeFavoriteLoading: false
      });
    case ActionType.CHANGE_FAVORITE_FAILURE:
      return extend(state, {
        changeFavoriteLoading: false,
        changeFavoriteError: true
      });
    default:
      return state;
  }
};

export {operations};
