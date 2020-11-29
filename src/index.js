import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {checkAuthorization, fetchMovieList, fetchPromoMovie} from "./store/api-actions";
import App from "./components/app/app";
import store from "./store/store";

Promise.all([
  store.dispatch(fetchMovieList()),
  store.dispatch(fetchPromoMovie()),
  store.dispatch(checkAuthorization())
]).then(() => {
  ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById(`root`)
  );
});
