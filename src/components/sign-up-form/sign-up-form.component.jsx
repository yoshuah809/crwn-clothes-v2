import { useState, useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import { FormInput } from "../form-input/form-input.component";
import "./sign-up.styles.scss";

const defaultFormFields = {
	displayName: "",
	email: "",
	password: "",
	confirmPassword: "",
};
export const SignUpForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { displayName, email, password, confirmPassword } = formFields;
	const { setCurrentUser } = useContext(UserContext);

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

		if (password !== confirmPassword) {
			alert("Password does not Match");
			return;
		}
		try {
			const { user } = await createAuthUserWithEmailAndPassword(
				email,
				password
			);

			setCurrentUser(user);
			await createUserDocumentFromAuth(user, { displayName });
			resetFormFields();
		} catch (error) {
			if (error.code === "auth/email-already-in-use") {
				alert("Can not create user, email already exist in database");
			} else {
				console.log("user creation encounter and error", error);
			}
		}
	};

	const currentUser = useContext(UserContext);

	return (
		<div className="sign-up-container">
			<h2>Don't have an account?</h2>
			<span>Sign up with your email and password</span>

			<form onSubmit={handleSubmit}>
				<FormInput
					label="Display Name"
					name="displayName"
					value={displayName}
					type="text"
					required
					onChange={handleChange}
				/>

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

				<FormInput
					label="Confirm Password"
					name="confirmPassword"
					value={confirmPassword}
					type="password"
					required
					onChange={handleChange}
				></FormInput>
				<Button type="submit">Sign Up</Button>
			</form>
		</div>
	);
};
