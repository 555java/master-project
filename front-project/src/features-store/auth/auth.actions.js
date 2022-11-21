import { AUTH_SET_USER } from "./auth.constants";

export const setUser = (user) => {
  return { type: AUTH_SET_USER, payload: user };
};
