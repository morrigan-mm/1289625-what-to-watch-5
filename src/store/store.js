import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

import {createAPI} from "../services/api";
import rootReducer from "./reducers/root-reducer";
import {ActionCreator} from "./action";

const api = createAPI(
    () => store.dispatch(ActionCreator.authorize(null))
);

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)))
);

export default store;
