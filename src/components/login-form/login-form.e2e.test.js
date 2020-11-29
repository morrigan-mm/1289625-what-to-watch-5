import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {extend} from "../../utils";
import {mockEvent, noop} from "../../test-mocks/common";
import LoginForm from "./login-form";

configure({adapter: new Adapter()});

describe(`LoginForm e2e`, () => {
  it(`Should call onEmailChange on change email input with target value`, () => {
    const onEmailChange = jest.fn();

    const wrapper = shallow(
        <LoginForm
          email=""
          password=""
          onEmailChange={onEmailChange}
          onPasswordChange={noop}
          onSubmit={noop}
          validateEmail={noop}
        />
    );

    const testEvent = extend(mockEvent, {target: {value: `user@example.com`}});

    wrapper.find(`#user-email`).simulate(`change`, testEvent);

    expect(onEmailChange).toHaveBeenCalledTimes(1);
    expect(onEmailChange).toBeCalledWith(`user@example.com`);
  });

  it(`Should call onPaswordChange on change password input with target value`, () => {
    const onPasswordChange = jest.fn();

    const wrapper = shallow(
        <LoginForm
          email=""
          password=""
          onEmailChange={noop}
          onPasswordChange={onPasswordChange}
          onSubmit={noop}
          validateEmail={noop}
        />
    );

    wrapper.find(`#user-password`).simulate(`change`, extend(mockEvent, {target: {value: `mYpAssW0rd`}}));

    expect(onPasswordChange).toHaveBeenCalledTimes(1);
    expect(onPasswordChange).toBeCalledWith(`mYpAssW0rd`);
  });

  it(`Should call onSubmit on form submit with email and password if validateEmail returns true`, () => {
    const onSubmit = jest.fn();

    const wrapper = shallow(
        <LoginForm
          email="user@example.com"
          password="mYpAssW0rd"
          onEmailChange={noop}
          onPasswordChange={noop}
          onSubmit={onSubmit}
          validateEmail={() => true}
        />
    );

    wrapper.find(`form`).simulate(`submit`, mockEvent);

    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toBeCalledWith(`user@example.com`, `mYpAssW0rd`);
  });

  it(`Should not call onSubmit on form submit if validateEmail returns false`, () => {
    const onSubmit = jest.fn();

    const wrapper = shallow(
        <LoginForm
          emailError
          email="user@example.com"
          password="mYpAssW0rd"
          onEmailChange={noop}
          onPasswordChange={noop}
          onSubmit={onSubmit}
          validateEmail={() => false}
        />
    );

    wrapper.find(`form`).simulate(`submit`, mockEvent);

    expect(onSubmit).toHaveBeenCalledTimes(0);
  });
});
