import {combineReducers} from "redux";
import {StoreKey} from "../../constants";
import {loadedData} from "./loaded-data/loaded-data";
import {appState} from "./app-state/app-state";
import {user} from "./user/user";
import {operations} from "./operations/operations";

export default combineReducers({
  [StoreKey.DATA]: loadedData,
  [StoreKey.OPERATIONS]: operations,
  [StoreKey.STATE]: appState,
  [StoreKey.USER]: user
});
