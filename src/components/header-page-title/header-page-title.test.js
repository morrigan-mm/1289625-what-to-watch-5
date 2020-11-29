import React from "react";
import renderer from "react-test-renderer";
import HeaderPageTitle from "./header-page-title";

describe(`HeaderPageTitle`, () => {
  it(`Should render correctly`, () => {
    const tree = renderer
      .create(
          <HeaderPageTitle>content</HeaderPageTitle>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
