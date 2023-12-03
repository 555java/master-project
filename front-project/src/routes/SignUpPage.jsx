import { SignUpForm } from "../components/SignUpForm";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsLoggedIn, getUserId } from "../redux/auth/auth.selectors";
import React from "react";

export const SignUpPage = () => {
  const user = useSelector(getIsLoggedIn);
  const userId = useSelector(getUserId);
  return user && userId ? (
    <Navigate to={`/posts/user/${userId}`} />
  ) : (
    <SignUpForm />
  );
};
