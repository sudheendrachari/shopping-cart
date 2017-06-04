import React from 'react';
import * as styles from './style.scss'
export default class ItemComponent extends React.Component {
	constructor(props){
		super(props);
	}
	addToCart(id){
		this.props.addToCart(id);
	}
	render(){
		let itemData = this.props.data;
		let price = itemData.price,
			discount = itemData.discount,
			finalPrice = itemData.finalPrice,
			priceElem, bannerElem, badgeElem;
		priceElem = Number(discount) ? (<span><span className="original"> ${price}</span>   ${finalPrice}</span>) : (<span>${price}</span>);
		bannerElem = Number(discount) ? (<div className="banner"> {discount}% off</div>) : "";
		badgeElem = this.props.quantity ? (<div className="badge"> <span> {this.props.quantity } </span> </div>) : "";
		return (<div className="item">
			<div className="wrapper">
				{bannerElem}
				{badgeElem}
				<div className="img"></div>
			</div>
			<div className="details">
				<div className="name">{itemData.name}</div>
				<div className="other"> 
					<div className="price"> {priceElem}</div>
					<button className="add-to-cart" onClick={this.addToCart.bind(this,itemData.id)}> Add to Cart</button>
				</div>

			</div>
		</div>);
	}
}