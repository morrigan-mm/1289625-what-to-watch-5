import React from "react";
import {StaticRouter} from "react-router-dom";
import renderer from "react-test-renderer";
import {PageMovieTab} from "../../constants";
import {noop} from "../../test-mocks/common";
import film from "../../test-mocks/film";
import {headerUserAuthorized, headerUserUnauthorized} from "../../test-mocks/header-user";
import {extend} from "../../utils";
import {PageMovie} from "./page-movie";

const films = Array(2).fill(film).map((filmItem, i) => extend(filmItem, {id: i}));
const noFilms = [];

const requiredProps = {
  activeTab: PageMovieTab.OVERVIEW,
  filmId: film.id,
  reviews: [],
  dispatchChangeFavoriteReset: noop,
  dispatchLoadReviews: noop,
  onPlayButtonClick: noop,
  onMyListButtonClick: noop
};

describe(`PageMovie`, () => {
  it(`Should render no add review button when no authorization`, () => {
    const tree = renderer
      .create(
          <StaticRouter>
            <PageMovie
              {...requiredProps}
              film={film}
              headerUser={headerUserUnauthorized}
              similarFilms={noFilms}
            />
          </StaticRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should render add review button when authorization`, () => {
    const tree = renderer
      .create(
          <StaticRouter>
            <PageMovie
              {...requiredProps}
              film={film}
              headerUser={headerUserAuthorized}
              similarFilms={noFilms}
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
            <PageMovie
              {...requiredProps}
              film={film}
              headerUser={headerUserUnauthorized}
              isFavoriteChanging={true}
              similarFilms={noFilms}
            />
          </StaticRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should render error message when try to add to list of favorites unauthorized`, () => {
    const tree = renderer
      .create(
          <StaticRouter>
            <PageMovie
              {...requiredProps}
              film={film}
              headerUser={headerUserUnauthorized}
              changeFavoriteError={401}
              similarFilms={noFilms}
            />
          </StaticRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should render list of similar movies`, () => {
    const tree = renderer
      .create(
          <StaticRouter>
            <PageMovie
              {...requiredProps}
              film={film}
              headerUser={headerUserUnauthorized}
              similarFilms={films}
            />
          </StaticRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should not render list of similar movies with an empty array`, () => {
    const tree = renderer
      .create(
          <StaticRouter>
            <PageMovie
              {...requiredProps}
              film={film}
              headerUser={headerUserUnauthorized}
              similarFilms={noFilms}
            />
          </StaticRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should render details tab content`, () => {
    const tree = renderer
      .create(
          <StaticRouter>
            <PageMovie
              {...requiredProps}
              activeTab={PageMovieTab.DETAILS}
              film={film}
              similarFilms={noFilms}
              headerUser={headerUserUnauthorized}
            />
          </StaticRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should render reviews tab content`, () => {
    const tree = renderer
      .create(
          <StaticRouter>
            <PageMovie
              {...requiredProps}
              activeTab={PageMovieTab.REVIEWS}
              film={film}
              headerUser={headerUserUnauthorized}
              similarFilms={noFilms}
            />
          </StaticRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should redirect to Not-Found-Page when no movie`, () => {
    const tree = renderer
      .create(
          <StaticRouter>
            <PageMovie
              {...requiredProps}
              headerUser={headerUserUnauthorized}
              similarFilms={noFilms}
            />
          </StaticRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
