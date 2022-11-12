// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
// import {
//   auth,
//   signInWithGooglePopup,
//   signInWithGoogleRedicrect,
//   createUserDocumentFromAuth,
// } from "../../utils/firebase/firebase.utils";

///
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import "./authentication.styles.scss";
const Authentication = () => {
  // const testRedirect = async () => {
  //   const response = await getRedirectResult(auth);
  //   if (response) {
  //     const userDocRef = await createUserDocumentFromAuth(response.user);
  //   }
  // };
  // useEffect(() => {
  //   testRedirect();
  // }, []);

  // const logGoolgeUser = async () => {
  //   const { user } = await signInWithGooglePopup();
  //   const userDocRef = await createUserDocumentFromAuth(user);
  //   console.log(userDocRef);
  // };

  //   const logRedicrectUser = async () => {
  //     const { user } = await signInWithGoogleRedicrect();
  //     console.log(user);
  //   };

  return (
    <div className="authentication-container">
      {/* <button onClick={logGoolgeUser}>Sign In with Google Popup</button>
      <button onClick={signInWithGoogleRedicrect}>
        Sign In with Google Reditect
      </button> */}
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
