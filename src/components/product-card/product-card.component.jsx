import "./product-card.styles.scss";
import Button from "../button/button.component";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

export const ProductCard = ({ product }) => {
	const { name, price, imageUrl } = product;
	const { addItemtoCart } = useContext(CartContext);

	return (
		<div className="product-card-container">
			<img src={imageUrl} alt={`${name}`} />
			<div className="footer">
				<span className="name">{name}</span>
				<span className="price">{price}</span>
			</div>
			<Button onClick={() => addItemtoCart(product)} buttonType="inverted">
				Add to Cart
			</Button>
		</div>
	);
};
