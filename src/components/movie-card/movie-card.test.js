import React from "react";
import {StaticRouter} from "react-router-dom";
import renderer from "react-test-renderer";
import film from "../../test-mocks/film";
import MovieCard from "./movie-card";

describe(`MovieCard`, () => {
  it(`Should render correctly`, () => {
    const tree = renderer
      .create(
          <StaticRouter>
            <MovieCard film={film} />
          </StaticRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
