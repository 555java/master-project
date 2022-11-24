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
};
