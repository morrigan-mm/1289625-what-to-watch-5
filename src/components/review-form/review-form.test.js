import React from "react";
import renderer from "react-test-renderer";
import {noop} from "../../test-mocks/common";
import ReviewForm from "./review-form";

describe(`ReviewForm`, () => {
  it(`Should render correctly`, () => {
    const tree = renderer
      .create(
          <ReviewForm onSubmit={noop} />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should render all disabled when disabled=true`, () => {
    const tree = renderer
      .create(
          <ReviewForm onSubmit={noop} disabled />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });


  it(`Should render error message when submit failed with error status 401`, () => {
    const tree = renderer
      .create(
          <ReviewForm onSubmit={noop} addReviewError={401} />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should render error message when submit failed with other error status`, () => {
    const tree = renderer
      .create(
          <ReviewForm onSubmit={noop} addReviewError={500} />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
