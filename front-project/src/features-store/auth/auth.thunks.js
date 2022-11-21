import { authApi } from "../../api/auth.api";
import { setUser } from "./auth.actions";
import { FORM_ERROR } from "final-form";

export const signUpUserThunk = ({ username, email, password }) => {
  return async function (dispatch) {
    return authApi
      .signUp({ username, email, password })
      .then((res) => dispatch(setUser(res.data.user)))
      .catch((err) => {
        return { [FORM_ERROR]: err?.response?.message || "Login error" };
      });
  };
};

export const signInUserThunk = ({ username, password }) => {
  return async function (dispatch) {
    return authApi
      .signIn({ username, password })
      .then((res) => dispatch(setUser(res.data.user)))
      .catch((err) => {
        return { [FORM_ERROR]: err?.response?.message || "Login error" };
      });
  };
};
