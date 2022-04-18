import { updateCurrentUser } from "firebase/auth";
import { createContext } from "react";
import { useState } from "react/cjs/react.production.min";

export const UserContext = createContext({
	currentUser: null,
	setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const value = { currentUser, setCurrentUser };
	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};