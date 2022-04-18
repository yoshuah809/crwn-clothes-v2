import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth";
import { API_KEY } from "./API_KEY";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: API_KEY,
	authDomain: "crwn-clothingstoresdb.firebaseapp.com",
	projectId: "crwn-clothingstoresdb",
	storageBucket: "crwn-clothingstoresdb.appspot.com",
	messagingSenderId: "377114080598",
	appId: "1:377114080598:web:ae6cd855f17c590b1c12f7",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
	prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
	signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
	signInWithRedirect(auth, googleProvider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (
	userAuth,
	additionalInfotmation = {}
) => {
	if (!userAuth) return;
	const userDocRef = doc(db, "user", userAuth.uid);

	//console.log(userDocRef);

	const userSnapshot = await getDoc(userDocRef);

	//chech if userdata exist
	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
				...additionalInfotmation,
			});
		} catch (error) {
			console.log("error creating the user", error.message);
		}
	}
	return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;
	return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;
	return await signInWithEmailAndPassword(auth, email, password);
};
