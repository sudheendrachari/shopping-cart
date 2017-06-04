import React from 'react';
import {Link} from 'react-router';
import ItemComponent from '@components/ItemComponent';
import * as styles from './style.scss';
export default class ListingComponent extends React.Component {
	constructor(props){
		super(props);
		if (!Object.keys(props.data).length) {
			props.fetchData();
		}
		
	}
	showNotification(key){
		let item = this.props.data[key];

	}
	addToCart(key){
		this.props.addToCart(key);
		this.showNotification(key)
	}
	render(){
		var items = [], cartCount = 0;
		if(Object.keys(this.props.data).length){
			items = Object.keys(this.props.data).map((key) => {
				return <ItemComponent 
						data={this.props.data[key]} 
						key={key} 
						addToCart = {this.addToCart.bind(this,key)}
						quantity = {this.props.cart[key]}
						></ItemComponent>
			})
		}
		if (Object.keys(this.props.cart).length) {
			cartCount = Object.keys(this.props.cart).reduce((left,right) => {
				return left + this.props.cart[right];
			},0);	
		}
		let btnElem =  cartCount ? (<button>  <Link to="cart"> Go to Cart  </Link> <div className="cart-count">{cartCount}</div> </button>) : ""
		return (<div className="listing">
			<div className="header">
				<p> All Items </p>
				{btnElem}
			</div>
			{items}
			<div id="notification">

			</div>
		</div>);
	}
}