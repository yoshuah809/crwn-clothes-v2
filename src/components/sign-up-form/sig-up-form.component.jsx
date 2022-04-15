import { useState } from "react";
import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
	displayName: "",
	email: "",
	password: "",
	confirmPassword: "",
};
export const SignUpForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { displayName, email, password, confirmPassword } = formFields;

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
	return (
		<div>
			<h1>Sign up with your email and password</h1>

			<form onSubmit={handleSubmit}>
				<label>Display Name </label>
				<input
					name="displayName"
					value={displayName}
					type="text"
					required
					onChange={handleChange}
				></input>
				<label>Email </label>
				<input
					name="email"
					value={email}
					type="email"
					required
					onChange={handleChange}
				></input>
				<label>Password</label>
				<input
					name="password"
					value={password}
					type="password"
					required
					onChange={handleChange}
				></input>
				<label>Confirm Password</label>
				<input
					name="confirmPassword"
					value={confirmPassword}
					type="password"
					required
					onChange={handleChange}
				></input>
				<button type="submit">Sign Up</button>
			</form>
		</div>
	);
};
