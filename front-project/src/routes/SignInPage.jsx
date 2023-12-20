import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { SignInForm } from "../components/SignInForm";
import { getIsLoggedIn, getUserId } from "../redux/auth/auth.selectors";
import React from "react";

export const SignInPage = () => {
  const user = useSelector(getIsLoggedIn);
  const userId = useSelector(getUserId);
  return user && userId ? (
    <Navigate to={`/posts/user/${userId}`} />
  ) : (
    <SignInForm />
  );
};
