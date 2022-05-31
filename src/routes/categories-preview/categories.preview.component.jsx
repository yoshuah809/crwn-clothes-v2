import { useContext, Fragment } from "react";
import { CategoryPreview } from "../../components/category-preview/category-preview.component";
import { ProductCard } from "../../components/product-card/product-card.component";
import { CategoriesContext } from "../../contexts/categories.context";

import "./categories-preview.styles.jsx";

export const CategoriesPreview = () => {
	const { categoriesMap } = useContext(CategoriesContext);
	return (
		<Fragment>
			{Object.keys(categoriesMap).map((title) => {
				const products = categoriesMap[title];
				return (
					<CategoryPreview key={title} title={title} products={products} />
				);
			})}
		</Fragment>
	);
};
