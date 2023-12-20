export const getUser = (state) => state.auth?.user;

export const getUserId = (state) => state.auth?.user?._id;

export const getUserName = (state) => state.auth?.user?.username;

export const getIsLoggedIn = (state) => Boolean(getUser(state));

export const getIsUserLoading = (state) => state.auth.isUserLoading;
export const getIsLoggingOut = (state) => state.auth.isUserLoggingOut;
export const getIsSubscribing = (state) => state.auth.isSubscribing;
export const getIsUserSetting = (state) => state.auth.isUserSetting;

export const getLogoutError = (state) => state.auth.logoutError;
export const getLoadUserError = (state) => state.auth.loadUserError;
export const getSubscriptionsError = (state) => state.auth.subscriptionsError;

export const getIsSubscriptionsLoading = (state) =>
  state.auth.isSubscribtionsLoading;
export const getUserSubscriptions = (state) => state.auth.subscriptions;
export const getIsSubscribed = (state, userId) => {
  return (
    state.auth.user.subscriptions.includes(userId) ||
    state.auth.user.subscriptions.find((user) => user._id === userId)
  );
};

export const getAllUsers = (state) => state.auth.allUsersList;
export const getIsAllUsersLoading = (state) => state.auth.isAllUsersLoading;
export const getUsersListError = (state) => state.auth.usersListError;
