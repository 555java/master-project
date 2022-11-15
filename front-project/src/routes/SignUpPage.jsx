import SignUpForm from "../components/SignUpForm";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const SignUpPage = () => {
  const user = useSelector((state) => state.auth.user);
  const isAuthLoading = useSelector((state) => state.auth.isAuthLoading);

  return user && !isAuthLoading ? <Navigate to="/" /> : <SignUpForm />;
};
