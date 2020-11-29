import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {mockEvent} from "../../test-mocks/common";
import ReviewForm from "./review-form";

configure({adapter: new Adapter()});

const shortText = `Some review text`;
const longText = `A good review includes enough detail to give others a feel for what happened.`;

describe(`ReviewForm e2e`, () => {
  it(`Should not call onSubmit when no rate and text`, () => {
    const onSubmit = jest.fn();

    const wrapper = shallow(
        <ReviewForm onSubmit={onSubmit} />
    );

    wrapper.find(`form`).simulate(`submit`, mockEvent);

    expect(onSubmit).toHaveBeenCalledTimes(0);
  });

  it(`Should not call onSubmit if rate is not selected`, () => {
    const onSubmit = jest.fn();

    const wrapper = shallow(
        <ReviewForm onSubmit={onSubmit} />
    );

    wrapper.find(`#review-text`).simulate(`change`, {target: {value: longText}});
    wrapper.find(`form`).simulate(`submit`, mockEvent);

    expect(onSubmit).toHaveBeenCalledTimes(0);
  });

  it(`Should not call onSubmit if text is empty`, () => {
    const onSubmit = jest.fn();

    const wrapper = shallow(
        <ReviewForm onSubmit={onSubmit} />
    );

    wrapper.find(`#star-3`).simulate(`change`, {target: {value: 3}});
    wrapper.find(`form`).simulate(`submit`, mockEvent);

    expect(onSubmit).toHaveBeenCalledTimes(0);
  });

  it(`Should not call onSubmit if text length is less than 50 symbols`, () => {
    const onSubmit = jest.fn();

    const wrapper = shallow(
        <ReviewForm onSubmit={onSubmit} />
    );

    wrapper.find(`#review-text`).simulate(`change`, {target: {value: shortText}});
    wrapper.find(`form`).simulate(`submit`, mockEvent);

    expect(onSubmit).toHaveBeenCalledTimes(0);
  });

  it(`Should call onSubmit when text and rate are valid`, () => {
    const onSubmit = jest.fn();

    const wrapper = shallow(
        <ReviewForm onSubmit={onSubmit} />
    );

    wrapper.find(`#review-text`).simulate(`change`, {target: {value: longText}});
    wrapper.find(`#star-3`).simulate(`change`, {target: {value: 3}});
    wrapper.find(`form`).simulate(`submit`, mockEvent);

    expect(onSubmit).toHaveBeenCalledTimes(1);
  });
});
