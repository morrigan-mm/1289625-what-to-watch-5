import React from "react";
import renderer from "react-test-renderer";
import PlayMovieButton from "./play-movie-button";

describe(`PlayMovieButton`, () => {
  it(`Should render correctly`, () => {
    const tree = renderer
      .create(
          <PlayMovieButton />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
