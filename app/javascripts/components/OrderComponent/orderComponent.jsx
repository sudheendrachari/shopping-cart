import React from 'react';
import OrderItemComponent from '@components/OrderItemComponent'
import * as styles from './style.scss'
export default class OrderComponent extends React.Component {
	render(){
		let totalItemsCount = Object.keys(this.props.cart).reduce((left,right) => {
			return left + this.props.cart[right];
		},0);
		if (!totalItemsCount) {
			this.props.goBack();
		}
		let orderItems = "";
		if (this.props.cart) {
			orderItems =  Object.keys(this.props.cart).map((key) => {
				if(this.props.cart[key]){
					return <OrderItemComponent 
							key={key} 
							orderItem={this.props.items[key]} 
							quantity={this.props.cart[key]} 
							increaseQuantity = {this.props.increaseQuantity}
							decreaseQuantity = {this.props.decreaseQuantity}
							deleteItemFromCart = {this.props.deleteItemFromCart}
							></OrderItemComponent>
				}
			})
		}
		return (<div className="order">
			{orderItems}
		</div>);
	}
}