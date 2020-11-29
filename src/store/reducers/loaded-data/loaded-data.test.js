import {unknownAction} from "../../../test-mocks/actions";
import film from "../../../test-mocks/film";
import reviews from "../../../test-mocks/reviews";
import {extend} from "../../../utils";
import {ActionCreator} from "../../action";
import {loadedData} from "./loaded-data";

const filmMocks = Array(2).fill(film).map((filmItem, i) => extend(filmItem, {id: i}));

describe(`DATA reducer`, () => {
  it(`Should return default state`, () => {
    expect(loadedData(undefined, unknownAction)).toEqual({
      films: [],
      promo: null,
      reviews: {}
    });
  });

  it(`Should handle loadMovies`, () => {
    expect(loadedData({
      films: [],
      promo: null,
      reviews: {}
    }, ActionCreator.loadMovies(filmMocks))).toEqual({
      films: filmMocks,
      promo: null,
      reviews: {}
    });
  });

  it(`Should handle success of changeFavorite`, () => {
    const beforeUpdate = filmMocks[1];

    const afterUpdate = extend(beforeUpdate, {
      addedToMyList: !beforeUpdate.addedToMyList
    });

    expect(loadedData({
      films: filmMocks,
      promo: beforeUpdate,
      reviews: {}
    }, ActionCreator.changeFavorite.success(afterUpdate))).toEqual({
      films: [
        filmMocks[0],
        afterUpdate,
      ],
      promo: afterUpdate,
      reviews: {}
    });
  });

  it(`Should handle loadPromoMovie`, () => {
    expect(loadedData({
      films: [],
      promo: null,
      reviews: {}
    }, ActionCreator.loadPromoMovie(film))).toEqual({
      films: [],
      promo: film,
      reviews: {}
    });
  });

  it(`Should handle loadMovieReviews`, () => {
    expect(loadedData({
      films: [],
      promo: null,
      reviews: {}
    }, ActionCreator.loadMovieReviews(1234, reviews))).toEqual({
      films: [],
      promo: null,
      reviews: {
        1234: reviews,
      }
    });
  });

  it(`Should handle success of addReview`, () => {
    expect(loadedData({
      films: [],
      promo: null,
      reviews: {}
    }, ActionCreator.addReview.success(1234, reviews))).toEqual({
      films: [],
      promo: null,
      reviews: {
        1234: reviews,
      }
    });
  });
});
