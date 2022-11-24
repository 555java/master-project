import { authApi } from "../../api/auth.api";
import {
  loadUserStart,
  loadUserSuccess,
  logoutUserStart,
  logoutUserSuccess,
  setUser,
} from "./auth.actions";
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

export const getUserThunk = () => {
  return async function (dispatch) {
    dispatch(loadUserStart());
    return authApi
      .loadUser()
      .then((res) => dispatch(loadUserSuccess(res.user)))
      .catch((err) => {
        console.log(err);
      });
  };
};

export const logoutUserThunk = () => {
  return async function (dispatch) {
    dispatch(logoutUserStart());
    return authApi
      .logOut()
      .then(() => dispatch(logoutUserSuccess()))
      .catch((err) => console.log(err));
  };
};
