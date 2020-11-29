import React from "react";
import renderer from "react-test-renderer";
import {StaticRouter} from "react-router-dom";
import {noop} from "../../test-mocks/common";
import film from "../../test-mocks/film";
import {headerUserAuthorized, headerUserUnauthorized} from "../../test-mocks/header-user";
import {extend} from "../../utils";
import MainHead from "./main-head";

const filmMock = film;
const userAuthorized = headerUserAuthorized;
const userUnauthorized = headerUserUnauthorized;

const requiredProps = {
  onMyListButtonClick: noop,
  onPlayButtonClick: noop,
};

describe(`MainHead`, () => {
  it(`Should render no favorite promo`, () => {
    const tree = renderer
      .create(
          <StaticRouter>
            <MainHead
              {...requiredProps}
              headerUser={userAuthorized}
              promo={extend(filmMock, {addedToMyList: false})}
            />
          </StaticRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should render favorite promo`, () => {
    const tree = renderer
      .create(
          <StaticRouter>
            <MainHead
              {...requiredProps}
              headerUser={userAuthorized}
              promo={extend(filmMock, {addedToMyList: true})}
            />
          </StaticRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should render disabled add-to-my-list button`, () => {
    const tree = renderer
      .create(
          <StaticRouter>
            <MainHead
              {...requiredProps}
              headerUser={userUnauthorized}
              promo={filmMock}
              myListButtonDisabled
            />
          </StaticRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should render with authorization error message`, () => {
    const tree = renderer
      .create(
          <StaticRouter>
            <MainHead
              {...requiredProps}
              headerUser={userUnauthorized}
              promo={filmMock}
              changeFavoriteError={401}
            />
          </StaticRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should render with other error message`, () => {
    const tree = renderer
      .create(
          <StaticRouter>
            <MainHead
              {...requiredProps}
              headerUser={userUnauthorized}
              promo={filmMock}
              changeFavoriteError={500}
            />
          </StaticRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
