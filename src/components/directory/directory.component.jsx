import DirectoryItem from "../directory-item/directory-item.component.jsx";
import { categories } from "./categories.js";
import "./directory.styles.jsx";
import { DirectoryContainer } from "./directory.styles.jsx";

const Directory = () => {
	return (
		<DirectoryContainer>
			{categories.map((category) => (
				<DirectoryItem key={category.id} category={category} />
			))}
		</DirectoryContainer>
	);
};

export default Directory;
