import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "./button.styles.jsx";
export const BUTTON_STYLE_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (buttonType = BUTTON_STYLE_CLASSES.base) => {
  return {
    [BUTTON_STYLE_CLASSES.base]: BaseButton,
    [BUTTON_STYLE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_STYLE_CLASSES.inverted]: InvertedButton,
  }[buttonType];
};
const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
