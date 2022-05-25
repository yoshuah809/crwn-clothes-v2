import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.scss";
import { BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from "./contexts/user.context";
import { CategoriesProvider } from "./contexts/categories.context";
import { CartProvider } from "./contexts/cart.context";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
	<StrictMode>
		<Router>
			<UserProvider>
				<CategoriesProvider>
					<CartProvider>
						<App />
					</CartProvider>
				</CategoriesProvider>
			</UserProvider>
		</Router>
	</StrictMode>
);
