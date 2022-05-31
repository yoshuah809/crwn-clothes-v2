import "./category.styles.jsx";
import { useParams } from "react-router-dom";
import { useContext, useState, useEffect, Fragment } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import { ProductCard } from "../../components/product-card/product-card.component";
import {
	CollectionPreview,
	PreviewContainer,
	TitleContainer,
} from "./category.styles.jsx";

export const Category = () => {
	const { category } = useParams();
	const { categoriesMap } = useContext(CategoriesContext);
	const [products, setProducts] = useState(categoriesMap[category]);

	useEffect(() => {
		setProducts(categoriesMap[category]);
	}, [category, categoriesMap]);

	return (
		<CollectionPreview>
			<TitleContainer>{category.toUpperCase()}</TitleContainer>
			<PreviewContainer>
				{products &&
					products.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
			</PreviewContainer>
		</CollectionPreview>
	);
};
