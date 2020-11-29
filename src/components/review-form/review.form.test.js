import React from "react";
import renderer from "react-test-renderer";
import {noop} from "../../test-mocks/common";
import ReviewForm from "./review-form";

const shortText = `Some review text`;
const longText = `A good review includes enough detail to give others a feel for what happened.`;

const requiredProps = {
  onRateChange: noop,
  onTextChange: noop,
  onSubmit: noop
};

describe(`ReviewForm`, () => {
  it(`Should render with submit button disabled when no text or rate`, () => {
    const tree = renderer
      .create(
          <ReviewForm {...requiredProps} text="" rate={0} />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should render with submit button disabled when text only`, () => {
    const tree = renderer
      .create(
          <ReviewForm {...requiredProps} text={longText} rate={0}/>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should render with submit button disabled when rate only`, () => {
    const tree = renderer
      .create(
          <ReviewForm {...requiredProps} text="" rate={2} />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should render with submit button disabled when short text and rate`, () => {
    const tree = renderer
      .create(
          <ReviewForm {...requiredProps} text={shortText} rate={2} />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should render with submit button enabled when long text and rate`, () => {
    const tree = renderer
      .create(
          <ReviewForm
            {...requiredProps} text={longText} rate={2} />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should render all disabled while submitting`, () => {
    const tree = renderer
      .create(
          <ReviewForm
            {...requiredProps} text={longText} rate={2} disabled={true} />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });


  it(`Should render error message when submit failed with error status 401`, () => {
    const tree = renderer
      .create(
          <ReviewForm {...requiredProps} text={longText} rate={5} addReviewError={401} />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should render error message when submit failed with other error status`, () => {
    const tree = renderer
      .create(
          <ReviewForm {...requiredProps} text={longText} rate={5} addReviewError={500} />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
