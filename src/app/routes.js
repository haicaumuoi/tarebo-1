import _ from 'lodash';
import { Fragment, lazy } from 'react';
import React, { Route, Routes } from 'react-router-dom';
import { ROLE, ROUTES_PATH, ROUTES_TYPE } from '~/constants';
import { DashboardLayout, DefaultLayout } from '~/layouts';

const AdStatisticPage = lazy(() => import('~/features/Admin/Home'));

const NotFoundPage = lazy(() => import('~/components/NotFound'));
const PrivateRoute = lazy(() => import('~/components/PrivateRoute'));
const LoginPage = lazy(() => import('~/features/User/Login'));
const SignUpPage = lazy(() => import('~/features/User/SignUp'));
const SignInPage = lazy(() => import('~/features/User/SignInPage'));
const Map = lazy(() => import('~/features/User/Map'));
const TripList = lazy(() => import('~/features/User/TripList'));
const PlanList = lazy(() => import('~/features/User/PlanList'));
const TodoList = lazy(() => import('~/features/User/TodoList'));
const ExpensesList = lazy(() => import('~/features/User/ExpensesList'));

const HomePage = lazy(() => import('~/features/User/Home'));

/**
 * @param {string} type để phân loại public với private
 * @param {string} path đường dẫn trong hệ thống
 * @param {React.Component} component component sẽ render
 * @param {React.Component} layout mặc định sẽ là DefaultLaout, nếu null sẽ không sử dụng layout, nếu có layout sẽ sử dụng layout đó
 */

const publicRoutes = {
  [ROLE.common]: [
    {
      type: ROUTES_TYPE.public,
      path: ROUTES_PATH.common.notFound,
      component: NotFoundPage,
      layout: null,
    },
    {
      type: ROUTES_TYPE.public,
      path: ROUTES_PATH.user.home,
      component: HomePage,
      layout: DefaultLayout,
    },
    {
      type: ROUTES_TYPE.public,
      path: ROUTES_PATH.common.login,
      component: LoginPage,
      layout: DefaultLayout,
    },
    {
      type: ROUTES_TYPE.public,
      path: ROUTES_PATH.common.signUp,
      component: SignUpPage,
      layout: DefaultLayout,
    },
    {
      type: ROUTES_TYPE.public,
      path: ROUTES_PATH.common.signIn,
      component: SignInPage,
      layout: DefaultLayout,
    },
    {
      type: ROUTES_TYPE.public,
      path: ROUTES_PATH.user.map,
      component: Map,
      layout: DefaultLayout,
    },
    {
      type: ROUTES_TYPE.public,
      path: ROUTES_PATH.user.planlist,
      component: PlanList,
      layout: DefaultLayout,
    },
    {
      type: ROUTES_TYPE.public,
      path: ROUTES_PATH.user.triplist,
      component: TripList,
      layout: DefaultLayout,
    },
    {
      type: ROUTES_TYPE.public,
      path: ROUTES_PATH.user.todolist,
      component: TodoList,
      layout: DefaultLayout,
    },
    {
      type: ROUTES_TYPE.public,
      path: ROUTES_PATH.user.expenseslist,
      component: ExpensesList,
      layout: DefaultLayout,
    },
  ],
  [ROLE.user]: [],
  [ROLE.admin]: [
    {
      type: ROUTES_TYPE.public,
      path: ROUTES_PATH.admin.home,
      component: AdStatisticPage,
    },
  ],
};

const privateRoutes = {
  [ROLE.common]: [],
  [ROLE.user]: [],
  [ROLE.admin]: [],
};

const ROUTES = _.mergeWith(publicRoutes, privateRoutes, (objValue, srcValue) => {
  if (_.isArray(objValue)) {
    return objValue.concat(srcValue);
  }
});

export const MainRouter = ({ ...passProps }) => (
  <Routes {...passProps}>
    {[...ROUTES[ROLE.user], ...ROUTES[ROLE.common]].map(
      ({ component, layout, path, type }, idx) => {
        const Page = component;
        let Layout = DefaultLayout;
        let WrapperComp = type === ROUTES_TYPE.private ? PrivateRoute : Fragment;

        if (layout === null) Layout = Fragment;
        else if (layout) Layout = layout;

        return (
          <Route
            key={idx}
            path={path}
            element={
              <WrapperComp>
                <Layout>
                  <Page />
                </Layout>
              </WrapperComp>
            }
          />
        );
      }
    )}
  </Routes>
);

export const AdminRouter = ({ ...passProps }) => (
  <Routes {...passProps}>
    {[...ROUTES[ROLE.admin], ...ROUTES[ROLE.common]].map(
      ({ component, layout, path, type }, idx) => {
        const Page = component;
        let Layout = DashboardLayout;
        let WrapperComp = type === ROUTES_TYPE.private ? PrivateRoute : Fragment;

        if (layout === null) Layout = Fragment;
        else if (layout) Layout = layout;

        return (
          <Route
            key={idx}
            path={path}
            element={
              <WrapperComp>
                <Layout>
                  <Page />
                </Layout>
              </WrapperComp>
            }
          />
        );
      }
    )}
  </Routes>
);

export const AppRoutes = [
  { subDomain: '', router: MainRouter, main: true },
  { subDomain: 'admin', router: AdminRouter, main: false },
];
