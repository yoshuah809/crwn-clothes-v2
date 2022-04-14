import CategoryItem from "../category-item/category-item.component.jsx";
import { categories } from "./categories.js";
import "./directory.styles.scss";

const Directory = () => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
