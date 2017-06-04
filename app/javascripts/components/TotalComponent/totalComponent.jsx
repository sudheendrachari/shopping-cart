import React from 'react';
import * as styles from './style.scss'
export default class TotalComponent extends React.Component {
	render(){
		let totalItems = Object.keys(this.props.cart).reduce((left,right) => {
			return {
				count: left.count + this.props.cart[right],
				value: left.value + this.props.cart[right] * this.props.items[right].price,
				discount: left.discount + this.props.cart[right] * this.props.items[right].discountValue,
				amount: left.amount + this.props.cart[right] * this.props.items[right].finalPrice,
				typeDiscount: left.typeDiscount + (this.props.items[right].type == 'fiction' ? (this.props.cart[right] * this.props.items[right].finalPrice * 0.15): 0)
			};
		},{ count: 0, amount: 0, value: 0, discount: 0, typeDiscount: 0});
		let typeDiscountElem = totalItems.typeDiscount ? (
				<div className="row">
					<div className="name">Type Discount</div>
					<div className="seperator"> : </div>
					<div className="amount"> - ${totalItems.typeDiscount}</div>
				</div>) : "";
		let cartPrice = totalItems.amount - totalItems.typeDiscount;
		return (<div className="summary">
				<p>Total</p>
				<div className="row">
					<div className="name">Items ({totalItems.count})</div>
					<div className="seperator"> : </div>
					<div className="amount"> ${totalItems.value}</div>
				</div>
				<div className="row">
					<div className="name">Discount</div>
					<div className="seperator"> : </div>
					<div className="amount"> - ${totalItems.discount}</div>
				</div>
				{typeDiscountElem}
				<div className="row total">
					<div className="name">Order Total</div>
					<div className="seperator"> </div>
					<div className="amount"> ${cartPrice}</div>
				</div>
		</div>);
	}
}