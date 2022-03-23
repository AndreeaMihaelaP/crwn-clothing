import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDEO34vNJ9fqLuJYjGJT5rClXYdPvUhc-g",
  authDomain: "crwn-clothing-db-d242e.firebaseapp.com",
  projectId: "crwn-clothing-db-d242e",
  storageBucket: "crwn-clothing-db-d242e.appspot.com",
  messagingSenderId: "534051527403",
  appId: "1:534051527403:web:47b8d6c4815c714a57fcae",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
