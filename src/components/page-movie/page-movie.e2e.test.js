import React from "react";
import {StaticRouter} from "react-router-dom";
import PropTypes from "prop-types";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {PageMovieTab} from "../../constants";
import {noop} from "../../test-mocks/common";
import film from "../../test-mocks/film";
import {headerUserUnauthorized} from "../../test-mocks/header-user";
import {PageMovie} from "./page-movie";

configure({adapter: new Adapter()});

const requiredProps = {
  activeTab: PageMovieTab.OVERVIEW,
  film,
  filmId: film.id,
  similarFilms: [film],
  headerUser: headerUserUnauthorized,
  reviews: [],
  dispatchChangeFavoriteReset: noop,
  dispatchLoadReviews: noop,
  onMyListButtonClick: noop,
  onPlayButtonClick: noop
};

describe(`PageMovie e2e`, () => {
  it(`Should call dispatchLoadReviews on component mount if film is provided`, () => {
    const dispatchLoadReviews = jest.fn();

    mount(
        <StaticRouter>
          <PageMovie {...requiredProps} dispatchLoadReviews={dispatchLoadReviews} />
        </StaticRouter>
    );

    expect(dispatchLoadReviews).toHaveBeenCalledTimes(1);
  });

  it(`Should not call dispatchLoadReviews on component mount if film is not provided`, () => {
    const dispatchLoadReviews = jest.fn();

    mount(
        <StaticRouter>
          <PageMovie {...requiredProps} dispatchLoadReviews={dispatchLoadReviews} film={undefined} />
        </StaticRouter>
    );

    expect(dispatchLoadReviews).toHaveBeenCalledTimes(0);
  });

  it(`Should call dispatchChangeFavoriteReset on unmount`, () => {
    const dispatchChangeFavoriteReset = jest.fn();

    const wrapper = mount(
        <StaticRouter>
          <PageMovie {...requiredProps} dispatchChangeFavoriteReset={dispatchChangeFavoriteReset} />
        </StaticRouter>
    );

    expect(dispatchChangeFavoriteReset).toHaveBeenCalledTimes(0);
    wrapper.unmount();
    expect(dispatchChangeFavoriteReset).toHaveBeenCalledTimes(1);
  });

  it(`Should call dispatchChangeFavoriteReset on filmId change`, () => {
    const dispatchChangeFavoriteReset = jest.fn();

    const PageMovieTest = ({filmId}) => (
      <StaticRouter>
        <PageMovie
          {...requiredProps}
          filmId={filmId}
          dispatchChangeFavoriteReset={dispatchChangeFavoriteReset}
        />
      </StaticRouter>
    );

    PageMovieTest.propTypes = {filmId: PropTypes.number.isRequired};

    const nextFilmId = film.id + 1;

    const wrapper = mount(<PageMovieTest filmId={film.id} />);

    wrapper.setProps({filmId: nextFilmId});

    expect(dispatchChangeFavoriteReset).toHaveBeenCalledTimes(1);
  });
});
