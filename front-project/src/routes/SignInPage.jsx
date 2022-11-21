import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import SignInForm from "../components/SignInForm";
import { getIsLoggedIn } from "../features-store/auth/auth.selectors";

export const SignInPage = () => {
  const user = useSelector(getIsLoggedIn);
  return user ? <Navigate to="/" /> : <SignInForm />;
};
