import React from "react";
import {StaticRouter} from "react-router-dom";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {mockEvent, noop} from "../../test-mocks/common";
import film from "../../test-mocks/film";
import {headerUserUnauthorized} from "../../test-mocks/header-user";
import MainHead from "./main-head";

configure({adapter: new Adapter()});

describe(`MainHead e2e`, () => {
  it(`Should call onPlayButtonClick on play button click with promo.id`, () => {
    const onPlayButtonClick = jest.fn();

    const wrapper = mount(
        <StaticRouter>
          <MainHead
            headerUser={headerUserUnauthorized}
            promo={film}
            onPlayButtonClick={onPlayButtonClick}
            onMyListButtonClick={noop}
          />
        </StaticRouter>
    );

    wrapper.find(`button`).at(0).simulate(`click`, mockEvent);

    expect(onPlayButtonClick).toHaveBeenCalledTimes(1);
    expect(onPlayButtonClick).toBeCalledWith(film.id);
  });

  it(`Should call onMyListButtonClick on my-list-button click with promo object`, () => {
    const onMyListButtonClick = jest.fn();

    const wrapper = mount(
        <StaticRouter>
          <MainHead
            headerUser={headerUserUnauthorized}
            promo={film}
            onPlayButtonClick={noop}
            onMyListButtonClick={onMyListButtonClick}
          />
        </StaticRouter>
    );

    wrapper.find(`button`).at(1).simulate(`click`, mockEvent);

    expect(onMyListButtonClick).toHaveBeenCalledTimes(1);
    expect(onMyListButtonClick).toBeCalledWith(film);
  });
});
