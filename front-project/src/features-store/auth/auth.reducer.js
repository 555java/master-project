import {
  AUTH_ERR,
  AUTH_FINISHED,
  AUTH_SIGN_IN,
  AUTH_SIGN_UP,
  AUTH_STARTED,
  TOGGLE_IS_LOGGED_IN,
} from "./auth.constants";

const initialState = {
  isLoggedIn: true,
  isAuthLoading: false,
  user: null,
  err: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_IS_LOGGED_IN:
      return { ...state, isLoggedIn: !state.isLoggedIn };
    case AUTH_STARTED:
      return { ...state, isAuthLoading: true, err: null };
    case AUTH_FINISHED:
      return { ...state, isAuthLoading: false };
    case AUTH_SIGN_IN:
      return { ...state, user: action.payload };
    case AUTH_SIGN_UP:
      return { ...state, user: action.payload };
    case AUTH_ERR:
      return { ...state, err: action.payload };
    default:
      return state;
  }
};
