import React from "react";
import {StaticRouter} from "react-router-dom";
import renderer from "react-test-renderer";
import PageNotFound from "./page-not-found";


describe(`PageNotFound`, () => {
  it(`Should render correctly`, () => {
    const tree = renderer
      .create(
          <StaticRouter>
            <PageNotFound />
          </StaticRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
