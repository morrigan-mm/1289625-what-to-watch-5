import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {mockEvent, noop} from "../../test-mocks/common";
import {extend} from "../../utils";
import ReviewForm from "./review-form";

configure({adapter: new Adapter()});

const requiredProps = {
  rate: 0,
  text: ``,
  onRateChange: noop,
  onTextChange: noop,
  onSubmit: noop
};

describe(`ReviewForm e2e`, () => {
  it(`Should call onSubmit on form submit`, () => {
    const onSubmit = jest.fn();

    const wrapper = shallow(
        <ReviewForm
          {...requiredProps}
          onSubmit={onSubmit}
        />
    );

    wrapper.find(`form`).simulate(`submit`, mockEvent);

    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  it(`Should call onTextChange with target value on textarea change`, () => {
    const onTextChange = jest.fn();

    const wrapper = shallow(
        <ReviewForm
          {...requiredProps}
          onTextChange={onTextChange}
        />
    );

    wrapper.find(`textarea`).simulate(`change`, extend(mockEvent, {target: {value: `review text`}}));

    expect(onTextChange).toHaveBeenCalledTimes(1);
    expect(onTextChange).toHaveBeenCalledWith(`review text`);
  });

  it(`Should call onRateChange with target value on radio input change`, () => {
    const onRateChange = jest.fn();

    const wrapper = shallow(
        <ReviewForm
          {...requiredProps}
          onRateChange={onRateChange}
        />
    );

    wrapper
      .find(`input[type="radio"]:not(.visually-hidden)`).at(0)
      .simulate(`change`, extend(mockEvent, {target: {value: 777}}));

    expect(onRateChange).toHaveBeenCalledTimes(1);
    expect(onRateChange).toHaveBeenCalledWith(777);
  });
});
