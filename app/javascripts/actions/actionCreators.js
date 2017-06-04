export function fetchData() {
	return function (dispatch, getState) {
		fetch('https://api.myjson.com/bins/qhnfp').then(function(response) {
			return response.json();
		}).then(function(response) {
			console.log(response);
			dispatch({
				type: 'fetch_data',
				data: response
			})
		})
	}
}
export function addToCart(id) {
	return {
		type: 'add_to_cart',
		data : {id}
	}
}
export function increaseQuantity(id) {
	return{
		type: 'increase_quantity',
		data: {id}
	}
}
export function decreaseQuantity(id) {
	return{
		type: 'decrease_quantity',
		data: {id}
	}
}
export function deleteItemFromCart(id) {
	return{
		type: 'delete_item_from_cart',
		data: {id}
	}
}