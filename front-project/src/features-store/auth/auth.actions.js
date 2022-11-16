import { AUTH_SIGN_UP, AUTH_SIGN_IN } from "./auth.constants";

export const signIn = (user) => {
  return { type: AUTH_SIGN_IN, payload: user };
};
export const signUp = (user) => {
  return { type: AUTH_SIGN_UP, payload: user };
};
