import SignUpForm from "../components/SignUpForm";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUser } from "../features-store/auth/auth.selectors";

export const SignUpPage = () => {
  const user = useSelector(getUser);

  return user ? <Navigate to="/" /> : <SignUpForm />;
};
