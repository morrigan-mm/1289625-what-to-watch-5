import {AuthorizationStatus} from "../../../constants";
import {unknownAction} from "../../../test-mocks/actions";
import {user} from "./user";
import {ActionCreator} from "../../action";

describe(`USER reducer`, () => {
  it(`Should return default state`, () => {
    expect(user(undefined, unknownAction)).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      info: null
    });
  });

  it(`Should handle authorize with info`, () => {
    const fakeInfo = {fake: true};

    expect(user({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      info: null
    }, ActionCreator.authorize(fakeInfo))).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
      info: fakeInfo
    });
  });

  it(`Should handle authorize with error`, () => {
    expect(user({
      authorizationStatus: AuthorizationStatus.AUTH,
      info: {fake: true}
    }, ActionCreator.authorize(null, 401))).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      errorCode: 401,
      info: null
    });
  });
});
