export const getUser = (state) => state.auth.user;
export const getUserName = (state) => state.auth.user.username;
export const getIsLoggedIn = (state) => Boolean(getUser(state));
export const getIsUserLoading = (state) => state.auth.isUserLoading;
export const getIsLoggingOut = (state) => state.auth.isUserLoggingOut;
