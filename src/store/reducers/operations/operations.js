import {extend} from "../../../utils";
import {ActionType} from "../../action";

const InitialState = {
  addReviewLoading: false,
  addReviewError: false
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
    default:
      return state;
  }
};

export {operations};
