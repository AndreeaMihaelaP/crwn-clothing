import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  auth,
  signInWithGooglePopup,
  // signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUp from "../sign-up-form/sign-up-form.component";

const SignIn = () => {
  // Another way to sign in
  useEffect(() => {
    const getRedirect = async () => {
      const response = await getRedirectResult(auth);
      if (response) {
        await createUserDocumentFromAuth(response.user);
      }
    };
    getRedirect();
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log("userDocRef", userDocRef);
  };

  return (
    <div>
      <h1> Sign In Page</h1>
      <button onClick={logGoogleUser}> Sign In With Google Popup</button>
      <SignUp />
      {/*
      Log in with redirect
       <button onClick={signInWithGoogleRedirect}>
        Sign In With Google Redirect
      </button> */}
    </div>
  );
};

export default SignIn;
