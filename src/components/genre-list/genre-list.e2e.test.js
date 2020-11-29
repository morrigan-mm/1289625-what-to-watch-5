import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {mockEvent} from "../../test-mocks/common";
import GenreList from "./genre-list";

configure({adapter: new Adapter()});

describe(`GenreList e2e`, () => {
  it(`Should call onGenreClick on genre click`, () => {
    const onGenreClick = jest.fn();

    const wrapper = shallow(
        <GenreList
          genres={[`Comedy`]}
          onGenreClick={onGenreClick}
        />
    );

    wrapper.find(`[data-genre="Comedy"]`).simulate(`click`, mockEvent);

    expect(onGenreClick).toHaveBeenCalledTimes(1);
    expect(onGenreClick).toBeCalledWith(`Comedy`);
  });
});
