import { AUTH_SIGN_IN, AUTH_SIGN_UP } from "./auth.constants";

const initialState = {
  user: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SIGN_IN:
      return { ...state, user: action.payload };
    case AUTH_SIGN_UP:
      return { ...state, user: action.payload };

    default:
      return state;
  }
};
