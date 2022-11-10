import { TOGGLE_IS_LOGGED_IN } from "./auth.constants";

const initialState = {
  isLoggedIn: true,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_IS_LOGGED_IN:
      return { ...state, isLoggedIn: !state.isLoggedIn };
    default:
      return state;
  }
};
