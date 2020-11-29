import React from "react";
import {StaticRouter} from "react-router-dom";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {noop} from "../../test-mocks/common";
import film from "../../test-mocks/film";
import {headerUserUnauthorized} from "../../test-mocks/header-user";
import {extend} from "../../utils";
import {PageMain} from "./page-main";

configure({adapter: new Adapter()});

const mockFilms = Array(2).fill(film).map((filmItem, i) => extend(filmItem, {id: i}));
const mockPromo = film;

const requiredProps = {
  films: mockFilms,
  promo: mockPromo,
  headerUser: headerUserUnauthorized,
  genres: [`Comedy`, `Action`, `Drama`],
  onGenreSelect: noop,
  onUnmount: noop,
  onPlayButtonClick: noop,
  onShowMoreButtonClick: noop,
  onMyListButtonClick: noop
};

describe(`PageMain e2e`, () => {
  it(`Should call onUnmount on component unmount`, () => {
    const onUnmount = jest.fn();

    const wrapper = mount(
        <StaticRouter>
          <PageMain {...requiredProps} onUnmount={onUnmount} />
        </StaticRouter>
    );

    expect(onUnmount).toHaveBeenCalledTimes(0);
    wrapper.unmount();
    expect(onUnmount).toHaveBeenCalledTimes(1);
  });
});
