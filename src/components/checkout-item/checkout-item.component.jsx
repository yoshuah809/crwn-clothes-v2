import React from "react";
import "./checkout-item.styles.scss";

const CheckoutIitem = ({ cartItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;
	return (
		<div className="checkout-item-container">
			<div className="image-container">
				<img src={imageUrl} alt={`${name}`}></img>
			</div>
			<span className="name">{name}</span>
			<span className="quantity">{quantity}</span>
			<span className="price">{price}</span>
			<div className="remove-button">&#10005;</div>
		</div>
	);
};

export default CheckoutIitem;
