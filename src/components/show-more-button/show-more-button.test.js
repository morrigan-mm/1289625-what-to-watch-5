import React from "react";
import renderer from "react-test-renderer";
import {noop} from "../../test-mocks/common";
import ShowMoreButton from "./show-more-button";

describe(`ShowMoreButton`, () => {
  it(`Should render correctly`, () => {
    const tree = renderer
      .create(
          <ShowMoreButton onClick={noop} />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
