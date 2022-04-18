import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.scss";
import { BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from "./contexts/user.context";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
	<UserProvider>
		<StrictMode>
			<Router>
				<App />
			</Router>
		</StrictMode>
	</UserProvider>
);
