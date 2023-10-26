import fetchDB from "../utils/api";

export const authApi = {
  signIn({ username, password }) {
    return fetchDB("login", "POST", {
      username,
      password,
    });
  },

  signUp({ username, email, password }) {
    return fetchDB("register", "POST", {
      username: username,
      email: email,
      password: password,
    });
  },

  loadUser() {
    return fetchDB("user", "GET");
  },

  logOut() {
    return fetchDB("logout", "POST", {});
  },
  subscribe(authUserId, userId) {
    return fetchDB(`posts/user/${userId}/subscribe`, "POST", {
      authUserId: authUserId,
    });
  },
  unsubscribe(authUserId, userId) {
    return fetchDB(`posts/user/${userId}/unsubscribe`, "POST", {
      authUserId: authUserId,
    });
  },
  loadUserSubscriptions(userId) {
    return fetchDB(`user/${userId}/subscriptions`, "GET");
  },
  loadAllUsers() {
    return fetchDB("explore", "GET");
  },
};
