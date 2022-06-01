import Button from "../button/button.component";
import { CartItem } from "../cart-item/cart-item.component";

import "./cart-dropdown.styles";

import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
	CartDropdownContainer,
	EmptyMessage,
	CartItemContainer,
} from "./cart-dropdown.styles";

export const CartDropdown = () => {
	const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext);
	const navigate = useNavigate();

	const goToCheckoutHandler = () => {
		navigate("/checkout");
		setIsCartOpen(!isCartOpen);
	};

	return (
		<CartDropdownContainer>
			<CartItemContainer>
				{cartItems.length ? (
					cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
				) : (
					<EmptyMessage>Your Cart is Empty</EmptyMessage>
				)}
			</CartItemContainer>
			<Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
		</CartDropdownContainer>
	);
};
