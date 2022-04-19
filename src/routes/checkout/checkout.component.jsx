import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

export const Checkout = () => {
	const { cartItems, addItemtoCart, removeItemFromCart } =
		useContext(CartContext);

	return (
		<div>
			<h1> Checkout Page </h1>
			<div>
				{cartItems.map((item) => {
					const { id, name, quantity } = item;
					return (
						<div key={id}>
							<h2>{name}</h2>
							<span onClick={() => removeItemFromCart(item)}> - </span>
							<span>{quantity}</span>
							<span onClick={() => addItemtoCart(item)}> + </span>
						</div>
					);
				})}
			</div>
		</div>
	);
};
