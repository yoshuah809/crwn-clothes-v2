import { useState, useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
	signInWithGooglePopup,
	signInUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import { FormInput } from "../form-input/form-input.component";
import "./sign-in.styles.scss";

const defaultFormFields = {
	email: "",
	password: "",
};
export const SignInForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;

	const { setCurrentUser } = useContext(UserContext);

	const signInWithGoogle = async () => {
		const { user } = await signInWithGooglePopup();
		await createUserDocumentFromAuth(user);
	};

	//console.log(formFields);
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormFields({ ...formFields, [name]: value });
	};

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const { user } = await signInUserWithEmailAndPassword(email, password);
			setCurrentUser(user);
			resetFormFields();
		} catch (error) {
			switch (error.code) {
				case "auth/wrong-password":
					alert("Wrong password, please try again");
					break;
				case "auth/user-not-found":
					alert("user Not found, please create an account");
					break;

				default:
					console.log(error);
			}
			if (error.code === "auth/wrong-password") {
			}
			console.log(error);
		}
	};
	return (
		<div className="sign-in-container">
			<h2>Already have an account?</h2>
			<span>Sign in with your email and password</span>

			<form onSubmit={handleSubmit}>
				<FormInput
					label="Email"
					name="email"
					value={email}
					type="email"
					required
					onChange={handleChange}
				></FormInput>

				<FormInput
					label="Password"
					name="password"
					value={password}
					type="password"
					required
					onChange={handleChange}
				></FormInput>
				<div className="buttons-container">
					<Button type="submit">Sign In</Button>
					<Button buttonType="google" onClick={signInWithGoogle} type="button">
						Google Sign In
					</Button>
				</div>
			</form>
		</div>
	);
};
