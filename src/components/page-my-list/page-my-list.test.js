import React from "react";
import {StaticRouter} from "react-router-dom";
import renderer from "react-test-renderer";
import film from "../../test-mocks/film";
import {headerUserAuthorized} from "../../test-mocks/header-user";
import {PageMyList} from "./page-my-list";

describe(`PageMyList`, () => {
  it(`Should render correctly with empty films`, () => {
    const tree = renderer
      .create(
          <StaticRouter>
            <PageMyList films={[]} headerUser={headerUserAuthorized} />
          </StaticRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should render correctly with not empty films`, () => {
    const tree = renderer
      .create(
          <StaticRouter>
            <PageMyList films={[film]} headerUser={headerUserAuthorized} />
          </StaticRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
