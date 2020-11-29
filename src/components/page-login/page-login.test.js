import React from "react";
import {StaticRouter} from "react-router-dom";
import renderer from "react-test-renderer";
import {AuthorizationStatus} from "../../constants";
import {noop} from "../../test-mocks/common";
import {PageLogin} from "./page-login";


describe(`PageLogin`, () => {
  it(`Should render correctly with no authorization`, () => {
    const tree = renderer
      .create(
          <StaticRouter>
            <PageLogin
              authorizationStatus={AuthorizationStatus.NO_AUTH}
              onLoginSubmit={noop}
            />
          </StaticRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should redirect with authorization`, () => {
    const tree = renderer
      .create(
          <StaticRouter>
            <PageLogin
              authorizationStatus={AuthorizationStatus.AUTH}
              onLoginSubmit={noop}
            />
          </StaticRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
