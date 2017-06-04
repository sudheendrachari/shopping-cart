'use strict';

import React from 'react';
import { combineReducers } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
// reducers
import homePage from './homePage';

const combinedReducers = combineReducers({
  homePage,
  routing: routerReducer
});

export default combinedReducers;
