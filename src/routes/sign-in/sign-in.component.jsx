import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedicrect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
const SignIn = () => {
  const testRedirect = async () => {
    const response = await getRedirectResult(auth);
    if (response) {
      const userDocRef = await createUserDocumentFromAuth(response.user);
    }
  };
  useEffect(() => {
    testRedirect();
  }, []);

  const logGoolgeUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(userDocRef);
  };

  //   const logRedicrectUser = async () => {
  //     const { user } = await signInWithGoogleRedicrect();
  //     console.log(user);
  //   };

  return (
    <div>
      <h1>This is sign in page</h1>
      <button onClick={logGoolgeUser}>Sign In with Google Popup</button>
      <button onClick={signInWithGoogleRedicrect}>
        Sign In with Google Reditect
      </button>
    </div>
  );
};

export default SignIn;
