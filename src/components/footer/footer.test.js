import React from "react";
import {StaticRouter} from "react-router-dom";
import renderer from "react-test-renderer";
import Footer from "./footer";

describe(`Footer`, () => {
  it(`Should render correctly`, () => {
    const tree = renderer
      .create(
          <StaticRouter>
            <Footer />
          </StaticRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
