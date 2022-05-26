import Button from "../button/button.component";
import { CartItem } from "../cart-item/cart-item.component";

import "./cart-dropdown.styles";

import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartDropdownContainer, EmptyMessage } from "./cart-dropdown.styles";

export const CartDropdown = () => {
	const { cartItems } = useContext(CartContext);
	const navigate = useNavigate();

	const goToCheckoutHandler = () => {
		navigate("/checkout");
	};

	return (
		<CartDropdownContainer>
			<cartItems>
				{cartItems.length ? (
					cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
				) : (
					<EmptyMessage>Your Cart is Empty</EmptyMessage>
				)}
			</cartItems>
			<Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
		</CartDropdownContainer>
	);
};
