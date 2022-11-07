import { SWITCH_AUTH_FORMS, TOGGLE_IS_LOGGED_IN } from "./auth.constants";

export const setIsLoggedIn = () => {
  return { type: TOGGLE_IS_LOGGED_IN };
};

export const switchAuthForms = () => {
  return { type: SWITCH_AUTH_FORMS };
};
