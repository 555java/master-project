import {
  AUTH_USER_LOAD_START,
  AUTH_USER_LOAD_SUCCESS,
  AUTH_SET_USER,
  AUTH_USER_LOGOUT_START,
  AUTH_USER_LOGOUT_SUCCESS,
} from "./auth.constants";

export const setUser = (user) => {
  return { type: AUTH_SET_USER, payload: user };
};
export const loadUserStart = () => {
  return { type: AUTH_USER_LOAD_START };
};
export const loadUserSuccess = (user) => {
  return { type: AUTH_USER_LOAD_SUCCESS, payload: user };
};

export const logoutUserStart = () => {
  return { type: AUTH_USER_LOGOUT_START };
};

export const logoutUserSuccess = () => {
  return { type: AUTH_USER_LOGOUT_SUCCESS };
};
