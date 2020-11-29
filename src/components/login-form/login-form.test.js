import React from "react";
import renderer from "react-test-renderer";
import {noop} from "../../test-mocks/common";
import LoginForm from "./login-form";

const requiredProps = {
  email: `user@example.com`,
  password: `secret`,
  onEmailChange: noop,
  onPasswordChange: noop,
  onSubmit: noop,
  validateEmail: noop
};

describe(`LoginForm`, () => {
  it(`Should render correctly`, () => {
    const tree = renderer
      .create(
          <LoginForm {...requiredProps} />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should render authorization error message`, () => {
    const tree = renderer
      .create(
          <LoginForm {...requiredProps} authorizationError={401} />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should render email error message`, () => {
    const tree = renderer
      .create(
          <LoginForm {...requiredProps} emailError />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
