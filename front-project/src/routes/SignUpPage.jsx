import SignUpForm from "../components/SignUpForm";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../features-store/auth/auth.selectors";
import React from "react";

export const SignUpPage = () => {
  const user = useSelector(getIsLoggedIn);

  return user ? <Navigate to="/" /> : <SignUpForm />;
};
