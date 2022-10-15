//#region routes variables
export const ROUTES_TYPE = {
  public: 0,
  private: 1,
};

export const ROUTES_PATH = {
  common: {
    notFound: '*',
    login: '/login',
    signUp: '/signUp',
  },
  user: {
    home: '/',
    planning: '/planning',
    reviewing: '/reviewing',
    type: '/:type',
  },
  admin: {
    home: '/home',
  },
};

export const ROLE = {
  common: 'common',
  user: 'user',
  admin: 'admin',
};

export const COLOR_MODE_TYPE = {
  code: 'color',
  dark: 'dark',
  light: 'light',
};

export const HOME_FEATURES = {
  news: 'news',
  reviewing: 'reviewing',
};

export const LOGOUT_TYPE = 'logout';

//#endregion
