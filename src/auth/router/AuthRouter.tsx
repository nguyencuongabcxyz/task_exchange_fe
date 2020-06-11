import React from 'react';
import {
  Switch,
  Route,
  useRouteMatch,
} from 'react-router-dom';
import Login from 'auth/pages/Login/Login';
import SignUp from 'auth/pages/SignUp/SignUp';

export default function AuthRouter() {
  let { path } = useRouteMatch();

  // strip trailing slashes
  path = path.replace(/\/$/, '');
  return (
    <Switch>
      <Route exact path={`${path}/`}>
        <Login />
      </Route>
      <Route path={`${path}/sign-up`}>
        <SignUp />
      </Route>
    </Switch>
  );
}
