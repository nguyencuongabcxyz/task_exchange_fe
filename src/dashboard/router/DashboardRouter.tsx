import React from 'react';
import {
  Switch,
  Route,
  useRouteMatch,
} from 'react-router-dom';
import Dashboard from 'dashboard/pages/Dashboard/Dashboard';

export default function DashboardRouter() {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path}>
        <Dashboard />
      </Route>
    </Switch>
  );
}
