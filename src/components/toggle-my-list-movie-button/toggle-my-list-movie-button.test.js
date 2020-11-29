import React from "react";
import renderer from "react-test-renderer";
import ToggleMyListMovieButton from "./toggle-my-list-movie-button";

describe(`ToggleMyListMovieButton`, () => {
  it(`With no props`, () => {
    const tree = renderer
      .create(
          <ToggleMyListMovieButton />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`With disabled prop`, () => {
    const tree = renderer
      .create(
          <ToggleMyListMovieButton disabled />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`With isFavorite prop`, () => {
    const tree = renderer
      .create(
          <ToggleMyListMovieButton isFavorite />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
