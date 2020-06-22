import React from 'react';
import MainRouter from 'shared/router/MainRouter';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'shared/redux/store';
import { CssBaseline } from '@material-ui/core';

function App() {
    return (
        <Provider store={store}>
            <Router>
                <CssBaseline />
                <MainRouter />
            </Router>
        </Provider>
    );
}

export default App;
