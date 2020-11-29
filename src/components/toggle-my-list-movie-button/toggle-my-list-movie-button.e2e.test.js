import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ToggleMyListMovieButton from "./toggle-my-list-movie-button";

configure({adapter: new Adapter()});

describe(`ToggleMyListMovieButton e2e`, () => {
  it(`Should call onClick on click`, () => {
    const onClick = jest.fn();

    const wrapper = shallow(<ToggleMyListMovieButton onClick={onClick} />);

    wrapper.simulate(`click`);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
