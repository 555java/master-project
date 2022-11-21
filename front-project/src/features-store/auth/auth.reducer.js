import { AUTH_SET_USER } from "./auth.constants";

const initialState = {
  user: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
