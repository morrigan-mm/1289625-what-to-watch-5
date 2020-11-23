import {extend} from "../../../utils";
import {ActionType} from "../../action";
import {AuthorizationStatus} from "../../../constants";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  info: null
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.AUTHORIZE:
      return extend(state, {
        authorizationStatus: action.payload.info ? AuthorizationStatus.AUTH : AuthorizationStatus.NO_AUTH,
        errorCode: action.payload.errorCode,
        info: action.payload.info
      });
    default:
      return state;
  }
};

export {user};
