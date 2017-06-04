'use strict';

import * as actionTypes from '../actions/actionCreators';
let deepFreeze = require('deep-freeze');
const initialState = deepFreeze({
    items: {},
    cart:{}
  });
function manipulateItems(itemsArray) {
  let obj = {};
  itemsArray.forEach(function(item) {
    item.discountValue = item.price * item.discount / 100;
    item.finalPrice = item.price * (1- (item.discount/100))
    obj[item.id] = item;
  })
  return obj;
}
function addToCart(cart, data) {
  return Object.assign({}, cart, {
    [data.id] : (cart[data.id] || 0) + 1
  })
}
function removeFromCart(cart, data) {
  return Object.assign({}, cart, {
    [data.id] : cart[data.id] - 1
  })
}
function deleteItemFromCart(cart, data) {
  return Object.assign({}, cart, {
    [data.id] : 0
  })
}
export default function content(state = initialState, action) {
  switch ( action.type ) {
    case 'fetch_data':
      return deepFreeze(Object.assign({},state,{
        items: manipulateItems(action.data)
      }));
    case 'add_to_cart':
      return deepFreeze(Object.assign({},state,{
        cart: addToCart(state.cart, action.data)
      }));
    case 'increase_quantity':
      return deepFreeze(Object.assign({},state,{
        cart: addToCart(state.cart, action.data)
      }));
    case 'decrease_quantity':
      return deepFreeze(Object.assign({},state,{
        cart: removeFromCart(state.cart, action.data)
      }));
    case 'delete_item_from_cart':
      return deepFreeze(Object.assign({},state,{
        cart: deleteItemFromCart(state.cart, action.data)
      }));
    default:
      return state;
    }
};
