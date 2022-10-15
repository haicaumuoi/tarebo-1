//#region routes variables
export const ROUTES_TYPE = {
  public: 0,
  private: 1,
};

export const ROUTES_PATH = {
  common: {
    home: '/',
    notFound: '*',
    login: '/login',
    signUp: '/signUp',
  },
  user: {},
  admin: {
    home: '/home',
  },
};

export const ROLE = {
  common: 'common',
  user: 'user',
  admin: 'admin',
};
//#endregion
