import { authApi } from "../../api/auth.api";
import {
  getAllUsersError,
  getAllUsersStart,
  getAllUsersSuccess,
  getSubscriptionsError,
  getSubscriptionsStart,
  getSubscriptionsSucess,
  loadUserError,
  loadUserStart,
  loadUserSuccess,
  logoutUserError,
  logoutUserStart,
  logoutUserSuccess,
  setUser,
  setUserError,
  setUserStart,
  setUserSuccess,
  subscribeError,
  subscribeStart,
  subscribeSuccess,
  unsubscribeStart,
  unsubscribeSuccess,
} from "./auth.actions";
import { FORM_ERROR } from "final-form";

export const signUpUserThunk = ({ username, email, password }) => {
  return async function (dispatch) {
    dispatch(setUserStart());
    return authApi
      .signUp({ username, email, password })
      .then((res) => dispatch(setUserSuccess(res.data.user)))
      .catch((err) => {
        dispatch(setUserError(err));
        return { [FORM_ERROR]: err?.message || "Login error" };
      });
  };
};

export const signInUserThunk = ({ username, password }) => {
  return async function (dispatch) {
    dispatch(setUserStart());
    return authApi
      .signIn({ username, password })
      .then((res) => dispatch(setUserSuccess(res.data.user)))
      .catch((err) => {
        console.log("error");
        dispatch(setUserError(err));
        return { [FORM_ERROR]: err?.message || "Login error" };
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
        dispatch(loadUserError(err));
      });
  };
};

export const logoutUserThunk = () => {
  return async function (dispatch, getState, router) {
    dispatch(logoutUserStart());
    return authApi
      .logOut()
      .then(() => {
        dispatch(logoutUserSuccess());
        router.navigate(`/about`);
      })
      .catch((err) => dispatch(logoutUserError(err)));
  };
};

export const userSubscribe = (userId) => {
  return async function (dispatch) {
    dispatch(subscribeStart());
    return authApi
      .subscribe(userId)
      .then((res) => dispatch(subscribeSuccess(res.user)))
      .catch((err) => dispatch(subscribeError(err)));
  };
};

export const userUnsubscribe = (userId) => {
  return async function (dispatch) {
    dispatch(unsubscribeStart());
    return authApi
      .unsubscribe(userId)
      .then((res) => dispatch(unsubscribeSuccess(res.user)))
      .catch((err) => dispatch(subscribeError(err)));
  };
};

export const getUserSubscriptionsThunk = (userId) => {
  return async function (dispatch) {
    dispatch(getSubscriptionsStart());
    return authApi
      .loadUserSubscriptions(userId)
      .then((res) => dispatch(getSubscriptionsSucess(res.subscriptions)))
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
