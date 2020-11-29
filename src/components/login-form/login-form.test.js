import React from "react";
import renderer from "react-test-renderer";
import {noop} from "../../test-mocks/common";
import LoginForm from "./login-form";

describe(`LoginForm`, () => {
  it(`Should render correctly`, () => {
    const tree = renderer
      .create(
          <LoginForm onSubmit={noop} />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should render authorization error message`, () => {
    const tree = renderer
      .create(
          <LoginForm onSubmit={noop} authorizationError={401} />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
