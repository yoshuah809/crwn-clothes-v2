import { useContext } from "react";
import { ProductCard } from "../../components/product-card/product-card.component";
import { ProductsContext } from "../../contexts/product.context";

import "./shop.styles.scss";

export const Shop = () => {
	const { products } = useContext(ProductsContext);
	return (
		<div className="products-container">
			{products.map(({ id, name, price, imageUrl }) => (
				<ProductCard key={id} name={name} price={price} imageUrl={imageUrl} />
			))}
		</div>
	);
};
