export const HttpCode = {
  UNAUTHORIZED: 401
};

export const StoreKey = {
  DATA: `data`,
  OPERATIONS: `operations`,
  STATE: `state`,
  USER: `user`
};

export const PageMovieTab = {
  OVERVIEW: `overview`,
  DETAILS: `details`,
  REVIEWS: `reviews`
};

export const PageType = {
  MOVIE_CARD: `movie-card`,
  USER_PAGE: `user-page`
};

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const MyListMovieStatus = {
  ADD: 1,
  DELETE: 0
};

export const AppRoute = {
  ADD_REVIEW: {
    pattern: `/films/:id/review`,
    url: ({id}) => `/films/${id}/review`
  },
  FILM: {
    pattern: `/films/:id`,
    url: ({id}) => `/films/${id}`
  },
  FILM_TAB: {
    pattern: `/films/:id/:tab`,
    url: ({id, tab}) => `/films/${id || `:id`}/${tab || `:tab`}`
  },
  FILMS: {
    pattern: `/films`,
    url: () => `/films`
  },
  LOGIN: {
    pattern: `/login`,
    url: () => `/login`
  },
  MY_LIST: {
    pattern: `/mylist`,
    url: () => `/mylist`
  },
  PLAYER: {
    pattern: `/player/:id`,
    url: ({id}) => `/player/${id}`
  },
  ROOT: {
    pattern: `/`,
    url: () => `/`
  }
};

export const APIRoute = {
  FILMS: {
    url: () => `/films`
  },
  PROMO: {
    url: () => `/films/promo`
  },
  REVIEWS: {
    url: ({id}) => `/comments/${id}`
  },
  LOGIN: {
    url: () => `/login`
  },
  FAVORITE: {
    url: ({id, status}) => `/favorite/${id}/${status}`
  }
};
