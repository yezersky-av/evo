import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import reduxThunk from 'redux-thunk';

import reducer from './reducer';

const config = {
    env: process.env.NODE_ENV || 'development',
    isDev: process.env.NODE_ENV !== 'production',
    isBrowser: typeof window !== 'undefined',
};

const devtools =
    config.isDev && config.isBrowser && window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__
        : () => fn => fn;

const configureStore = (initialState, services = {}) => {
    const enhancers = [
        applyMiddleware(
            reduxThunk,
            createLogger({
                diff: true,
                collapsed: true,
            }),
        ),
        devtools(),
    ];

    return createStore(reducer, initialState, compose(...enhancers));
};

export default configureStore;
