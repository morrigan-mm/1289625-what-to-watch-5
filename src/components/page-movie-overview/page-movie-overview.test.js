import React from "react";
import renderer from "react-test-renderer";
import film from "../../test-mocks/film";
import PageMovieOverview from "./page-movie-overview";


describe(`PageMovieOverview`, () => {
  it(`Should render correctly`, () => {
    const tree = renderer
      .create(
          <PageMovieOverview film={film} />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
