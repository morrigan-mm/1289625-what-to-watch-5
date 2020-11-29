import React from "react";
import renderer from "react-test-renderer";
import reviews from "../../test-mocks/reviews";
import Review from "./review";

const [reviewMock] = reviews;

describe(`Review`, () => {
  it(`Should render correctly`, () => {
    const tree = renderer
      .create(
          <Review review={reviewMock} />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
