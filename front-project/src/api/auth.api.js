import fetchDB from "../utils/api";

export const authApi = {
  signIn({ username, password }) {
    return fetchDB("login", {
      method: "POST",
      body: {
        username,
        password,
      },
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
    });
  },

  signUp({ username, email, password }) {
    return fetchDB("register", {
      method: "POST",
      body: {
        username: username,
        email: email,
        password: password,
      },
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
    });
  },

  loadUser() {
    return fetchDB("user", {
      method: "GET",
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
    });
  },

  logOut() {
    return fetchDB("logout", {
      method: "POST",
      body: {},
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
    });
  },
  subscribe(authUserId, userId) {
    return fetchDB(`posts/user/${userId}/subscribe`, {
      method: "POST",
      body: {
        authUserId: authUserId,
      },
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
    });
  },
  unsubscribe(authUserId, userId) {
    return fetchDB(`posts/user/${userId}/unsubscribe`, {
      method: "POST",
      body: {
        authUserId: authUserId,
      },
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
    });
  },
  loadUserSubscriptions(userId) {
    return fetchDB(`user/${userId}/subscriptions`, {
      method: "GET",
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
    });
  },
  loadAllUsers() {
    return fetchDB("explore", {
      method: "GET",
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
    });
  },
};
