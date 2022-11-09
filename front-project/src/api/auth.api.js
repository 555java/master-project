import fetchDB from "../utils/api";

export const authApi = {
  signIn({ email, password }) {
    return fetchDB("login", {
      method: "POST",
      body: {
        email: email,
        password: password,
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
    });
  },
};
