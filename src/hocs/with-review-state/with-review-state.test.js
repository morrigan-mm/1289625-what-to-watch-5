import React, {Fragment} from "react";
import renderer from "react-test-renderer";
import {noop} from "../../test-mocks/common";
import {mockComponentType} from "../../test-mocks/mock-prop-types";
import withReviewState from "./with-review-state";

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = mockComponentType;

const MockComponentWrapped = withReviewState(MockComponent);

it(`withReviewState is rendered correctly`, () => {
  const tree = renderer
    .create((
      <MockComponentWrapped
        text=""
        rate={0}
        onRateChange={noop}
        onTextChange={noop}
      >
        <Fragment />
      </MockComponentWrapped>
    ))
    .toJSON();

  expect(tree).toMatchSnapshot();
});
