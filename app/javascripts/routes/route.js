import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
// components
import App from '@containers/AppContainer';
import Cart from '@containers/CartContainer';

import style from '../../styles/sass/main.scss';
export function getRoutes(history){
let basicRoutes =
  <Router history={history}>
   <Route path="/" component={App}>

    </Route>
    <Route path="/cart" component={Cart}></Route>
  </Router>
  return basicRoutes;
}
export default getRoutes;
