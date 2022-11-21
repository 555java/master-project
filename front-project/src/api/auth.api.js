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
};
