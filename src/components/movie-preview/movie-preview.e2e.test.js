import React from "react";
import {StaticRouter} from "react-router-dom";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {mockEvent} from "../../test-mocks/common";
import MoviePreview from "./movie-preview";

configure({adapter: new Adapter()});

describe(`MoviePreview e2e`, () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  it(`Should start video after 1s when mouse enters video`, () => {
    let videoRef = null;

    const wrapper = mount(
        <StaticRouter>
          <MoviePreview
            poster="#poster"
            video="#video"
            videoRef={(ref) => {
              videoRef = ref;
            }}
          />
        </StaticRouter>
    );

    const playFn = jest.fn();

    videoRef.current.play = playFn;

    wrapper.find(`video`).simulate(`mouseenter`, mockEvent);

    expect(playFn).toHaveBeenCalledTimes(0);

    jest.advanceTimersByTime(1000);

    expect(playFn).toHaveBeenCalledTimes(1);
  });

  it(`Should pause video when mouse leaves video and should not play it after 1s`, () => {
    let videoRef = null;

    const wrapper = mount(
        <StaticRouter>
          <MoviePreview
            poster="#poster"
            video="#video"
            videoRef={(ref) => {
              videoRef = ref;
            }}
          />
        </StaticRouter>
    );

    const playFn = jest.fn();
    const pauseFn = jest.fn();

    videoRef.current.play = playFn;
    videoRef.current.pause = pauseFn;

    wrapper.find(`video`).simulate(`mouseenter`, mockEvent);
    wrapper.find(`video`).simulate(`mouseleave`, mockEvent);

    expect(pauseFn).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(1000);

    expect(playFn).toHaveBeenCalledTimes(0);
  });

  it(`Should not play video after component unmount`, () => {
    let videoRef = null;

    const wrapper = mount(
        <StaticRouter>
          <MoviePreview
            poster="#poster"
            video="#video"
            videoRef={(ref) => {
              videoRef = ref;
            }}
          />
        </StaticRouter>
    );

    const playFn = jest.fn();

    videoRef.current.play = playFn;

    wrapper.find(`video`).simulate(`mouseenter`, mockEvent);

    jest.advanceTimersByTime(500);

    wrapper.unmount();

    jest.advanceTimersByTime(500);

    expect(playFn).toHaveBeenCalledTimes(0);
  });
});
