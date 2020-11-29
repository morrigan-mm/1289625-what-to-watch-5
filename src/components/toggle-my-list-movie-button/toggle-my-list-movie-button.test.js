import React from "react";
import renderer from "react-test-renderer";
import {noop} from "../../test-mocks/common";
import ToggleMyListMovieButton from "./toggle-my-list-movie-button";

describe(`ToggleMyListMovieButton`, () => {
  it(`With no props`, () => {
    const tree = renderer
      .create(
          <ToggleMyListMovieButton onClick={noop} />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`With disabled prop`, () => {
    const tree = renderer
      .create(
          <ToggleMyListMovieButton onClick={noop} disabled />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`With isFavorite prop`, () => {
    const tree = renderer
      .create(
          <ToggleMyListMovieButton onClick={noop} isFavorite />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
