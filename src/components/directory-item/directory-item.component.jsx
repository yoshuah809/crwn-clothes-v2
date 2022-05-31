import {
	BackgroundImage,
	Body,
	DirectoryItemContainer,
} from "./directory-item.styles.jsx";

export const DirectoryItem = ({ category }) => {
	const { title, imageUrl } = category;
	return (
		<DirectoryItemContainer>
			<BackgroundImage imageUrl={imageUrl} />
			<Body>
				<h2>{title}</h2>
				<p style={{ color: "teal" }}>
					<strong>Shop Now</strong>
				</p>
			</Body>
		</DirectoryItemContainer>
	);
};

export default DirectoryItem;
