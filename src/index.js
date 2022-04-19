import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.scss";
import { BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from "./contexts/user.context";
import { ProductProvider } from "./contexts/product.context";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
	<StrictMode>
		<Router>
			<UserProvider>
				<ProductProvider>
					<App />
				</ProductProvider>
			</UserProvider>
		</Router>
	</StrictMode>
);
