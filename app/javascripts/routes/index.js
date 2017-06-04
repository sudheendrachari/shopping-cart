import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import getRoutes from './route';
import configureStore from '@store/configureStore';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store,{adjustUrlOnReplay:false})

render((
  <Provider store={store}>
  {getRoutes(history)}
  </Provider>
  ),
  document.querySelector('#root')
);
export default store;
