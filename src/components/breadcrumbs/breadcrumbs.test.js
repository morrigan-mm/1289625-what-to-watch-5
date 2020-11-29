import React from "react";
import {StaticRouter} from "react-router-dom";
import renderer from "react-test-renderer";
import {AppRoute} from "../../constants";
import Breadcrumbs from "./breadcrumbs";

const breadcrumbs = [
  {
    link: AppRoute.FILM.url({id: `1234`}),
    text: `A Star Is Born`,
  },
  {
    text: `Add Review`
  }
];

describe(`Breadcrumbs`, () => {
  it(`Should render correctly`, () => {
    const tree = renderer
      .create(
          <StaticRouter>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
          </StaticRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
