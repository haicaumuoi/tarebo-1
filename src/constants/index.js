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
    signIn: '/signIn',
  },
  user: {
    home: '/',
    planning: '/planning',
    reviewing: '/reviewing',
    type: '/:type',
    map: '/map',
    triplist: '/triplist',
    todolist: '/todolist',
    expenseslist: '/expenseslist',
    planlist: '/planlist',
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
export const EMAIL_PASSWORD_REGEX_FULL =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const PASSWORD_REGEX_FULL =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
//#endregion
export const PHONE_REGEX_FULL = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
//#endregion

export const API_PATH = {
  auth: {
    login: '/auth/signin',
    signup: '/auth/signup',
  },
};
