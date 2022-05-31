import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from "firebase/auth";
//import { API_KEY } from "./API_KEY";

import {
	getFirestore,
	doc,
	getDoc,
	setDoc,
	collection,
	writeBatch,
	query,
	getDocs,
} from "firebase/firestore";
const API_KEY = "AIzaSyDSG1JH9XLumntwSCJFzD6WpTVbZpq2sX0";

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

export const addCollectionAndDocuments = async (
	collectionKey,
	objectsToAdd,
	field
) => {
	const collectionRef = collection(db, collectionKey);
	const batch = writeBatch(db);

	objectsToAdd.forEach((object) => {
		const docRef = doc(collectionRef, object.title.toLowerCase());
		batch.set(docRef, object);
	});

	await batch.commit();
	console.log("Done!");
};

export const getCategoriesAndDocuments = async () => {
	const collectionRef = collection(db, "categories");
	const q = query(collectionRef);

	const querySnapShot = await getDocs(q);

	const catregoryMap = querySnapShot.docs.reduce((acc, docSnapShot) => {
		const { title, items } = docSnapShot.data();
		acc[title.toLowerCase()] = items;
		return acc;
	}, {});

	return catregoryMap;
};

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

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListender = (callback) =>
	onAuthStateChanged(auth, callback);
