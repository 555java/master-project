import { authApi } from "../../api/auth.api";
import {
  getAllUsersError,
  getAllUsersStart,
  getAllUsersSuccess,
  getSubscriptionsError,
  getSubscriptionsStart,
  getSubscriptionsSucess,
  loadUserStart,
  loadUserSuccess,
  logoutUserError,
  logoutUserStart,
  logoutUserSuccess,
  setUser,
  subscribeError,
  subscribeStart,
  subscribeSuccess,
  unsubscribeStart,
  unsubscribeSuccess,
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
      .then((res) => {
        dispatch(loadUserSuccess(res.user));
      })
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
      .catch((err) => dispatch(logoutUserError(err)));
  };
};

export const userSubscribe = (authUserId, userId) => {
  return async function (dispatch) {
    dispatch(subscribeStart());
    return authApi
      .subscribe(authUserId, userId)
      .then((res) => dispatch(subscribeSuccess(res.user)))
      .catch((err) => dispatch(subscribeError(err)));
  };
};

export const userUnsubscribe = (authUserId, userId) => {
  return async function (dispatch) {
    dispatch(unsubscribeStart());
    return authApi
      .unsubscribe(authUserId, userId)
      .then((res) => dispatch(unsubscribeSuccess(res.user)))
      .catch((err) => dispatch(subscribeError(err)));
  };
};

export const getUserSubscriptionsThunk = (userId) => {
  return async function (dispatch) {
    dispatch(getSubscriptionsStart());
    return authApi
      .loadUserSubscriptions(userId)
      .then((res) => dispatch(getSubscriptionsSucess(res.user)))
      .catch((err) => dispatch(getSubscriptionsError(err)));
  };
};

export const getAllUsersThunk = () => {
  return async function (dispatch) {
    dispatch(getAllUsersStart());
    return authApi
      .loadAllUsers()
      .then((res) => dispatch(getAllUsersSuccess(res)))
      .catch((err) => dispatch(getAllUsersError(err)));
  };
};
