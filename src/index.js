import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {createAPI} from "./services/api";
import {fetchMovieList, fetchPromoMovie} from "./store/api-actions";
import App from "./components/app/app";
import rootReducer from "./store/reducers/root-reducer";

const api = createAPI();

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)))
);

Promise.all([
  store.dispatch(fetchMovieList()),
  store.dispatch(fetchPromoMovie())
]).then(() => {
  ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById(`root`)
  );
});
