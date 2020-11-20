import {combineReducers} from "redux";
import {loadedData} from "./loaded-data/loaded-data";
import {appState} from "./app-state/app-state";

const NameSpace = {
  DATA: `DATA`,
  STATE: `STATE`
};

export default combineReducers({
  [NameSpace.DATA]: loadedData,
  [NameSpace.STATE]: appState
});
