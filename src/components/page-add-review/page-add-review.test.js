import React from "react";
import {StaticRouter} from "react-router-dom";
import renderer from "react-test-renderer";
import {noop} from "../../test-mocks/common";
import film from "../../test-mocks/film";
import {headerUserAuthorized} from "../../test-mocks/header-user";
import {PageAddReview} from "./page-add-review";

const requiredProps = {
  filmId: film.id,
  headerUser: headerUserAuthorized,
  onReviewSubmit: noop,
  onUnmount: noop
};

describe(`PageAddReview`, () => {
  it(`Should render correctly`, () => {
    const tree = renderer
      .create(
          <StaticRouter>
            <PageAddReview {...requiredProps} film={film} />
          </StaticRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
