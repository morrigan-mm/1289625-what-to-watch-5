import React from "react";
import renderer from "react-test-renderer";
import {noop} from "../../test-mocks/common";
import film from "../../test-mocks/film";
import {Player} from "./player";

const requiredProps = {
  film,
  filmId: film.id,
  duration: 600,
  onExitButtonClick: noop,
  onButtonClick: noop,
  onDurationChange: noop,
  onTimeUpdate: noop
};

describe(`Player`, () => {
  it(`Should render correctly`, () => {
    const tree = renderer
      .create(
          <Player {...requiredProps} currentTime={0} isPlaying={false} />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should render correctly when 5 minutes play`, () => {
    const tree = renderer
      .create(
          <Player {...requiredProps} currentTime={300} isPlaying={true} />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
