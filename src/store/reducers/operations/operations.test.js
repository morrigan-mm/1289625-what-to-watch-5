import {MyListMovieStatus} from "../../../constants";
import {unknownAction} from "../../../test-mocks/actions";
import {ActionCreator} from "../../action";
import {operations} from "./operations";

describe(`OPERATIONS reducer`, () => {
  it(`Should return default state`, () => {
    expect(operations(undefined, unknownAction)).toEqual({
      addReviewLoading: false,
      addReviewError: 0,
      changeFavoriteLoading: false,
      changeFavoriteError: 0
    });
  });

  it(`Should handle request of addReview`, () => {
    expect(operations({
      addReviewLoading: false,
      addReviewError: 401,
      changeFavoriteLoading: false,
      changeFavoriteError: 0
    }, ActionCreator.addReview.request(1234, {}))).toEqual({
      addReviewLoading: true,
      addReviewError: 0,
      changeFavoriteLoading: false,
      changeFavoriteError: 0
    });
  });

  it(`Should handle success of addReview`, () => {
    expect(operations({
      addReviewLoading: true,
      addReviewError: 0,
      changeFavoriteLoading: false,
      changeFavoriteError: 0
    }, ActionCreator.addReview.success(1234, []))).toEqual({
      addReviewLoading: false,
      addReviewError: 0,
      changeFavoriteLoading: false,
      changeFavoriteError: 0
    });
  });

  it(`Should handle failure of addReview`, () => {
    expect(operations({
      addReviewLoading: true,
      addReviewError: 0,
      changeFavoriteLoading: false,
      changeFavoriteError: 0
    }, ActionCreator.addReview.failure(401))).toEqual({
      addReviewLoading: false,
      addReviewError: 401,
      changeFavoriteLoading: false,
      changeFavoriteError: 0
    });
  });

  it(`Should handle reset of addReview`, () => {
    expect(operations({
      addReviewLoading: true,
      addReviewError: 401,
      changeFavoriteLoading: true,
      changeFavoriteError: 401
    }, ActionCreator.addReview.reset())).toEqual({
      addReviewLoading: false,
      addReviewError: 0,
      changeFavoriteLoading: true,
      changeFavoriteError: 401
    });
  });

  it(`Should handle request of changeFavorite`, () => {
    expect(operations({
      addReviewLoading: false,
      addReviewError: 0,
      changeFavoriteLoading: false,
      changeFavoriteError: 401
    }, ActionCreator.changeFavorite.request(1234, MyListMovieStatus.ADD))).toEqual({
      addReviewLoading: false,
      addReviewError: 0,
      changeFavoriteLoading: true,
      changeFavoriteError: 0
    });
  });

  it(`Should handle success of changeFavorite`, () => {
    expect(operations({
      addReviewLoading: false,
      addReviewError: 0,
      changeFavoriteLoading: true,
      changeFavoriteError: 0
    }, ActionCreator.changeFavorite.success({}))).toEqual({
      addReviewLoading: false,
      addReviewError: 0,
      changeFavoriteLoading: false,
      changeFavoriteError: 0
    });
  });

  it(`Should handle failure of changeFavorite`, () => {
    expect(operations({
      addReviewLoading: false,
      addReviewError: 0,
      changeFavoriteLoading: true,
      changeFavoriteError: 0
    }, ActionCreator.changeFavorite.failure(401))).toEqual({
      addReviewLoading: false,
      addReviewError: 0,
      changeFavoriteLoading: false,
      changeFavoriteError: 401
    });
  });

  it(`Should handle reset of changeFavorite`, () => {
    expect(operations({
      addReviewLoading: true,
      addReviewError: 401,
      changeFavoriteLoading: true,
      changeFavoriteError: 401
    }, ActionCreator.changeFavorite.reset())).toEqual({
      addReviewLoading: true,
      addReviewError: 401,
      changeFavoriteLoading: false,
      changeFavoriteError: 0
    });
  });
});
