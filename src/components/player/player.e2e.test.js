import React from "react";
import {configure, mount, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {noop} from "../../test-mocks/common";
import film from "../../test-mocks/film";
import {Player} from "./player";

configure({adapter: new Adapter()});

const requiredProps = {
  currentTime: 0,
  duration: 600,
  film,
  filmId: film.id,
  isPlaying: false,
  onExitButtonClick: noop,
  onButtonClick: noop,
  onDurationChange: noop,
  onTimeUpdate: noop
};

const BUTTON_ORDER = [`exit`, `play`];

const originalPlay = HTMLMediaElement.prototype.play;

describe(`Player e2e`, () => {
  beforeEach(() => {
    HTMLMediaElement.prototype.play = noop;
  });

  afterEach(() => {
    HTMLMediaElement.prototype.play = originalPlay;
  });

  it(`Should call onButtonClick on play button click`, () => {
    const onButtonClick = jest.fn();

    const wrapper = mount(<Player {...requiredProps} onButtonClick={onButtonClick} />);

    const buttonIndex = BUTTON_ORDER.indexOf(`play`);

    wrapper.find(`button`).at(buttonIndex).simulate(`click`);

    expect(onButtonClick).toHaveBeenCalledTimes(1);
  });

  it(`Should call onExitButtonClick on exit button click`, () => {
    const onExitButtonClick = jest.fn();

    const wrapper = shallow(<Player {...requiredProps} onExitButtonClick={onExitButtonClick} />);

    const buttonIndex = BUTTON_ORDER.indexOf(`exit`);

    wrapper.find(`button`).at(buttonIndex).simulate(`click`);

    expect(onExitButtonClick).toHaveBeenCalledTimes(1);
  });

  it(`Should call onDurationChange on video durationchange event with target duration`, () => {
    const onDurationChange = jest.fn();

    const wrapper = shallow(<Player {...requiredProps} onDurationChange={onDurationChange} />);

    wrapper.find(`video`).simulate(`durationchange`, {target: {duration: 1234}});

    expect(onDurationChange).toHaveBeenCalledTimes(1);
    expect(onDurationChange).toHaveBeenCalledWith(1234);
  });

  it(`Should call onTimeUpdate on video timeupdate event with target currentTime`, () => {
    const onTimeUpdate = jest.fn();

    const wrapper = shallow(<Player {...requiredProps} onTimeUpdate={onTimeUpdate} />);

    wrapper.find(`video`).simulate(`timeupdate`, {target: {currentTime: 777}});

    expect(onTimeUpdate).toHaveBeenCalledTimes(1);
    expect(onTimeUpdate).toHaveBeenCalledWith(777);
  });
});
