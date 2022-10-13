import React from 'react';
import { Switch, Route, withRouter } from 'react-router';
import { map } from 'lodash';

import { hasToken } from '../../utils/helpers';
import DashboardLayout from '../../layouts/DashboardLayout';

const AppRouter = (props) => {
    const renderRoute = (route) => {
      const RouteComponent = route.component;
      if (route.layout) {
        return (
          <DashboardLayout>
            <RouteComponent />
          </DashboardLayout>
        );
      }
      return <RouteComponent />;
    }
    const { routes, history } = props;
    const isAuthenticated = hasToken();

    return (
      <Switch>
        {map(routes, (route, key) => (
          <Route
            key={key}
            path={route.path}
            exact={route.exact}
            render={() => {
              if (route.requiredAuth && !isAuthenticated) {
                return history.push('/signup');
              }

              if (route.restricted && isAuthenticated) {
                return history.push('/');
              }

              return renderRoute(route);
            }}
          />
        ))}
      </Switch>
    );
}

export default withRouter(AppRouter);
