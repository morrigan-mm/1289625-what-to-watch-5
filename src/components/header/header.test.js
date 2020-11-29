import React from "react";
import renderer from "react-test-renderer";
import {StaticRouter} from "react-router-dom";
import Header from "./header";

describe(`Header`, () => {
  it(`With no pageType`, () => {
    const tree = renderer
      .create(
          <StaticRouter>
            <Header />
          </StaticRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`With pageType="movie-card"`, () => {
    const tree = renderer
      .create(
          <StaticRouter>
            <Header pageType="movie-card" />
          </StaticRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`With pageType="user-page"`, () => {
    const tree = renderer
      .create(
          <StaticRouter>
            <Header pageType="user-page" />
          </StaticRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`With content`, () => {
    const tree = renderer
      .create(
          <StaticRouter>
            <Header>
              content
            </Header>
          </StaticRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
