import React from "react";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import renderer from "react-test-renderer";
import {AuthorizationStatus, StoreKey} from "../../constants";
import film from "../../test-mocks/film";
import App from "./app";

const mockStore = configureStore([]);

it(`Should App render correctly`, () => {
  const store = mockStore({
    [StoreKey.DATA]: {
      films: [film],
      promo: film
    },
    [StoreKey.OPERATIONS]: {},
    [StoreKey.STATE]: {},
    [StoreKey.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH
    }
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <App />
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
