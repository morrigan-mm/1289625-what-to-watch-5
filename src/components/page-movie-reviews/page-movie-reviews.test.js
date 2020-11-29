import React from "react";
import renderer from "react-test-renderer";
import PageMovieReviews from "./page-movie-reviews";
import reviews from "../../test-mocks/reviews";

const emptyReviews = [];

describe(`PageMovieReviews`, () => {
  it(`Should render correctly with full review list`, () => {
    const tree = renderer
      .create(
          <PageMovieReviews reviews={reviews} />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should render correctly with empty review list`, () => {
    const tree = renderer
      .create(
          <PageMovieReviews reviews={emptyReviews} />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});


