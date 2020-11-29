import {unknownAction} from "../../../test-mocks/actions";
import {ActionCreator} from "../../action";
import {appState} from "./app-state";

describe(`STATE reducer`, () => {
  it(`Should return default state`, () => {
    expect(appState(undefined, unknownAction)).toEqual({
      activeGenre: ``,
      chunk: 1
    });
  });

  it(`Should handle filterByGenre`, () => {
    expect(appState({
      activeGenre: `Comedy`,
      chunk: 2
    }, ActionCreator.filterByGenre(`Detective`))).toEqual({
      activeGenre: `Detective`,
      chunk: 1
    });
  });

  it(`Should handle setNextMoviesChunk`, () => {
    expect(appState({
      activeGenre: ``,
      chunk: 2
    }, ActionCreator.setNextMoviesChunk())).toEqual({
      activeGenre: ``,
      chunk: 3
    });
  });

  it(`Should handle resetMovies`, () => {
    expect(appState({
      activeGenre: `Comedy`,
      chunk: 2
    }, ActionCreator.resetMovies())).toEqual({
      activeGenre: ``,
      chunk: 1
    });
  });
});
