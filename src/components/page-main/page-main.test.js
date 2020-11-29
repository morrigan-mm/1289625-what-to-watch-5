import React from "react";
import {StaticRouter} from "react-router-dom";
import renderer from "react-test-renderer";
import {noop} from "../../test-mocks/common";
import film from "../../test-mocks/film";
import {headerUserUnauthorized} from "../../test-mocks/header-user";
import {extend} from "../../utils";
import {PageMain} from "./page-main";

const mockPromo = film;
const mockFilms = Array(2).fill(film).map((filmItem, i) => extend(filmItem, {id: i}));

const requiredProps = {
  promo: mockPromo,
  headerUser: headerUserUnauthorized,
  genres: [`Comedy`, `Action`, `Drama`],
  onGenreSelect: noop,
  onUnmount: noop,
  onPlayButtonClick: noop,
  onShowMoreButtonClick: noop,
  onMyListButtonClick: noop
};

describe(`PageMain`, () => {
  it(`Should render show-more button`, () => {
    const tree = renderer
      .create(
          <StaticRouter>
            <PageMain {...requiredProps} films={mockFilms} hasMoreFilms={true} />
          </StaticRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should render active genre 'Comedy' selected`, () => {
    const tree = renderer
      .create(
          <StaticRouter>
            <PageMain {...requiredProps} films={mockFilms} activeGenre={`Comedy`} />
          </StaticRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

