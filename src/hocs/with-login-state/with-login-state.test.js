import React, {Fragment} from "react";
import renderer from "react-test-renderer";
import {noop} from "../../test-mocks/common";
import {mockComponentType} from "../../test-mocks/mock-prop-types";
import withLoginState from "./with-login-state";

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = mockComponentType;

const MockComponentWrapped = withLoginState(MockComponent);

it(`withLoginState is rendered correctly`, () => {
  const tree = renderer
    .create((
      <MockComponentWrapped
        email=""
        password=""
        onEmailChange={noop}
        onPasswordChange={noop}
        validateEmail={noop}
      >
        <Fragment />
      </MockComponentWrapped>
    ))
    .toJSON();

  expect(tree).toMatchSnapshot();
});
