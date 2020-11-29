import {extend} from "../../../utils";
import {ActionType} from "../../action";

const AddReviewInitialState = {
  addReviewLoading: false,
  addReviewError: 0
};

const ChangeFavoriteInitialState = {
  changeFavoriteLoading: false,
  changeFavoriteError: 0
};

const InitialState = extend(AddReviewInitialState, ChangeFavoriteInitialState);

const operations = (state = InitialState, action) => {
  switch (action.type) {
    case ActionType.ADD_REVIEW_REQUEST:
      return extend(state, {
        addReviewLoading: true,
        addReviewError: 0
      });
    case ActionType.ADD_REVIEW_SUCCESS:
      return extend(state, {
        addReviewLoading: false
      });
    case ActionType.ADD_REVIEW_FAILURE:
      return extend(state, {
        addReviewLoading: false,
        addReviewError: action.payload.errorCode
      });
    case ActionType.ADD_REVIEW_RESET:
      return extend(state, AddReviewInitialState);

    case ActionType.CHANGE_FAVORITE_REQUEST:
      return extend(state, {
        changeFavoriteLoading: true,
        changeFavoriteError: 0
      });
    case ActionType.CHANGE_FAVORITE_SUCCESS:
      return extend(state, {
        changeFavoriteLoading: false
      });
    case ActionType.CHANGE_FAVORITE_FAILURE:
      return extend(state, {
        changeFavoriteLoading: false,
        changeFavoriteError: action.payload.errorCode
      });
    case ActionType.CHANGE_FAVORITE_RESET:
      return extend(state, ChangeFavoriteInitialState);

    default:
      return state;
  }
};

export {operations};
