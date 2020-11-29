import React from "react";
import renderer from "react-test-renderer";
import film from "../../test-mocks/film";
import MoviePreview from "./movie-preview";

const {poster, video} = film;

describe(`MoviePreview`, () => {
  it(`Should render correctly`, () => {
    const tree = renderer
      .create(
          <MoviePreview poster={poster} video={video} />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
