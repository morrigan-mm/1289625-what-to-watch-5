import React, {Fragment} from "react";
import renderer from "react-test-renderer";
import {noop} from "../../test-mocks/common";
import {mockComponentType} from "../../test-mocks/mock-prop-types";
import withPlayingState from "./with-playing-state";

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = mockComponentType;

const MockComponentWrapped = withPlayingState(MockComponent);

it(`withPlayingState is rendered correctly`, () => {
  const tree = renderer
    .create((
      <MockComponentWrapped
        duration={0}
        currentTime={0}
        onButtonClick={noop}
        onDurationChange={noop}
        onTimeUpdate={noop}
      >
        <Fragment />
      </MockComponentWrapped>
    ))
    .toJSON();

  expect(tree).toMatchSnapshot();
});
