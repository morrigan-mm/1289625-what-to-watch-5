import React from "react";
import renderer from "react-test-renderer";
import {StaticRouter} from "react-router-dom";
import {headerUserAuthorized, headerUserUnauthorized} from "../../test-mocks/header-user";
import HeaderUserBlock from "./header-user-block";

describe(`HeaderUserBlock`, () => {
  it(`Should render authorized`, () => {
    const tree = renderer
      .create(
          <StaticRouter>
            <HeaderUserBlock
              headerUser={headerUserAuthorized}
            />
          </StaticRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should render unauthorized`, () => {
    const tree = renderer
      .create(
          <StaticRouter>
            <HeaderUserBlock
              headerUser={headerUserUnauthorized}
            />
          </StaticRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
