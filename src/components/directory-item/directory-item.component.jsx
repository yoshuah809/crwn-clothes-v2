import "./directory-item.styles.scss";

export const DirectoryItem = ({ category }) => {
	const { title, imageUrl } = category;
	return (
		<div className="directory-item-container">
			<div
				className="background-image"
				style={{ backgroundImage: `url(${imageUrl})` }}
			/>
			<div className="body">
				<h2>{title}</h2>
				<p style={{ color: "teal" }}>
					<strong>Shop Now</strong>
				</p>
			</div>
		</div>
	);
};

export default DirectoryItem;
