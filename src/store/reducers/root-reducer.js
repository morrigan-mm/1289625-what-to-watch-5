import {combineReducers} from "redux";
import {loadedData} from "./loaded-data/loaded-data";
import {appState} from "./app-state/app-state";
import {user} from "./user/user";
import {operations} from "./operations/operations";

const NameSpace = {
  DATA: `DATA`,
  STATE: `STATE`,
  USER: `USER`,
  OPERATIONS: `OPERATIONS`
};

export default combineReducers({
  [NameSpace.DATA]: loadedData,
  [NameSpace.STATE]: appState,
  [NameSpace.USER]: user,
  [NameSpace.OPERATIONS]: operations
});
