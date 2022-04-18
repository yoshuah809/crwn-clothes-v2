import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import { Shop } from "./routes/shop/shop.component";
import { Autentication } from "./routes/authentication/authentication.component";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Navigation />}>
				<Route index="/" element={<Home />} />
				<Route path="/shop" element={<Shop />} />
				<Route path="/auth" element={<Autentication />} />
			</Route>
		</Routes>
	);
};

export default App;
