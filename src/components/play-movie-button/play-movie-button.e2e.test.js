import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PlayMovieButton from "./play-movie-button";

configure({adapter: new Adapter()});

describe(`PlayMovieButton e2e`, () => {
  it(`Should call onClick on click`, () => {
    const onClick = jest.fn();

    const wrapper = shallow(<PlayMovieButton onClick={onClick} />);

    wrapper.simulate(`click`);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
