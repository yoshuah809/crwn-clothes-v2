import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import { Shop } from "./routes/shop/shop.component";
import { Autentication } from "./routes/authentication/authentication.component";
import { Checkout } from "./routes/checkout/checkout.component";
import { GlobalStyle } from "./global.styles";

const App = () => {
	return (
		<div>
			<GlobalStyle />
			<Routes>
				<Route path="/" element={<Navigation />}>
					<Route index="/" element={<Home />} />
					<Route path="shop/*" element={<Shop />} />
					<Route path="auth" element={<Autentication />} />
					<Route path="checkout" element={<Checkout />} />
				</Route>
			</Routes>
		</div>
	);
};

export default App;
