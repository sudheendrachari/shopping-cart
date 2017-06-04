'use strict';

import React from 'react';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { routerMiddleware, push } from 'react-router-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import thunk from 'redux-thunk';
import * as localStorage from './localStorage';

import reducers from '../reducers/index';
const middleware = routerMiddleware(browserHistory)
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const persistedState = localStorage.loadState();

export default function configureStore(initialState) {
 	let composeObj = compose(applyMiddleware(middleware))

  const store = createStoreWithMiddleware(reducers,
    persistedState,
    composeObj
  );
  store.subscribe(() =>{
  	localStorage.saveState(store.getState())
  })
  return store;
}

