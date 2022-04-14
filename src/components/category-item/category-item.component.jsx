import "./category-item.styles.scss";

export const CategoryItem = ({ category }) => {
  const { title, imageUrl } = category;
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p style={{ color: "teal" }}>
          <strong>Shop Now</strong>
        </p>
      </div>
    </div>
  );
};

export default CategoryItem;
