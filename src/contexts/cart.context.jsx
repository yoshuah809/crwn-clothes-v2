import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
	isCartOpen: false,
	setIsCartOpen: () => {},
	cartItems: [],
	addItemtoCart: () => {},
	removeItemFromCart: () => {},
	clearItemFromCart: () => {},
	cartCount: 0,
	cartTotal: 0,
});

const addCartItem = (cartItems, productToAdd) => {
	//find if carItem already exists in array
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === productToAdd.id
	);

	//if found incremnt quantity
	if (existingCartItem) {
		return cartItems.map((cartItem) =>
			cartItem.id === productToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	}

	return [...cartItems, { ...productToAdd, quantity: 1 }]; //Return array with new cartitem / new cart item
};

const removeCartItem = (cartItems, productToRemove) => {
	//find if carItem already exists in array
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === productToRemove.id
	);

	//if quantity is equal to zero, remove item from array
	if (existingCartItem.quantity === 1) {
		return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
	}

	//if found incremnt quantity
	if (existingCartItem) {
		return cartItems.map((cartItem) =>
			cartItem.id === productToRemove.id
				? { ...cartItem, quantity: cartItem.quantity - 1 }
				: cartItem
		);
	}
};

const clearCartItem = (cartItems, CartItemToRemove) => {
	return cartItems.filter((cartItem) => cartItem.id !== CartItemToRemove.id);
};

export const CartProvider = ({ children }) => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cartCount, setCartCount] = useState(0);
	const [cartTotal, setCartTotal] = useState(0);

	const [cartItems, setCartItems] = useState([]);

	useEffect(() => {
		const newCartCount = cartItems.reduce(
			(total, cartITem) => total + cartITem.quantity,
			0
		);
		setCartCount(newCartCount);
	}, [cartItems]);

	useEffect(() => {
		const newCartTotal = cartItems.reduce(
			(total, cartItem) => total + cartItem.price * cartItem.quantity,
			0
		);
		setCartTotal(newCartTotal);
	}, [cartItems]);

	const addItemtoCart = (productToAdd) => {
		setCartItems(addCartItem(cartItems, productToAdd));
	};

	const removeItemFromCart = (productToRemove) => {
		setCartItems(removeCartItem(cartItems, productToRemove));
	};
	const clearItemFromCart = (cartItemToClear) => {
		setCartItems(clearCartItem(cartItems, cartItemToClear));
	};

	const value = {
		isCartOpen,
		setIsCartOpen,
		addItemtoCart,
		cartItems,
		cartCount,
		removeItemFromCart,
		clearItemFromCart,
		cartTotal,
	};

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
