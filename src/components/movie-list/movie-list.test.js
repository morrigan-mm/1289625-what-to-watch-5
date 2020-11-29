import React from "react";
import renderer from "react-test-renderer";
import MovieList from "./movie-list";
import film from "../../test-mocks/film";
import {extend} from "../../utils";
import {StaticRouter} from "react-router-dom";

const films = Array(5).fill(film).map((filmItem, i) => extend(filmItem, {id: i}));

describe(`MovieList`, () => {
  it(`Should render correctly`, () => {
    const tree = renderer
      .create(
          <StaticRouter>
            <MovieList films={films} />
          </StaticRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
