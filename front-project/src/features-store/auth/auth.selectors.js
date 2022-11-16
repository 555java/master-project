export const getUser = (state) => state.auth.user;
export const getIsLoggedIn = (state) => Boolean(getUser(state));
