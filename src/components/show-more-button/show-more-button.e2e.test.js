import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ShowMoreButton from "./show-more-button";

configure({adapter: new Adapter()});

describe(`ShowMoreButton e2e`, () => {
  it(`Should call onClick on click`, () => {
    const onClick = jest.fn();

    const wrapper = shallow(<ShowMoreButton onClick={onClick} />);

    wrapper.find(`button`).simulate(`click`);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
