import { useEffect } from "react";
import { SignUpForm } from "../../components/sign-up-form/sig-up-form.component";

import {
	signInWithGooglePopup,
	createUserDocumentFromAuth,
	signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";

export const SignIn = () => {
	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		const userDocRef = await createUserDocumentFromAuth(user);
	};

	return (
		<div>
			<h1>Sign In Page</h1>
			<button onClick={logGoogleUser}>Sign in With Google</button>
			<SignUpForm />
		</div>
	);
};
