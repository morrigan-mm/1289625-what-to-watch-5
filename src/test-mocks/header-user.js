import {AuthorizationStatus} from "../constants";

export const headerUserAuthorized = {
  authorizationStatus: AuthorizationStatus.AUTH,
  avatar: `#`
};
export const headerUserUnauthorized = {
  authorizationStatus: AuthorizationStatus.NO_AUTH
};
