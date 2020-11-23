import {combineReducers} from "redux";
import {loadedData} from "./loaded-data/loaded-data";
import {appState} from "./app-state/app-state";
import {user} from "./user/user";

const NameSpace = {
  DATA: `DATA`,
  STATE: `STATE`,
  USER: `USER`
};

export default combineReducers({
  [NameSpace.DATA]: loadedData,
  [NameSpace.STATE]: appState,
  [NameSpace.USER]: user
});
