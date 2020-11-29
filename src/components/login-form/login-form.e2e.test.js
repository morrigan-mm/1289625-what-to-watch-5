import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {mockEvent} from "../../test-mocks/common";
import LoginForm from "./login-form";

configure({adapter: new Adapter()});

describe(`LoginForm e2e`, () => {
  it(`Should call onSubmit on form submit with valid email`, () => {
    const onSubmit = jest.fn();

    const wrapper = shallow(
        <LoginForm
          onSubmit={onSubmit}
        />
    );
    wrapper.find(`#user-email`).simulate(`change`, {target: {value: `user@example.com`}});
    wrapper.find(`#user-password`).simulate(`change`, {target: {value: `mYpAssW0rd`}});
    wrapper.find(`form`).simulate(`submit`, mockEvent);

    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toBeCalledWith(`user@example.com`, `mYpAssW0rd`);
  });

  it(`Should not call onSubmit on form submit if email is not valid`, () => {
    const onSubmit = jest.fn();

    const wrapper = shallow(
        <LoginForm
          onSubmit={onSubmit}
        />
    );

    wrapper.find(`form`).simulate(`submit`, mockEvent);

    expect(onSubmit).toHaveBeenCalledTimes(0);
  });
});
