import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignInForm from "./components/signInForm.component";
import SignUpForm from "./components/signUpForm.component";

import App from "./app/App";
import { AuthPage } from "./routes/authPage/authPage.component";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "auth",
    element: <AuthPage />,
  },
  {
    path: "/signin",
    element: <SignInForm />,
  },
  {
    path: "/register",
    element: <SignUpForm />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

store.dispatch({ type: "init" });
