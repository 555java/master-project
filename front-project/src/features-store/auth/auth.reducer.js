import {
  AUTH_USER_LOAD_START,
  AUTH_USER_LOAD_SUCCESS,
  AUTH_SET_USER,
  AUTH_USER_LOGOUT_START,
  AUTH_USER_LOGOUT_SUCCESS,
} from "./auth.constants";

const initialState = {
  user: null,
  isUserLoading: false,
  isUserLoggingOut: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SET_USER:
      return { ...state, user: action.payload };
    case AUTH_USER_LOAD_START:
      return { ...state, isUserLoading: true };
    case AUTH_USER_LOAD_SUCCESS:
      return { ...state, isUserLoading: false, user: action.payload };
    case AUTH_USER_LOGOUT_START:
      return { ...state, isUserLoggingOut: true };
    case AUTH_USER_LOGOUT_SUCCESS:
      return { ...state, isUserLoggingOut: false, user: null };
    default:
      return state;
  }
};
