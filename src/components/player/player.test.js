import React from "react";
import renderer from "react-test-renderer";
import {noop} from "../../test-mocks/common";
import film from "../../test-mocks/film";
import {Player} from "./player";

const requiredProps = {
  film,
  filmId: film.id,
  onExitButtonClick: noop
};

describe(`Player`, () => {
  it(`Should render correctly`, () => {
    const tree = renderer
      .create(
          <Player {...requiredProps} />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
