'use strict';

import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '@actions/actionCreators';
import CheckoutComponent from '@components/CheckoutComponent';

import { push } from 'react-router-redux';
class Cart extends Component {
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
      <CheckoutComponent 
      cart={this.props.homePage.cart} 
      items={this.props.homePage.items}
      increaseQuantity = {this.props.increaseQuantity}
      decreaseQuantity = {this.props.decreaseQuantity}
      deleteItemFromCart = {this.props.deleteItemFromCart}
      goBack = {this.props.goBack}
      > </CheckoutComponent>
      </div>
    )
  }
}

function mapStateToProps(state,ownProps){
  return state;
}

function mapDispatchToProps(dispatch,ownProps) {

  return {
    increaseQuantity : (key) => dispatch(actionCreators.increaseQuantity(key)),
    decreaseQuantity : (key) => dispatch(actionCreators.decreaseQuantity(key)),
    deleteItemFromCart: (key) => dispatch(actionCreators.deleteItemFromCart(key)),
    goBack : () => dispatch(push("/"))
   }
 }
export default connect(mapStateToProps,mapDispatchToProps)(Cart)
