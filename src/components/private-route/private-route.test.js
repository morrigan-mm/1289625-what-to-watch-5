import React from "react";
import {StaticRouter} from "react-router-dom";
import renderer from "react-test-renderer";
import {AuthorizationStatus} from "../../constants";
import {PrivateRoute} from "./private-route";

describe(`PrivateRoute`, () => {
  it(`Should render with call given render function, if status is AUTH`, () => {
    const tree = renderer
      .create(
          <StaticRouter>
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.AUTH}
              render={() => <div />}
            />
          </StaticRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should render redirect, if status is NO_AUTH`, () => {
    const tree = renderer
      .create(
          <StaticRouter>
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NO_AUTH}
              render={() => <div />}
            />
          </StaticRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
