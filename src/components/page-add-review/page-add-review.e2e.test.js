import React from "react";
import {StaticRouter} from "react-router-dom";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {mockEvent, noop} from "../../test-mocks/common";
import film from "../../test-mocks/film";
import {headerUserAuthorized} from "../../test-mocks/header-user";
import {PageAddReview} from "./page-add-review";

configure({adapter: new Adapter()});

describe(`PageAddReview e2e`, () => {
  it(`Should call onReviewSubmit on form submit`, () => {
    const onReviewSubmit = jest.fn();

    const wrapper = mount(
        <StaticRouter>
          <PageAddReview
            film={film}
            filmId={film.id}
            headerUser={headerUserAuthorized}
            onReviewSubmit={onReviewSubmit}
            onUnmount={noop}
          />
        </StaticRouter>
    );

    wrapper.find(`form`).simulate(`submit`, mockEvent);

    expect(onReviewSubmit).toHaveBeenCalledTimes(1);
  });

  it(`Should call onUnmount on component unmount`, () => {
    const onUnmount = jest.fn();

    const wrapper = mount(
        <StaticRouter>
          <PageAddReview
            film={film}
            filmId={film.id}
            headerUser={headerUserAuthorized}
            onReviewSubmit={noop}
            onUnmount={onUnmount}
          />
        </StaticRouter>
    );

    expect(onUnmount).toHaveBeenCalledTimes(0);
    wrapper.unmount();
    expect(onUnmount).toHaveBeenCalledTimes(1);
  });
});
