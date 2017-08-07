import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux'

import reducers from './reducers';
import history from './History';

const middleware = applyMiddleware(thunk, routerMiddleware(history));

export default createStore(reducers, middleware);