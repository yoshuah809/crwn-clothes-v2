import { useContext, Fragment } from "react";
import { CategoryPreview } from "../../components/category-preview/category-preview.component";
import { ProductCard } from "../../components/product-card/product-card.component";
import { CategoriesContext } from "../../contexts/categories.context";

import "./shop.styles.scss";

export const Shop = () => {
	const { categoriesMap } = useContext(CategoriesContext);
	return (
		<div className="shop-container">
			{Object.keys(categoriesMap).map((title) => {
				const products = categoriesMap[title];
				return (
					<CategoryPreview key={title} title={title} products={products} />
				);
			})}
		</div>
	);
};
