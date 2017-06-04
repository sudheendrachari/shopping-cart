'use strict';

import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import * as actionCreators from '@actions/actionCreators';
import ListingComponent from '@components/ListingComponent';

import { push } from 'react-router-redux';
class App extends Component {
  constructor(props) {
    super(props);

  }
  componentWillReceiveProps(props){


  }
  componentDidMount() {

  }

  render () {

    return (
      <div>
        <ListingComponent 
          fetchData={this.props.fetchData} 
          data = {this.props.homePage.items}
          addToCart = {this.props.addToCart}
          cart = {this.props.homePage.cart}
          ></ListingComponent>
      </div>
    )
  }
}

function mapStateToProps(state,ownProps){
  return state;
}

function mapDispatchToProps(dispatch,ownProps) {

  return {
    fetchData : () =>  dispatch(actionCreators.fetchData()),
    addToCart : (id) => dispatch(actionCreators.addToCart(id))
   }
 }
export default connect(mapStateToProps,mapDispatchToProps)(App)
