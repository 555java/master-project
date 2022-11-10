import { TOGGLE_IS_LOGGED_IN } from "./auth.constants";

export const setIsLoggedIn = () => {
  return { type: TOGGLE_IS_LOGGED_IN };
};
