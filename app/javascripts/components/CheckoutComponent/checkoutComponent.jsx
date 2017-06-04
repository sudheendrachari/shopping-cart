import React from 'react';
import {Link} from 'react-router';
import TotalComponent from '@components/TotalComponent';
import OrderComponent from '@components/OrderComponent'
import * as styles from './style.scss';
export default class CheckoutComponent extends React.Component {
	render(){
		return (<div className="listing">
			<div className="header">
				<p> Order Summary</p>
				<button>  <Link to="/"> Go Back </Link></button>
			</div>
			<OrderComponent 
			cart={this.props.cart} 
			items={this.props.items} 
			increaseQuantity = {this.props.increaseQuantity}
			decreaseQuantity = {this.props.decreaseQuantity}
			deleteItemFromCart = {this.props.deleteItemFromCart}
			goBack = {this.props.goBack}
			></OrderComponent>
			<TotalComponent 
			cart={this.props.cart} 
			items={this.props.items}></TotalComponent>
		</div>);
	}
}