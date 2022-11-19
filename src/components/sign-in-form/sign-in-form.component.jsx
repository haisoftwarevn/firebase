import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_STYLE_CLASSES } from "../button/button.component";

import "./sign-in-form.styles.scss";

import {
  googleSignInStart,
  emailSignInStart,
  googleRedirectSignInStart,
} from "../../store/user/user.action";
// import { UserContext } from "../../contexts/user.context";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFileds] = useState(defaultFormFields);
  const { email, password } = formFields;

  const dispatch = useDispatch();

  const resetFormField = () => {
    setFormFileds(defaultFormFields);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));
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
    dispatch(googleSignInStart());
  };

  ////////////////// login redirect google ///
  const logRedicrectUser = async () => {
    dispatch(googleRedirectSignInStart());
  };

  //////////// nhan ket qua redirec //

  useEffect(() => {
    //dispatch(saveRedirectResultToFirebase());
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
          <Button
            type="button"
            buttonType={BUTTON_STYLE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            Google Sign In
          </Button>
        </div>
        <br />
        <Button
          type="button"
          buttonType={BUTTON_STYLE_CLASSES.google}
          onClick={logRedicrectUser}
        >
          Google Redirect Sign In
        </Button>
      </form>
    </div>
  );
};

export default SignInForm;
