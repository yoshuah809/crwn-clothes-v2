import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
	auth,
	signInWithGooglePopup,
	createUserDocumentFromAuth,
	signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";

export const SignIn = () => {
	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		const userDocRef = await createUserDocumentFromAuth(user);
	};
	useEffect(() => {
		async function getRedirectRes() {
			const response = await getRedirectResult(auth);
			if (response) {
				const userDocRef = await createUserDocumentFromAuth(response.user);
			}
		}
		getRedirectRes();
	}, []);
	return (
		<div>
			<h1>Sign In Page</h1>
			<button onClick={logGoogleUser}>Sign in With Google</button>
			{"   "}
			<button onClick={signInWithGoogleRedirect}>
				Sign in With GoogleRedirect
			</button>
		</div>
	);
};
