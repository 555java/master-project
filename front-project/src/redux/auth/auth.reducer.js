import {
  AUTH_USER_LOAD_START,
  AUTH_USER_LOAD_SUCCESS,
  AUTH_USER_LOAD_ERROR,
  AUTH_USER_LOGOUT_START,
  AUTH_USER_LOGOUT_SUCCESS,
  AUTH_USER_LOGOUT_ERROR,
  AUTH_SUBSCRIBE_START,
  AUTH_SUBSCRIBE_SUCCESS,
  AUTH_SUBSCRIBE_ERROR,
  AUTH_GET_SUBSCRIPTIONS_SUCCESS,
  AUTH_GET_SUBSCRIPTIONS_ERROR,
  AUTH_GET_SUBSCRIPTIONS_START,
  AUTH_UNSUBSCRIBE_START,
  AUTH_UNSUBSCRIBE_SUCCESS,
  AUTH_UNSUBSCRIBE_ERROR,
  AUTH_GET_ALL_USERS_START,
  AUTH_GET_ALL_USERS_SUCCESS,
  AUTH_GET_ALL_USERS_ERROR,
  AUTH_SET_USER_ERROR,
  AUTH_SET_USER_SUCCESS,
  AUTH_SET_USER_START,
} from "./auth.constants";

const initialState = {
  user: null,
  isUserLoading: false,
  isAllUsersLoading: false,
  isUserLoggingOut: false,
  isSubscribing: false,
  isSubscribtionsLoading: false,
  isUserSetting: false,
  allUsersList: null,
  subscriptions: null,
  logoutError: null,
  loadUserError: null,
  subscribeError: null,
  subscriptionsError: null,
  usersListError: null,
  setUserError: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SET_USER_START:
      return { ...state, isUserSetting: true };
    case AUTH_SET_USER_SUCCESS:
      return { ...state, user: action.payload, isUserSetting: false };
    case AUTH_SET_USER_ERROR:
      return { ...state, isUserSetting: false, setUserError: action.payload };
    case AUTH_USER_LOAD_START:
      return { ...state, isUserLoading: true };
    case AUTH_USER_LOAD_SUCCESS:
      return { ...state, isUserLoading: false, user: action.payload };
    case AUTH_USER_LOAD_ERROR:
      return { ...state, isUserLoading: false, loadUserError: action.payload };

    case AUTH_USER_LOGOUT_START:
      return { ...state, isUserLoggingOut: true, logoutError: null };
    case AUTH_USER_LOGOUT_SUCCESS:
      return { ...state, isUserLoggingOut: false, user: null };
    case AUTH_USER_LOGOUT_ERROR:
      return { ...state, isUserLoggingOut: false, logoutError: action.payload };

    case AUTH_SUBSCRIBE_START:
      return { ...state, isSubscribing: true, subscribeError: null };
    case AUTH_SUBSCRIBE_SUCCESS:
      return { ...state, isSubscribing: false, user: action.payload };
    case AUTH_SUBSCRIBE_ERROR:
      return { ...state, isSubscribing: false, subscribeError: action.payload };

    case AUTH_UNSUBSCRIBE_START:
      return { ...state, isSubscribing: true, subscribeError: null };
    case AUTH_UNSUBSCRIBE_SUCCESS:
      return { ...state, isSubscribing: false, user: action.payload };
    case AUTH_UNSUBSCRIBE_ERROR:
      return { ...state, isSubscribing: false, subscribeError: action.payload };

    case AUTH_GET_SUBSCRIPTIONS_START:
      return {
        ...state,
        isSubscribtionsLoading: true,
        subscriptionsError: null,
      };
    case AUTH_GET_SUBSCRIPTIONS_SUCCESS:
      return {
        ...state,
        isSubscribtionsLoading: false,
        subscriptions: action.payload,
      };
    case AUTH_GET_SUBSCRIPTIONS_ERROR:
      return {
        ...state,
        isSubscribtionsLoading: false,
        subscriptionsError: action.payload,
      };
    case AUTH_GET_ALL_USERS_START:
      return {
        ...state,
        isAllUsersLoading: true,
      };
    case AUTH_GET_ALL_USERS_SUCCESS:
      return {
        ...state,
        isAllUsersLoading: false,
        allUsersList: action.payload,
      };
    case AUTH_GET_ALL_USERS_ERROR:
      return {
        ...state,
        isAllUsersLoading: false,
        usersListError: action.payload,
      };
    default:
      return state;
  }
};
