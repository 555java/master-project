import { Fragment } from "react";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import SignInForm from "../../components/signInForm.component";

import { setIsLoggedIn } from "../../features-store/auth/auth.actions";
import SignUpForm from "../../components/signUpForm.component";
import fetchDB from "../../features-store/utils/fetchHandler";

export const AuthPage = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const formType = useSelector((state) => state.auth.formType);
  const buttonText = isLoggedIn ? "logged in" : "not logged";
  const isLoggedInHandler = () => {
    dispatch(setIsLoggedIn());
  };
  return (
    <Fragment>
      {formType === "SIGN_IN" ? <SignInForm /> : <SignUpForm />}
      <Button type="outlined" onClick={isLoggedInHandler}>
        {buttonText}
      </Button>
    </Fragment>
  );
};
