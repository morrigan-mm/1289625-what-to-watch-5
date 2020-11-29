import React from "react";
import renderer from "react-test-renderer";
import {StaticRouter} from "react-router-dom";
import Logo from "./logo";

describe(`Logo`, () => {
  it(`With no modifier`, () => {
    const tree = renderer
      .create(
          <StaticRouter>
            <Logo />
          </StaticRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`With modifier`, () => {
    const tree = renderer
      .create(
          <StaticRouter>
            <Logo isModified />
          </StaticRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
