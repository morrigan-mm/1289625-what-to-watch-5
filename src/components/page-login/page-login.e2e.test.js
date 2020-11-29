import React from "react";
import {StaticRouter} from "react-router-dom";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {AuthorizationStatus} from "../../constants";
import {mockEvent} from "../../test-mocks/common";
import {PageLogin} from "./page-login";

configure({adapter: new Adapter()});

describe(`PageLogin e2e`, () => {
  it(`Should call onLoginSubmit on form submit with valid email`, () => {
    const onLoginSubmit = jest.fn();

    const wrapper = mount(
        <StaticRouter>
          <PageLogin
            authorizationStatus={AuthorizationStatus.NO_AUTH}
            onLoginSubmit={onLoginSubmit}
          />
        </StaticRouter>
    );

    wrapper.find(`input`).at(0).simulate(`change`, {target: {value: `user@example.com`}});
    wrapper.find(`form`).simulate(`submit`, mockEvent);

    expect(onLoginSubmit).toHaveBeenCalledTimes(1);
  });

  it(`Should not call onLoginSubmit on form submit with invalid email`, () => {
    const onLoginSubmit = jest.fn();

    const wrapper = mount(
        <StaticRouter>
          <PageLogin
            authorizationStatus={AuthorizationStatus.NO_AUTH}
            onLoginSubmit={onLoginSubmit}
          />
        </StaticRouter>
    );

    wrapper.find(`input`).at(0).simulate(`change`, {target: {value: `user@@example.com`}});
    wrapper.find(`form`).simulate(`submit`, mockEvent);

    expect(onLoginSubmit).toHaveBeenCalledTimes(0);
  });
});
