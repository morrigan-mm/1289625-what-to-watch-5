import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {noop} from "../../test-mocks/common";
import film from "../../test-mocks/film";
import {Player} from "./player";

configure({adapter: new Adapter()});

const requiredProps = {
  film,
  filmId: film.id,
  onExitButtonClick: noop
};

describe(`Player e2e`, () => {
  it(`Should call onExitButtonClick on exit button click`, () => {
    const onExitButtonClick = jest.fn();

    const wrapper = shallow(<Player {...requiredProps} onExitButtonClick={onExitButtonClick} />);

    wrapper.find(`button`).at(0).simulate(`click`);

    expect(onExitButtonClick).toHaveBeenCalledTimes(1);
  });
});
