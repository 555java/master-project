import fetchDB from "../utils/api";

export function postSignIn({ email, password }) {
  console.log(email, password);
  return fetchDB("login", {
    method: "POST",
    mode: "no-cors",
    body: {
      email: email,
      password: password,
    },
  });
}

export function postSignUp({ username, email, password }) {
  console.log(username, email, password);

  return fetchDB("register", {
    method: "POST",
    mode: "no-cors",
    body: {
      username: username,
      email: email,
      password: password,
    },
  });
}
