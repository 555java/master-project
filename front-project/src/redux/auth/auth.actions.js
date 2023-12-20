import {
  AUTH_USER_LOAD_START,
  AUTH_USER_LOAD_SUCCESS,
  AUTH_SET_USER,
  AUTH_USER_LOGOUT_START,
  AUTH_USER_LOGOUT_SUCCESS,
  AUTH_SUBSCRIBE_START,
  AUTH_SUBSCRIBE_SUCCESS,
  AUTH_SUBSCRIBE_ERROR,
  AUTH_GET_SUBSCRIPTIONS_START,
  AUTH_GET_SUBSCRIPTIONS_SUCCESS,
  AUTH_GET_SUBSCRIPTIONS_ERROR,
  AUTH_UNSUBSCRIBE_START,
  AUTH_UNSUBSCRIBE_ERROR,
  AUTH_UNSUBSCRIBE_SUCCESS,
  AUTH_USER_LOGOUT_ERROR,
  AUTH_GET_ALL_USERS_START,
  AUTH_GET_ALL_USERS_SUCCESS,
  AUTH_GET_ALL_USERS_ERROR,
  AUTH_USER_LOAD_ERROR,
  AUTH_SET_USER_START,
  AUTH_SET_USER_SUCCESS,
} from "./auth.constants";

export const setUserStart = () => {
  return { type: AUTH_SET_USER_START };
};
export const setUserSuccess = (user) => {
  return { type: AUTH_SET_USER_SUCCESS, payload: user };
};
export const setUserError = (err) => {
  return { type: AUTH_SET_USER_START, payload: err };
};

export const loadUserStart = () => {
  return { type: AUTH_USER_LOAD_START };
};
export const loadUserSuccess = (user) => {
  return { type: AUTH_USER_LOAD_SUCCESS, payload: user };
};
export const loadUserError = (err) => {
  return { type: AUTH_USER_LOAD_ERROR, payload: err };
};

export const logoutUserStart = () => {
  return { type: AUTH_USER_LOGOUT_START };
};
export const logoutUserSuccess = () => {
  return { type: AUTH_USER_LOGOUT_SUCCESS };
};
export const logoutUserError = (error) => {
  return { type: AUTH_USER_LOGOUT_ERROR, payload: error };
};

export const subscribeStart = () => {
  return { type: AUTH_SUBSCRIBE_START };
};
export const subscribeSuccess = (user) => {
  return { type: AUTH_SUBSCRIBE_SUCCESS, payload: user };
};
export const subscribeError = () => {
  return { type: AUTH_SUBSCRIBE_ERROR };
};

export const unsubscribeStart = () => {
  return { type: AUTH_UNSUBSCRIBE_START };
};
export const unsubscribeSuccess = (user) => {
  return { type: AUTH_UNSUBSCRIBE_SUCCESS, payload: user };
};
export const unsubscribeError = () => {
  return { type: AUTH_UNSUBSCRIBE_ERROR };
};

export const getSubscriptionsStart = () => {
  return { type: AUTH_GET_SUBSCRIPTIONS_START };
};
export const getSubscriptionsSucess = (subscribtions) => {
  return { type: AUTH_GET_SUBSCRIPTIONS_SUCCESS, payload: subscribtions };
};
export const getSubscriptionsError = (err) => {
  return { type: AUTH_GET_SUBSCRIPTIONS_ERROR, payload: err };
};

export const getAllUsersStart = () => {
  return { type: AUTH_GET_ALL_USERS_START };
};

export const getAllUsersSuccess = (users) => {
  return { type: AUTH_GET_ALL_USERS_SUCCESS, payload: users };
};
export const getAllUsersError = () => {
  return { type: AUTH_GET_ALL_USERS_ERROR };
};
