import { authApi } from "../../api/auth.api";
import {
  setAuthErr,
  setAuthFinished,
  setAuthStarted,
  signIn,
  signUp,
} from "./auth.actions";

export const signUpUserThunk = ({ username, email, password }) => {
  return async function (dispatch) {
    dispatch(setAuthStarted());
    authApi
      .signUp({ username, email, password })
      .then((res) => dispatch(signUp(res.data.user)))
      .then(() => dispatch(setAuthFinished()))
      .catch((err) => {
        console.log(err);
        dispatch(setAuthErr(JSON.parse(err).message));
      });
  };
};

export const signInUserThunk = ({ username, password }) => {
  return async function (dispatch) {
    dispatch(setAuthStarted());
    authApi
      .signIn({ username, password })
      .then((res) => dispatch(signIn(res.data.user)))
      .then(() => dispatch(setAuthFinished()))
      .catch((err) => {
        dispatch(setAuthErr(JSON.parse(err).message));
      });
  };
};
