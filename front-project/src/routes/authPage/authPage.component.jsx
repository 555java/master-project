import { Fragment } from "react";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import SignInForm from "../../components/signInForm.component";

import { setIsLoggedIn } from "../../features-store/auth/auth.actions";

export const AuthPage = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const buttonText = isLoggedIn ? "logged in" : "not logged";

  const isLoggedInHandler = () => {
    dispatch(setIsLoggedIn());
  };
  return (
    <Fragment>
      <SignInForm />
      <Button type="outlined" onClick={isLoggedInHandler}>
        {buttonText}
      </Button>
    </Fragment>
  );
};
