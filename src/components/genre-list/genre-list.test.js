import React from "react";
import renderer from "react-test-renderer";
import {noop} from "../../test-mocks/common";
import GenreList from "./genre-list";

const genres = [`Action`, `Crime`];

describe(`GenreList`, () => {
  it(`With no active genre`, () => {
    const tree = renderer
      .create(
          <GenreList genres={genres} onGenreClick={noop} />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`With active genre`, () => {
    const tree = renderer
      .create(
          <GenreList genres={genres} onGenreClick={noop} activeGenre={genres[0]} />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
