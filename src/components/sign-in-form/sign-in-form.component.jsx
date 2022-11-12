import { useState, useEffect } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { getRedirectResult } from "firebase/auth"; // dùng cho redirect
import {
  signInAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  auth, // dung cho redirect
  signInWithGoogleRedicrect, // dung cho redirect
} from "../../utils/firebase/firebase.utils";

import "./sign-in-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFileds] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormField = () => {
    setFormFileds(defaultFormFields);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      // await createUserDocumentFromAuth(response.user);
      console.log(response);
      resetFormField();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("wrong password");
          break;
        case "auth/user-not-found":
          alert("no user found");
          break;
        default:
          alert(error.code);
          console.log(error.code);
      }
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFileds({ ...formFields, [name]: value });
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  ////////////////// login redirect google ///
  const logRedicrectUser = async () => {
    const { user } = await signInWithGoogleRedicrect();
  };

  //////////// nhan ket qua redirec //
  const testRedirect = async () => {
    const response = await getRedirectResult(auth);
    if (response) {
      const userDocRef = await createUserDocumentFromAuth(response.user);
    }
  };
  useEffect(() => {
    testRedirect();
  }, []);

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your Email and Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          inputOptions={{
            type: "email",
            required: true,
            onChange: handleChange,
            name: "email",
            value: email,
          }}
        />

        <FormInput
          label="Password"
          inputOptions={{
            type: "password",
            required: true,
            onChange: handleChange,
            name: "password",
            value: password,
          }}
        />

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
        <br />
        <Button type="button" buttonType="google" onClick={logRedicrectUser}>
          Google Redirect Sign In
        </Button>
      </form>
    </div>
  );
};

export default SignInForm;
