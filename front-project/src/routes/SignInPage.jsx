import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import SignInForm from "../components/SignInForm";

export const SignInPage = () => {
  const user = useSelector((state) => state.auth.user);
  const isAuthLoading = useSelector((state) => state.auth.isAuthLoading);

  return user && !isAuthLoading ? <Navigate to="/" /> : <SignInForm />;
};
