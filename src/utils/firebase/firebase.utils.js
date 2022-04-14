import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
} from "firebase/auth";
import { API_KEY } from "./API_KEY";

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

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
	prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
