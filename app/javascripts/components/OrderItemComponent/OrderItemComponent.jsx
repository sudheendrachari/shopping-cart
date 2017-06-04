import React from 'react';
import * as styles from './style.scss'
export default class OrderItemComponent extends React.Component {
	constructor(props){
		super(props);
	}
	increaseQuantity(key){
		this.props.increaseQuantity(key);
	}
	decreaseQuantity(key){
		this.props.decreaseQuantity(key);
	}
	deleteItemFromCart(key){
		this.props.deleteItemFromCart(key);
	}
	render(){
		let quantity = this.props.quantity,
			price = this.props.orderItem.finalPrice * this.props.quantity,
			name = this.props.orderItem.name,
			src = this.props.orderItem.img_url,
			key = this.props.orderItem.id;
		return (<div className="order-item">
			<div className="cart-item-row">
			    <div className="cart-item">
			    	<img src={src}/>
			        <div className="cart-item-text"> {name} </div>
			    </div>
			    <div className="remove" onClick={this.deleteItemFromCart.bind(this, key)}>
			    X
			    </div>
			</div>
			<div className="quantity">
				<div className="dec" onClick={this.decreaseQuantity.bind(this, key)}> - </div>
				<div className="number"> {quantity} </div>
				<div className="inc" onClick={this.increaseQuantity.bind(this, key)}> + </div>
			</div>
			<div className="item-price"> ${price} </div>
		</div>);
	}
}