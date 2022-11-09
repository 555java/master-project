import { TOGGLE_IS_LOGGED_IN } from "./auth.constants";

const initialState = {
  isLoggedIn: true,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_IS_LOGGED_IN:
      console.log("hello is logged in");
      return { ...state, isLoggedIn: !state.isLoggedIn };
    default:
      return state;
  }
};
