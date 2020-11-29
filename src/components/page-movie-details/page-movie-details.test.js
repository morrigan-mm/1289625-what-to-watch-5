import React from "react";
import renderer from "react-test-renderer";
import film from "../../test-mocks/film";
import PageMovieDetails from "./page-movie-details";


describe(`PageMovieDetails`, () => {
  it(`Should render correctly`, () => {
    const tree = renderer
      .create(
          <PageMovieDetails film={film} />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
