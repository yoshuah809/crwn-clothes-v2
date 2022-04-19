import Button from "../button/button.component";
import { CartItem } from "../cart-item/cart-item.component";

import "./cart-dropdown.styles.scss";

import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export const CartDropdown = () => {
	const { cartItems } = useContext(CartContext);
	const navigate = useNavigate();

	const goToCheckoutHandler = () => {
		navigate("/checkout");
	};

	return (
		<div className="cart-dropdown-container">
			<div className="cart-items">
				{cartItems.map((item) => (
					<CartItem key={item.id} cartItem={item} />
				))}
			</div>
			<Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
		</div>
	);
};
