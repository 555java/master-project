import {
  AUTH_FINISHED,
  AUTH_SIGN_UP,
  AUTH_SIGN_IN,
  AUTH_STARTED,
  TOGGLE_IS_LOGGED_IN,
  AUTH_ERR,
} from "./auth.constants";

export const setIsLoggedIn = () => {
  return { type: TOGGLE_IS_LOGGED_IN };
};

export const setAuthStarted = () => {
  return { type: AUTH_STARTED };
};

export const setAuthFinished = () => {
  return { type: AUTH_FINISHED };
};

export const signIn = (user) => {
  return { type: AUTH_SIGN_IN, payload: user };
};
export const signUp = (user) => {
  return { type: AUTH_SIGN_UP, payload: user };
};

export const setAuthErr = (err) => {
  return { type: AUTH_ERR, payload: err };
};
