import React from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';
import AuthRouter from 'auth/router/AuthRouter';
import DashboardRouter from 'dashboard/router/DashboardRouter';

export default function MainRouter () {
    return (
        <Switch>
            <Route path="/dashboard">
                <DashboardRouter />
            </Route>
            <Route path="/">
                <AuthRouter />
            </Route>
        </Switch>
    );
}