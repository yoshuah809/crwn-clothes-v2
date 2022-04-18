import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import "./navigation.styles.scss";
import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
	const { currentUser } = useContext(UserContext);

	return (
		<Fragment>
			<div className="navigation">
				<Link className="logo-container" to="/">
					<i className="fas fa-crown"></i>
				</Link>
				<div className="nav-links-container">
					<Link className="nav-link" to="/shop">
						SHOP
					</Link>
					{currentUser ? (
						<span className="nav-link" onClick={signOutUser}>
							SIGN OUT
						</span>
					) : (
						<Link className="nav-link" to="/auth">
							SIGN IN
						</Link>
					)}
				</div>
			</div>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;
