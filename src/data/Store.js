import { combineReducers, createStore, 
    applyMiddleware }       from 'redux'

/* Reducers */
import AppReducer, { defaultState as AppDefaults } 
                            from './app/App.reducer'
import DashboardReducer, { defaultState as DashboardDefaults } 
                            from './dashboard/Dashboard.reducer'

const rootReducer = combineReducers({
    app: AppReducer,
    dashboard: DashboardReducer
    //TODO: add routerReducer
    //routing: routerReducer
});

const defaultState = {
    app: AppDefaults,
    dashboard: DashboardDefaults
};

/* Observable Epix */
import { combineEpics, createEpicMiddleware } from 'redux-observable';

import * as AppEpics    from './App.epics'
export const rootEpic = combineEpics(
    ...AppEpics
);
epicMiddleware = createEpicMiddleware(rootEpic);

/* Middleware */
const middleware = applyMiddleware(epicMiddleware);

const Store = typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function'
    ? createStore(rootReducer, defaultState, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(middleware))
    : createStore(rootReducer, defaultState, middleware);

/* Router History */
import createBrowserHistory from 'history/createBrowserHistory'
//TODO: connect history with redux store
//import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
//export const history = syncHistoryWithStore(browserHistory, Store)
export const history = createBrowserHistory();

export default Store;